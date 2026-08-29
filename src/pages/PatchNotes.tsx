import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { Swords, Menu, X, FileText, ChevronRight } from "lucide-react";

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

const mockPatches = [
  {
    version: "1.53.1",
    date: "August 2026",
    title: "The Abyss Awakens",
    description: "Major balance changes focusing on the Jungle role and new Abyssal items.",
    highlights: ["Jungle Item Adjustments", "Butterfly Nerf", "Valhein Rework", "New map mechanics"]
  },
  {
    version: "1.52.4",
    date: "July 2026",
    title: "Summer Heatwave",
    description: "Minor hotfixes and balance changes for the ADC lane.",
    highlights: ["Marksman base stats adjusted", "Tower damage increased"]
  }
];

export default function PatchNotes() {
  return (
    <div className="min-h-screen bg-[#0a0a0e] text-white">
      <Navbar />

      <section className="py-16 border-b border-[#222]">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#dc2626]" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#dc2626]">Game Updates</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">
              PATCH <span className="text-[#666]">NOTES</span>
            </h1>
            <p className="text-sm text-[#666] max-w-lg">
              Stay up to date with the latest hero balances, item changes, and game mechanics.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8 space-y-8">
              {mockPatches.map((patch, idx) => (
                <motion.div 
                  key={patch.version} 
                  variants={fadeUp} 
                  initial="hidden" 
                  animate="visible" 
                  custom={idx}
                  className="bg-[#0d0d0d] border border-[#222] p-8 group hover:border-[#dc2626/50] transition-colors"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase bg-[#dc2626] text-white px-3 py-1">V {patch.version}</span>
                        <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#666]">{patch.date}</span>
                      </div>
                      <h3 className="text-2xl font-black text-white tracking-tight">{patch.title}</h3>
                    </div>
                    <FileText className="w-8 h-8 text-[#222] group-hover:text-[#dc2626] transition-colors" />
                  </div>
                  
                  <p className="text-sm text-[#888] mb-6 leading-relaxed">
                    {patch.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#555]">Key Changes</span>
                    <ul className="space-y-2">
                      {patch.highlights.map(item => (
                        <li key={item} className="text-sm text-[#ccc] flex items-center gap-2">
                          <div className="w-1 h-1 bg-[#dc2626]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#dc2626] hover:text-white transition-colors">
                    Read Full Notes <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
            
            <div className="md:col-span-4 space-y-8">
              <div className="bg-[#111] border border-[#222] p-6">
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#666] mb-4">Version History</h4>
                <div className="space-y-2">
                  {mockPatches.map(patch => (
                    <button key={patch.version} className="w-full text-left px-4 py-3 bg-[#0a0a0e] text-sm text-[#888] hover:bg-[#1a1a1a] hover:text-white transition-colors flex justify-between items-center">
                      <span>v{patch.version}</span>
                      <ChevronRight className="w-4 h-4 text-[#555]" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


