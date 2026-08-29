import { useState, useMemo, useDeferredValue } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { Search, Swords, Crown, Menu, X, ChevronRight } from "lucide-react";
import { ROLES, type HeroRole } from "../data/heroes";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { heroImgUrl } from "../lib/heroImg";
const bezierEase = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    // Cap the delay so it doesn't take forever for the 100th hero
    transition: { duration: 0.3, delay: Math.min(i, 15) * 0.02, ease: bezierEase },
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
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link key={link.label} to={link.href} className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#888] hover:text-white transition-colors duration-200">
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

export default function HeroCatalog() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const [roleFilter, setRoleFilter] = useState("All");
  
  const heroes = useQuery(api.heroes.getAll) || [];

  const filtered = useMemo(() => {
    let list = [...heroes];
    
    if (deferredQuery.trim()) {
      const q = deferredQuery.toLowerCase();
      list = list.filter(
        (h) =>
          h.name.toLowerCase().startsWith(q) ||
          h.role.toLowerCase().startsWith(q)
      );
    }
    if (roleFilter !== "All") list = list.filter((h) => h.role === roleFilter);
    
    // Sort A-Z alphabetically by name
    list.sort((a, b) => a.name.localeCompare(b.name));
    
    return list;
  }, [deferredQuery, roleFilter, heroes]);

  return (
    <div className="min-h-screen bg-[#0a0a0e] text-white">
      <Navbar />

      <section className="py-16 border-b border-[#222]">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#dc2626]" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#dc2626]">Hero Roster</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">
              ALL <span className="text-[#666]">HEROES</span>
            </h1>
            <p className="text-sm text-[#666] max-w-lg">
              Browse every hero in the game. Filter by role, tier, or search by name to find the champion that fits your playstyle.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 border-b border-[#222]">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row gap-6 items-start lg:items-center">
            <div className="relative flex-1 max-w-sm w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#555]" />
              <input
                type="text"
                placeholder="Search heroes, roles, lanes..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full h-10 pl-10 pr-4 bg-[#111] border border-[#222] text-sm text-white placeholder:text-[#555] focus:outline-none focus:border-[#dc2626] transition-colors"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setRoleFilter("All")}
                className={`text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-2 transition-colors ${
                  roleFilter === "All"
                    ? "bg-[#dc2626] text-white"
                    : "bg-[#111] text-[#666] hover:text-white border border-[#222]"
                }`}
              >
                All
              </button>
              {ROLES.map((role) => (
                <button
                  key={role}
                  onClick={() => setRoleFilter(role)}
                  className={`text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-2 transition-colors ${
                    roleFilter === role
                      ? "bg-[#dc2626] text-white"
                      : "bg-[#111] text-[#666] hover:text-white border border-[#222]"
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16 py-6">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#333]">
          {filtered.length} hero{filtered.length !== 1 ? "es" : ""} found
        </span>
      </div>

      <section className="pb-24">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16">
          {filtered.length === 0 ? (
            <div className="py-24 text-center">
              <p className="text-[#555] text-sm">No heroes match your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {filtered.map((hero, i) => (
                <motion.div
                  key={hero.id}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                >
                  <div
                    className="block bg-[#0a0a0e] p-6 group hover:bg-[#111] transition-colors duration-300 relative border border-[#222] hover:border-[#dc2626] hover:z-10 flex flex-col items-center text-center m-[-0.5px]"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#050505] border-2 border-[#222] mb-4 overflow-hidden relative group-hover:border-[#dc2626]/50 transition-colors shadow-xl">
                      <img
                        src={heroImgUrl(hero.name)}
                        alt={hero.name}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                        loading="lazy"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                    </div>

                    <h3 className="text-sm font-bold text-white tracking-tight group-hover:text-[#dc2626] transition-colors relative z-10">
                      {hero.name}
                    </h3>
                    <div className="flex items-center justify-center gap-2 mt-1.5 relative z-10">
                      <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-[#555]">{hero.role}</span>
                      <span className="text-[#222]">·</span>
                      <span className="text-[9px] tracking-[0.15em] uppercase text-[#333]">{hero.lane}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}


