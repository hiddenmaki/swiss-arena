import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { heroes as localHeroes } from "../data/heroes";
import {
  Swords,
  Shield,
  Trophy,
  Users,
  Star,
  ChevronRight,
  Globe,
  Play,
  Menu,
  X,
  Target,
  Crown,
  Search,
  BookOpen,
} from "lucide-react";

const bezierEase = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: bezierEase },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

const slideIn = {
  hidden: { opacity: 0, x: -60 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: bezierEase },
  }),
};

/* ─── Navigation ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Heroes", href: "/heroes" },
    { label: "Tierlist", href: "/tierlist" },
    { label: "Draft Planner", href: "/draft" },
    { label: "Patch Notes", href: "/patch-notes" },
    { label: "Esports", href: "/esports" },
    { label: "Fanart", href: "/fanart" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: bezierEase }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0e]/95 backdrop-blur-md border-b border-[#222]" : "bg-transparent"
      }`}
    >
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
              <Link
                key={link.label}
                to={link.href}
                className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#888] hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <div className="w-px h-4 bg-[#222]" />
            <a href="https://www.garena.com" target="_blank" rel="noopener noreferrer">
              <span className="inline-flex items-center bg-[#dc2626] hover:bg-[#b91c1c] text-white text-[11px] font-bold tracking-[0.15em] uppercase px-6 py-2 h-9 cursor-pointer transition-colors">
                Play Free
              </span>
            </a>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white p-2">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#0a0a0e] border-t border-[#222]"
        >
          <div className="px-8 py-6 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium tracking-[0.1em] uppercase text-[#888] hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <a href="https://www.garena.com" target="_blank" rel="noopener noreferrer">
              <span className="inline-flex items-center justify-center w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold tracking-[0.15em] uppercase mt-2 px-6 py-2 cursor-pointer transition-colors">
                Play Free
              </span>
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

/* ─── Hero Section ─── */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full Background Video */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-top opacity-100 transition-opacity duration-1000"
          src="/sinestrea.mp4"
        />
        {/* Dark overlays to ensure text is readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0e] via-[#0a0a0e]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] via-[#0a0a0e]/20 to-transparent" />
        <div className="absolute inset-0 bg-[#0a0a0e]/20" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 w-full">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16 py-32 lg:py-0">
          <div className="max-w-3xl space-y-10">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[#dc2626]" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#dc2626]">
                  MADE BY BADCOOKIE
                </span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}>
              <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-black leading-[0.9] tracking-tight text-white drop-shadow-xl">
                ARENA
                <br />
                <span className="text-[#dc2626]">OF</span>
                <br />
                VALOR
              </h1>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}>
              <p className="text-[15px] leading-relaxed text-[#ccc] max-w-md drop-shadow-md">
                The community hub for Arena of Valor. Browse every hero,
                study strategies, plan your draft picks, and sharpen your
                competitive edge.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3} className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/heroes"
                className="inline-flex items-center bg-[#dc2626] hover:bg-[#b91c1c] text-white text-[11px] font-bold tracking-[0.2em] uppercase px-10 py-3.5 h-12 transition-colors shadow-lg shadow-[#dc2626]/20"
              >
                <Search className="h-4 w-4 mr-2" />
                Browse Heroes
              </Link>
              <Link
                to="/draft"
                className="inline-flex items-center border border-[#fff]/20 hover:border-white text-white text-[11px] font-bold tracking-[0.2em] uppercase px-10 py-3.5 h-12 bg-black/40 backdrop-blur-sm transition-colors"
              >
                <Shield className="h-4 w-4 mr-2" />
                Draft Planner
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}>
              <div className="flex items-center gap-6 pt-4">
                <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#888]">
                  Quick links
                </span>
                <div className="flex items-center gap-3">
                  <Link to="/heroes" className="text-[10px] font-bold tracking-[0.15em] uppercase text-white hover:text-[#dc2626] transition-colors">
                    Hero Catalog
                  </Link>
                  <span className="text-[#555]">/</span>
                  <Link to="/draft" className="text-[10px] font-bold tracking-[0.15em] uppercase text-white hover:text-[#dc2626] transition-colors">
                    Draft Planner
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-[#888]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#dc2626] to-transparent"
        />
      </motion.div>
    </section>
  );
}

/* ─── Stats Section ─── */
function Stats() {
  const stats = [
    { value: "100M+", label: "Downloads", icon: Globe },
    { value: "50+", label: "Heroes", icon: Crown },
    { value: "10K+", label: "Esports Prize Pool", icon: Trophy },
    { value: "200+", label: "Countries", icon: Globe },
  ];

  return (
    <section className="relative py-24 border-y border-[#222]">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i}
              className={`relative py-12 px-6 lg:px-10 text-center border-[#222] ${
                i % 2 === 0 ? "border-r" : ""
              } ${i < 2 ? "border-b" : ""} lg:border-b-0 ${
                i < 3 ? "lg:border-r" : "lg:border-r-0"
              }`}
            >
              <stat.icon className="h-5 w-5 text-[#dc2626] mx-auto mb-4" strokeWidth={1.5} />
              <div className="text-4xl lg:text-5xl font-black text-white tracking-tight">{stat.value}</div>
              <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#666] mt-3">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── System Tools Section ─── */
function Features() {
  const tools = [
    {
      tag: "SYSTEM_TOOL",
      icon: Target,
      title: "DRAFT SIMULATOR",
      description: "Draft จำลองตามห้องซ้อมแบบ 5vs5 Tournament มีระบบจับเวลา Pick & Ban",
      href: "/draft",
      action: "เปิด Draft Simulator →",
      accent: "blue",
      image: "/feature_draft.jpg"
    },
    {
      tag: "SYSTEM_TOOL",
      icon: Crown,
      title: "HERO TIERLIST",
      description: "จัด Tier list ข้อมูลอัปเดตล่าสุด ดู Meta ปัจจุบันและการแก้ทาง",
      href: "/tierlist",
      action: "เปิด Tierlist →",
      accent: "red",
      image: "/feature_tierlist.jpg"
    },
    {
      tag: "SYSTEM_INFO",
      icon: Trophy,
      title: "ESPORTS NEWS",
      description: "All AoV Tournament พร้อม Statistics, Standings, Timeline",
      href: "/esports",
      action: "ดู Esports →",
      accent: "blue",
      image: "/feature_esports.jpg"
    },
    {
      tag: "SYSTEM_INFO",
      icon: BookOpen,
      title: "PATCH NOTES",
      description: "Buff / Nerf / Hero ใหม่ของทุก patch ล่าสุด · มีภาษาไทย",
      href: "/patch-notes",
      action: "ดู Patch Notes →",
      accent: "red",
      image: "/feature_patchnotes.jpg"
    }
  ];

  return (
    <section className="relative py-32 bg-[#0a0a0e]" id="tools">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#dc2626]" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#dc2626]">Core Systems</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight">
            SWISS ARENA
            <br />
            <span className="text-[#666]">TOOLS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((tool, i) => (
            <Link key={tool.title} to={tool.href}>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                custom={i}
                className={`group relative bg-[#111] border border-[#222] p-10 lg:p-12 transition-all duration-300 overflow-hidden h-full flex flex-col justify-between min-h-[360px] ${
                  tool.accent === 'red' ? 'hover:border-[#dc2626]' : 'hover:border-[#3b82f6]'
                }`}
              >
                {/* Background glow on hover */}
                <div className={`absolute -right-20 -top-20 w-64 h-64 opacity-0 group-hover:opacity-10 blur-3xl rounded-full transition-opacity duration-700 ${tool.accent === 'red' ? 'bg-[#dc2626]' : 'bg-[#2563eb]'}`} />
                
                {/* Skin Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={tool.image}
                    alt={tool.title}
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-700 scale-105 group-hover:scale-100 mix-blend-luminosity group-hover:mix-blend-normal"
                  />
                  {/* Gradient Overlay to ensure text readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#111]/60 via-[#111]/70 to-[#111]/90 group-hover:from-[#111]/30 group-hover:via-[#111]/50 group-hover:to-[#111]/80 transition-all duration-700" />
                </div>
                
                <div className="relative z-10">
                  <div className="h-[108px]" />
                  <h3 className={`text-2xl lg:text-3xl font-black text-white tracking-tight mb-4 transition-colors ${
                    tool.accent === 'red' ? 'group-hover:text-[#dc2626]' : 'group-hover:text-[#3b82f6]'
                  }`}>{tool.title}</h3>
                  <p className="text-sm text-[#888] mb-12 max-w-md leading-relaxed">{tool.description}</p>
                </div>
                
                <div className={`relative z-10 mt-auto inline-flex text-[11px] font-bold tracking-[0.2em] uppercase transition-colors ${tool.accent === 'red' ? 'text-[#dc2626] group-hover:text-white' : 'text-[#3b82f6] group-hover:text-white'}`}>
                  {tool.action}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Hero Spotlight Section ─── */
function HeroSpotlight() {
  const heroes = [
    {
      name: "Butterfly",
      role: "Assassin",
      description: "A lethal blade dancer who resets cooldowns on kills, enabling devastating multi-target combos.",
      stats: { damage: 95, mobility: 90, durability: 40, utility: 30 },
    },
    {
      name: "Valhein",
      role: "Marksman",
      description: "A relentless marksman who slows enemies with each hit, controlling the pace of every engagement.",
      stats: { damage: 92, mobility: 65, durability: 35, utility: 70 },
    },
    {
      name: "Krixi",
      role: "Mage",
      description: "An ethereal sorceress channeling devastating area-of-effect spells that reshape teamfights.",
      stats: { damage: 90, mobility: 50, durability: 30, utility: 80 },
    },
  ];

  const [active, setActive] = useState(0);
  const current = heroes[active];

  return (
    <section className="relative py-32 border-y border-[#222]" id="heroes">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#2563eb]" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#2563eb]">Hero Roster</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight">
            CHOOSE YOUR
            <br />
            <span className="text-[#2563eb]">CHAMPION</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-0">
            {heroes.map((hero, i) => (
              <button
                key={hero.name}
                onClick={() => setActive(i)}
                className={`w-full text-left p-6 border-l-2 transition-all duration-300 ${
                  i === active
                    ? "border-l-[#dc2626] bg-[#111]"
                    : "border-l-transparent hover:bg-[#0d0d0d]"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#333]">0{i + 1}</span>
                  <div>
                    <div className={`text-sm font-bold tracking-tight transition-colors ${i === active ? "text-white" : "text-[#888]"}`}>
                      {hero.name}
                    </div>
                    <div className="text-[10px] tracking-[0.15em] uppercase text-[#555] mt-0.5">{hero.role}</div>
                  </div>
                  {i === active && <ChevronRight className="h-4 w-4 text-[#dc2626] ml-auto" />}
                </div>
              </button>
            ))}
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: bezierEase }}
            className="lg:col-span-8"
          >
            <div className="bg-[#0d0d0d] border border-[#222] p-8 lg:p-12">
              <div className="flex items-start justify-between mb-10">
                <div>
                  <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#dc2626] mb-3">Hero Spotlight</div>
                  <h3 className="text-3xl lg:text-4xl font-black text-white tracking-tight">{current.name}</h3>
                  <div className="text-[11px] tracking-[0.2em] uppercase text-[#666] mt-2">{current.role}</div>
                </div>
                <div className="w-16 h-16 bg-[#dc2626/0.1] flex items-center justify-center">
                  <Swords className="h-8 w-8 text-[#dc2626]" strokeWidth={1.5} />
                </div>
              </div>

              <p className="text-sm leading-relaxed text-[#888] max-w-lg mb-10">{current.description}</p>

              <div className="space-y-5">
                {Object.entries(current.stats).map(([stat, value]) => (
                  <div key={stat}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#666]">{stat}</span>
                      <span className="text-[10px] font-bold tracking-[0.15em] text-white">{value}</span>
                    </div>
                    <div className="h-1 bg-[#1a1a1a]">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${value}%` }}
                        transition={{ duration: 0.8, delay: 0.2, ease: bezierEase }}
                        className={`h-full ${
                          stat === "damage"
                            ? "bg-[#dc2626]"
                            : stat === "mobility"
                            ? "bg-[#3b82f6]"
                            : stat === "durability"
                            ? "bg-[#dc2626/0.6]"
                            : "bg-[#3b82f6/0.6]"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Game Modes Section ─── */
function GameModes() {
  const modes = [
    {
      title: "5v5 Grand Battle",
      subtitle: "CLASSIC MOBA",
      description: "Three lanes, five roles, full strategy. The definitive Arena of Valor experience on the standard three-lane map.",
      accent: "red",
    },
    {
      title: "3v3 Rapid",
      subtitle: "FAST PACED",
      description: "Compact map, faster games. Perfect for quick sessions where every fight counts.",
      accent: "blue",
    },
    {
      title: "Battle Royale",
      subtitle: "LAST TEAM STANDING",
      description: "50 heroes dropped into a shrinking arena. Loot, craft, and fight to be the last team standing.",
      accent: "red",
    },
    {
      title: "1v1 Duel",
      subtitle: "SKILL MATCH",
      description: "Pure mechanical skill. No teammates, no excuses — prove your individual mastery.",
      accent: "blue",
    },
  ];

  return (
    <section className="relative py-32" id="modes">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#dc2626]" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#dc2626]">Play Your Way</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight">
            MULTIPLE
            <br />
            <span className="text-[#666]">GAME MODES</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#222]">
          {modes.map((mode, i) => (
            <motion.div
              key={mode.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              custom={i}
              className="bg-[#0a0a0e] p-10 lg:p-14 group hover:bg-[#0d0d0d] transition-colors duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className={`text-[9px] font-bold tracking-[0.3em] uppercase px-3 py-1.5 ${mode.accent === "red" ? "bg-[#dc2626/0.1] text-[#dc2626]" : "bg-[#2563eb/0.1] text-[#3b82f6]"}`}>
                  {mode.subtitle}
                </span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-black text-white tracking-tight mb-4 group-hover:text-[#dc2626] transition-colors">
                {mode.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#666] max-w-md">{mode.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Esports Section ─── */
function Esports() {
  const events = [
    { title: "AoV World Cup 2026", date: "JAN 2026", location: "Bangkok, Thailand", prize: "$2,000,000", status: "upcoming" },
    { title: "Regional Championship", date: "MAR 2026", location: "Online — SEA", prize: "$500,000", status: "upcoming" },
    { title: "World Cup 2025 Finals", date: "DEC 2025", location: "Jakarta, Indonesia", prize: "$2,000,000", status: "completed" },
  ];

  return (
    <section className="relative py-32 border-y border-[#222]" id="esports">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[#dc2626]" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#dc2626]">Esports</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-8">
                COMPETE AT
                <br />
                <span className="text-[#dc2626]">THE HIGHEST</span>
                <br />
                LEVEL
              </h2>
              <p className="text-sm leading-relaxed text-[#888] max-w-md mb-10">
                From weekly ranked matches to the World Cup stage — Arena of
                Valor's esports ecosystem rewards the most skilled and
                dedicated players on the planet.
              </p>
              <a href="https://www.garena.com" target="_blank" rel="noopener noreferrer">
                <span className="inline-flex items-center border border-[#dc2626] text-[#dc2626] hover:bg-[#dc2626] hover:text-white text-[11px] font-bold tracking-[0.2em] uppercase px-8 py-3 h-11 bg-transparent cursor-pointer transition-colors">
                  <Trophy className="h-4 w-4 mr-2" />
                  View Esports Hub
                </span>
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-7 space-y-0">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                variants={slideIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="border-b border-[#222] py-8 group"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#555]">{event.date}</span>
                      {event.status === "upcoming" && (
                        <span className="text-[9px] font-bold tracking-[0.15em] uppercase px-2 py-0.5 bg-[#dc2626/0.15] text-[#dc2626]">Upcoming</span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#dc2626] transition-colors">{event.title}</h3>
                    <div className="text-[11px] tracking-[0.1em] text-[#555] mt-2">{event.location}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-black text-[#dc2626]">{event.prize}</div>
                    <div className="text-[9px] tracking-[0.2em] uppercase text-[#333] mt-1">Prize Pool</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Community Section ─── */
function Community() {
  const channels = [
    { label: "Discord", members: "2.4M Members", icon: Users },
    { label: "Facebook", members: "18M Likes", icon: Globe },
    { label: "YouTube", members: "5.2M Subscribers", icon: Play },
    { label: "Instagram", members: "8.7M Followers", icon: Star },
  ];

  return (
    <section className="relative py-32" id="community">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#2563eb]" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#2563eb]">Join the Fight</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight">
            A GLOBAL
            <br />
            <span className="text-[#2563eb]">COMMUNITY</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#222]">
          {channels.map((channel, i) => (
            <motion.a
              key={channel.label}
              href="https://www.garena.com"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="bg-[#0a0a0e] p-10 group hover:bg-[#0d0d0d] transition-colors duration-500 block"
            >
              <channel.icon className="h-6 w-6 text-[#2563eb] mb-6 group-hover:text-[#3b82f6] transition-colors" strokeWidth={1.5} />
              <div className="text-sm font-bold text-white tracking-tight mb-2 group-hover:text-[#3b82f6] transition-colors">{channel.label}</div>
              <div className="text-[10px] tracking-[0.15em] uppercase text-[#555]">{channel.members}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Section ─── */
function CTA() {
  return (
    <section className="relative py-32 border-y border-[#222] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#dc2626/0.04] via-transparent to-[#2563eb/0.04]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#222/0.3] rotate-45" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16 text-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tight mb-8">
            MASTER THE
            <br />
            <span className="text-[#dc2626]">META</span>
          </h2>
          <p className="text-[15px] leading-relaxed text-[#888] max-w-lg mx-auto mb-12">
            Every hero, every matchup, every draft — all in one place.
            MADE BY BADCOOKIE is the definitive resource for competitive
            Arena of Valor players.
          </p>
          <Link
            to="/heroes"
            className="inline-flex items-center bg-[#dc2626] hover:bg-[#b91c1c] text-white text-[11px] font-bold tracking-[0.2em] uppercase px-12 py-4 h-13 transition-colors"
          >
            <Search className="h-4 w-4 mr-2" />
            Explore Heroes
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  const footerLinks = [
    {
      title: "Heroes",
      links: [
        { label: "Hero Catalog", href: "/heroes" },
        { label: "Tier Lists", href: "/heroes" },
        { label: "Counter Picks", href: "/heroes" },
        { label: "Synergies", href: "/heroes" },
      ],
    },
    {
      title: "Tools",
      links: [
        { label: "Draft Planner", href: "/draft" },
        { label: "Strategy Guides", href: "#features" },
        { label: "Patch Notes", href: "#" },
        { label: "Ranked Stats", href: "#" },
      ],
    },
    {
      title: "Community",
      links: [
        { label: "Discord", href: "#" },
        { label: "Reddit", href: "#" },
        { label: "YouTube", href: "#" },
        { label: "Content Creators", href: "#" },
      ],
    },
    {
      title: "Game",
      links: [
        { label: "Download RoV", href: "https://www.garena.com" },
        { label: "Esports", href: "#" },
        { label: "Official Site", href: "https://www.garena.com" },
        { label: "Support", href: "#" },
      ],
    },
  ];

  return (
    <footer className="relative bg-[#060608] pt-20 pb-12">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 pb-16 border-b border-[#222]">
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <div className="flex items-center gap-3 mb-6">
              <img src="/favicon.png" alt="Logo" className="h-12 w-12 object-contain drop-shadow-md scale-110" />
              <div>
                <span className="text-xs font-bold tracking-[0.15em] uppercase text-white">Swiss</span>
                <span className="text-xs font-light tracking-[0.15em] uppercase text-[#dc2626] ml-1">Arena</span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-[#555] max-w-[200px]">
              The community hub for Arena of Valor. Guides, hero data,
              draft tools, and strategy — built for competitive players.
            </p>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#dc2626] mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") ? (
                      <Link to={link.href} className="text-[11px] text-[#666] hover:text-white transition-colors tracking-wide">
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-[11px] text-[#666] hover:text-white transition-colors tracking-wide"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8">
          <div className="flex items-center gap-6">
            <span className="text-[10px] tracking-[0.15em] uppercase text-[#333]">© 2026 Garena. All Rights Reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[10px] tracking-[0.1em] uppercase text-[#333] hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-[10px] tracking-[0.1em] uppercase text-[#333] hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-[10px] tracking-[0.1em] uppercase text-[#333] hover:text-white transition-colors">EULA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Landing Page ─── */
export default function Landing() {
  const heroes = useQuery(api.heroes.getAll);
  const seed = useMutation(api.heroes.seedHeroes);

  useEffect(() => {
    if (heroes && heroes.length === 0) {
      console.log("Seeding Database...");
      seed({ heroes: localHeroes });
    }
  }, [heroes, seed]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-[#0a0a0e] text-white"
    >
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HeroSpotlight />
      <GameModes />
      <Esports />
      <Community />
      <CTA />
      <Footer />
    </motion.div>
  );
}


