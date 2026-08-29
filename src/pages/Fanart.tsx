import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { Swords, Menu, X, Heart, Image as ImageIcon } from "lucide-react";

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
          <Link to="/" className="flex items-center gap-3">
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

const mockFanarts = [
  { id: 1, title: "Cyberpunk Butterfly", artist: "NeonDraws", likes: 342, image: "https://images.unsplash.com/photo-1578358485290-781dc3f11467?auto=format&fit=crop&q=80&w=800" },
  { id: 2, title: "Krixi in the Forest", artist: "NatureArtist", likes: 215, image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=800" },
  { id: 3, title: "Valhein Showdown", artist: "ActionArt", likes: 189, image: "https://images.unsplash.com/photo-1615592389070-bcc97e0506f3?auto=format&fit=crop&q=80&w=800" },
  { id: 4, title: "Abyssal Dragon", artist: "MonsterInk", likes: 512, image: "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?auto=format&fit=crop&q=80&w=800" },
  { id: 5, title: "Nakroth Slash", artist: "SpeedLines", likes: 420, image: "https://images.unsplash.com/photo-1542451313056-b7c8e626645f?auto=format&fit=crop&q=80&w=800" },
  { id: 6, title: "Athanor Landscape", artist: "WorldBuilder", likes: 128, image: "https://images.unsplash.com/photo-1620336655055-088d06e36bf0?auto=format&fit=crop&q=80&w=800" },
];

export default function Fanart() {
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
              <button className="flex items-center bg-[#111] border border-[#222] hover:border-[#dc2626] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-6 py-3 transition-colors">
                <ImageIcon className="w-4 h-4 mr-2" /> Submit Art
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#222] border border-[#222]">
            {mockFanarts.map((art, idx) => (
              <motion.div key={art.id} variants={fadeUp} initial="hidden" animate="visible" custom={idx} className="bg-[#0a0a0e] p-6 group">
                <div className="relative aspect-[4/3] overflow-hidden mb-4 border border-[#222] group-hover:border-[#dc2626/50] transition-colors">
                  <img 
                    src={art.image} 
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
                  <div className="flex items-center gap-1.5 text-[#555] group-hover:text-white transition-colors cursor-pointer">
                    <Heart className="w-4 h-4" />
                    <span className="text-[10px] font-bold">{art.likes}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


