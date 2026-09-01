import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { Swords, Menu, X, Trophy, ExternalLink } from "lucide-react";
import { mockNews } from "@/data/esports";

const bezierEase = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05, ease: bezierEase },
  }),
};




export default function Esports() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (typeof document !== 'undefined') {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0e] text-white">
      <section className="py-16 border-b border-[#222]">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#dc2626]" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#dc2626]">Competitive Scene</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">
              ESPORTS <span className="text-[#dc2626]">NEWS</span>
            </h1>
            <p className="text-sm text-[#666] max-w-lg">
              Follow the pro scene, tournament results, and in-depth meta analysis from the highest level of play.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockNews.map((news, idx) => (
              <motion.div key={news.id} variants={fadeUp} initial="hidden" animate="visible" custom={idx} className="group cursor-pointer">
                <div 
                  onClick={() => setSelectedImage(news.image)}
                  className="relative aspect-video overflow-hidden border border-[#222] mb-4 group-hover:border-[#dc2626] transition-colors cursor-zoom-in"
                >
                  <div className="absolute top-3 left-3 z-10 bg-[#dc2626] text-white text-[9px] font-bold tracking-[0.2em] uppercase px-3 py-1">
                    {news.category}
                  </div>
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] via-transparent to-transparent opacity-80" />
                </div>
                
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] tracking-[0.1em] text-[#666]">{news.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-[#dc2626] transition-colors">
                  {news.title}
                </h3>
                
                <p className="text-sm text-[#888] line-clamp-2">
                  {news.excerpt}
                </p>
                
                <div className="mt-4 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#555] group-hover:text-[#dc2626] transition-colors">
                  Read Article <ExternalLink className="w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              alt="Enlarged news image"
              className="max-w-full max-h-[90vh] object-contain shadow-2xl border border-[#333]"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
