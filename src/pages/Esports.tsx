import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { Swords, Menu, X, Trophy, ExternalLink } from "lucide-react";

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

const mockNews = [
  {
    id: 1,
    title: "Talon Esports takes the AIC 2026 Crown",
    date: "Aug 15, 2026",
    category: "Tournament",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
    excerpt: "In a grueling 7-game series, Talon Esports manages to reverse sweep and claim the international title."
  },
  {
    id: 2,
    title: "Roster Changes: Summer Split Shakeup",
    date: "Aug 10, 2026",
    category: "Roster",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
    excerpt: "Several top teams announce major roster changes ahead of the upcoming Winter Regional Qualifiers."
  },
  {
    id: 3,
    title: "The Rise of Support Carry Meta",
    date: "Aug 02, 2026",
    category: "Analysis",
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&q=80&w=800",
    excerpt: "How professional teams are utilizing high-damage support heroes to dominate the early game."
  }
];

export default function Esports() {
  return (
    <div className="min-h-screen bg-[#0a0a0e] text-white">
      <Navbar />

      <section className="py-16 border-b border-[#222]">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#dc2626]" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#dc2626]">Competitive Scene</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">
              ESPORTS <span className="text-[#666]">NEWS</span>
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
                <div className="relative aspect-video overflow-hidden border border-[#222] mb-4 group-hover:border-[#dc2626] transition-colors">
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
    </div>
  );
}


