import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { Swords, Menu, X, Heart, Image as ImageIcon, Upload, Loader2 } from "lucide-react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";

const bezierEase = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05, ease: bezierEase },
  }),
};

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [
    { label: "Heroes", href: "/heroes" },
    { label: "Tierlist", href: "/tierlist" },
    { label: "Draft Planner", href: "/draft" },
    { label: "Patch Notes", href: "/patch-notes" },
    { label: "Esports", href: "/esports" },
    { label: "Fanart", href: "/fanart" },
  ];
  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0e]/95 backdrop-blur-md border-b border-[#222]">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-3">
            <img src="/favicon.png" alt="Logo" className="h-12 w-12 object-contain drop-shadow-md scale-110" />
            <div>
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-white">Swiss</span>
              <span className="text-sm font-light tracking-[0.2em] uppercase text-[#dc2626] ml-1">Arena</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link key={link.label} to={link.href} className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#888] hover:text-white transition-colors duration-200">
                {link.label}
              </Link>
            ))}
            <div className="w-px h-4 bg-[#222]" />
            <a href="https://www.garena.com" target="_blank" rel="noopener noreferrer">
              <span className="inline-flex items-center bg-[#dc2626] hover:bg-[#b91c1c] text-white text-[11px] font-bold tracking-[0.15em] uppercase px-6 py-2 h-9 cursor-pointer transition-colors">
                Play RoV
              </span>
            </a>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white p-2">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0e] border-t border-[#222]">
          <div className="px-8 py-6 flex flex-col gap-4">
            {links.map((link) => (
              <Link key={link.label} to={link.href} onClick={() => setMobileOpen(false)} className="text-sm font-medium tracking-[0.1em] uppercase text-[#888] hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}



export default function Fanart() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageDimensions, setImageDimensions] = useState<{width: number, height: number} | null>(null);
  const [fileError, setFileError] = useState<string>("");
  const [isUploading, setIsUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (typeof document !== 'undefined') {
    if (isModalOpen || selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }

  const fanarts = useQuery(api.fanarts.list);
  const generateUploadUrl = useMutation(api.fanarts.generateUploadUrl);
  const createFanart = useMutation(api.fanarts.create);
  const likeFanart = useMutation(api.fanarts.like);

  const handleLike = async (id: Id<"fanarts">) => {
    const liked = localStorage.getItem(`liked_${id}`);
    if (liked) return;
    
    // Optimistic UI could be added here, but for simplicity we just mutate
    localStorage.setItem(`liked_${id}`, "true");
    await likeFanart({ id });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile || !title || !artist) return;
    if (selectedFile.size > 5 * 1024 * 1024) {
      setFileError("File size exceeds 5MB limit.");
      return;
    }
    
    setIsUploading(true);
    try {
      const postUrl = await generateUploadUrl();
      const result = await fetch(postUrl, {
        method: "POST",
        headers: { "Content-Type": selectedFile.type },
        body: selectedFile,
      });
      const { storageId } = await result.json();
      
      await createFanart({ storageId, title, artist });
      
      setIsModalOpen(false);
      setTitle("");
      setArtist("");
      setSelectedFile(null);
    } catch (error) {
      console.error("Failed to upload:", error);
    } finally {
      setIsUploading(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#0a0a0e] text-white">
      <Navbar />

      <section className="py-16 border-b border-[#222]">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-[#dc2626]" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#dc2626]">Community Art</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">
                FANART <span className="text-[#666]">GALLERY</span>
              </h1>
              <p className="text-sm text-[#666] max-w-lg">
                Explore amazing artwork created by the Arena of Valor community.
              </p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center bg-[#111] border border-[#222] hover:border-[#dc2626] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-6 py-3 transition-colors"
              >
                <ImageIcon className="w-4 h-4 mr-2" /> Submit Art
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#222] border border-[#222]">
            {fanarts === undefined ? (
              <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-center py-20 text-[#666]">
                <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-[#dc2626]" />
                <p>Loading artworks...</p>
              </div>
            ) : fanarts.length === 0 ? (
              <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-center py-20 text-[#666]">
                <ImageIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No fanarts yet. Be the first to submit!</p>
              </div>
            ) : (
              fanarts.map((art, idx) => {
                const hasLiked = localStorage.getItem(`liked_${art._id}`);
                return (
                  <motion.div key={art._id} variants={fadeUp} initial="hidden" animate="visible" custom={idx} className="bg-[#0a0a0e] p-6 group">
                    <div 
                      onClick={() => setSelectedImage(art.imageUrl!)}
                      className="relative aspect-[4/3] overflow-hidden mb-4 border border-[#222] group-hover:border-[#dc2626/50] transition-colors cursor-zoom-in"
                    >
                      <img 
                        src={art.imageUrl!} 
                        alt={art.title}
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] to-transparent opacity-60" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-bold text-white tracking-tight group-hover:text-[#dc2626] transition-colors">{art.title}</h3>
                        <div className="text-[10px] tracking-[0.1em] text-[#666] mt-1">by @{art.artist}</div>
                      </div>
                      <button 
                        onClick={() => handleLike(art._id)}
                        disabled={!!hasLiked}
                        className={`flex items-center gap-1.5 transition-colors ${hasLiked ? 'text-[#dc2626]' : 'text-[#555] hover:text-[#dc2626]'}`}
                      >
                        <Heart className={`w-4 h-4 ${hasLiked ? 'fill-current' : ''}`} />
                        <span className="text-[10px] font-bold">{art.likes}</span>
                      </button>
                    </div>
                  </motion.div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* Upload Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#050508]/90 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md bg-[#0a0a0e] border border-[#333] p-8 shadow-2xl relative"
          >
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-[#888] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">Submit <span className="text-[#dc2626]">Artwork</span></h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-[#888] mb-2">Artwork Title</label>
                <input 
                  type="text"
                  required
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  className="w-full bg-[#111] border border-[#333] text-white px-4 py-3 focus:outline-none focus:border-[#dc2626] transition-colors"
                  placeholder="e.g. Cyberpunk Butterfly"
                />
              </div>
              
              <div>
                <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-[#888] mb-2">Artist Name</label>
                <input 
                  type="text"
                  required
                  value={artist}
                  onChange={e => setArtist(e.target.value)}
                  className="w-full bg-[#111] border border-[#333] text-white px-4 py-3 focus:outline-none focus:border-[#dc2626] transition-colors"
                  placeholder="How should we credit you?"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-[#888]">Image File</label>
                  <span className="text-[10px] text-[#666] tracking-wider">JPG, PNG, WEBP (Max: 5MB)</span>
                </div>
                <div className={`border-2 border-dashed ${fileError ? 'border-[#dc2626]' : 'border-[#333] hover:border-[#dc2626]'} p-8 text-center transition-colors cursor-pointer relative`}>
                  <input 
                    type="file"
                    accept="image/jpeg, image/png, image/webp"
                    required
                    onChange={e => {
                      const file = e.target.files?.[0];
                      if (file) {
                        if (file.size > 5 * 1024 * 1024) {
                          setFileError("File is too large (Max 5MB).");
                          setSelectedFile(null);
                          setImageDimensions(null);
                        } else {
                          setFileError("");
                          setSelectedFile(file);
                          
                          // Get image dimensions
                          const url = URL.createObjectURL(file);
                          const img = new Image();
                          img.onload = () => {
                            setImageDimensions({ width: img.width, height: img.height });
                            URL.revokeObjectURL(url);
                          };
                          img.src = url;
                        }
                      } else {
                        setSelectedFile(null);
                        setImageDimensions(null);
                        setFileError("");
                      }
                    }}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  {selectedFile ? (
                    <div className="text-white text-sm">
                      <ImageIcon className="w-8 h-8 mx-auto mb-2 text-[#dc2626]" />
                      <div className="font-medium truncate max-w-[200px] mx-auto">{selectedFile.name}</div>
                      <div className="text-[#888] text-[10px] mt-1 flex items-center justify-center gap-2">
                        <span>{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</span>
                        {imageDimensions && (
                          <>
                            <span className="w-1 h-1 rounded-full bg-[#333]" />
                            <span>{imageDimensions.width} x {imageDimensions.height} px</span>
                          </>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="text-[#666] text-sm">
                      <Upload className="w-8 h-8 mx-auto mb-2" />
                      Click or drag image to upload
                    </div>
                  )}
                </div>
                {fileError && <p className="text-[#dc2626] text-[10px] mt-2 font-bold tracking-wider">{fileError}</p>}
              </div>

              <button 
                type="submit"
                disabled={isUploading}
                className="w-full flex items-center justify-center bg-[#dc2626] hover:bg-[#b91c1c] disabled:bg-[#333] disabled:text-[#888] text-white text-[11px] font-bold tracking-[0.15em] uppercase px-6 py-4 transition-colors"
              >
                {isUploading ? (
                  <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Uploading...</>
                ) : (
                  "Post to Gallery"
                )}
              </button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm cursor-zoom-out"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-[#888] hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: bezierEase }}
              src={selectedImage}
              alt="Enlarged fanart"
              className="max-w-full max-h-[90vh] object-contain shadow-2xl border border-[#333]"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


