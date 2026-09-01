import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { heroes as localHeroes } from "../data/heroes";
import { mockNews } from "@/data/esports";
import { heroImgUrl } from "../lib/heroImg";
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

/* ─── Hero Parade Section ─── */
function Stats() {
  const heroes = useQuery(api.heroes.getAll);

  if (!heroes || heroes.length === 0) return null;

  // Shuffle and take a small subset to prevent mobile memory limits (Safari canvas crash)
  const shuffled = [...heroes].sort(() => 0.5 - Math.random());
  const subset1 = shuffled.slice(0, 15);
  const subset2 = shuffled.slice(15, 30);
  
  // Duplicate exactly once for a seamless -50% translation marquee
  const row1 = [...subset1, ...subset1];
  const row2 = [...subset2, ...subset2];

  return (
    <section className="relative py-0 border-y border-[#222] overflow-hidden">
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0a0a0e] to-transparent z-10 pointer-events-none" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a0a0e] to-transparent z-10 pointer-events-none" />
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0e] to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0e] to-transparent z-10 pointer-events-none" />

      {/* Row 1 — scroll left */}
      <div
        className="flex gap-2 mb-2"
        style={{ animation: "fanart-scroll 60s linear infinite", width: "max-content" }}
      >
        {row1.map((hero, i) => (
          <div
            key={`r1-${hero.id}-${i}`}
            className="relative flex-shrink-0 w-28 h-36 overflow-hidden bg-[#111] group"
          >
            <img
              src={heroImgUrl(hero.name)}
              alt={hero.name}
              className="absolute inset-0 w-full h-full object-cover object-top opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
              loading="lazy"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e]/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-[9px] font-bold text-white uppercase tracking-wider truncate">{hero.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Row 2 — scroll right */}
      <div
        className="flex gap-2"
        style={{ animation: "fanart-scroll-reverse 50s linear infinite", width: "max-content" }}
      >
        {row2.map((hero, i) => (
          <div
            key={`r2-${hero.id}-${i}`}
            className="relative flex-shrink-0 w-28 h-36 overflow-hidden bg-[#111] group"
          >
            <img
              src={heroImgUrl(hero.name)}
              alt={hero.name}
              className="absolute inset-0 w-full h-full object-cover object-top opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
              loading="lazy"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e]/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-[9px] font-bold text-white uppercase tracking-wider truncate">{hero.name}</p>
            </div>
          </div>
        ))}
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
            <span className="text-[#dc2626]">TOOLS</span>
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

/* ─── Fanart Showcase Section ─── */
function FanartShowcase() {
  const fanarts = useQuery(api.fanarts.list);
  const [displayArts, setDisplayArts] = useState<any[]>([]);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (fanarts && displayArts.length === 0 && fanarts.length > 0) {
      const shuffled = [...fanarts].sort(() => 0.5 - Math.random());
      setDisplayArts(shuffled);
    }
  }, [fanarts]);

  // Auto-scroll logic for PC (and mobile if untouched)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container || displayArts.length === 0) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    let isHovered = false;
    let isTouching = false;

    const handleMouseEnter = () => isHovered = true;
    const handleMouseLeave = () => isHovered = false;
    const handleTouchStart = () => isTouching = true;
    const handleTouchEnd = () => {
      setTimeout(() => isTouching = false, 2000); // Wait 2s before resuming after swipe
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd);

    const scroll = (currentTime: number) => {
      if (!isHovered && !isTouching) {
        const deltaTime = currentTime - lastTime;
        if (deltaTime > 20) { // roughly 50fps
          container.scrollLeft += 1;
          lastTime = currentTime;
          
          // Reset to beginning if reached the end
          if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 1) {
            container.scrollLeft = 0;
          }
        }
      } else {
        lastTime = currentTime; // keep time updated while paused
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [displayArts]);

  return (
    <section className="relative py-32 border-y border-[#222]" id="fanart">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#10b981]" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#10b981]">Community</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight">
              FANART
              <br />
              <span className="text-[#dc2626]">GALLERY</span>
            </h2>
          </div>
          <Link to="/fanart" className="inline-flex items-center border border-[#222] text-[#888] hover:text-white hover:border-white text-[10px] font-bold tracking-[0.2em] uppercase px-8 py-3 transition-colors">
            View All Fanarts <ChevronRight className="w-4 h-4 ml-2" />
          </Link>
        </motion.div>

        {!fanarts ? (
           <div className="py-20 flex justify-center opacity-50"><div className="w-8 h-8 border-2 border-[#10b981] border-t-transparent rounded-full animate-spin" /></div>
        ) : displayArts.length === 0 && fanarts.length === 0 ? (
           <div className="py-20 text-center text-[#666] text-sm uppercase tracking-widest font-bold">No Fanarts Yet</div>
        ) : (
          <div className="relative -mx-4 md:-mx-8 lg:-mx-16 px-4 md:px-8 lg:px-16 overflow-hidden">
            {/* Fade edges on desktop */}
            <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 lg:w-32 bg-gradient-to-r from-[#0a0a0e] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 lg:w-32 bg-gradient-to-l from-[#0a0a0e] to-transparent z-10 pointer-events-none" />

            <div 
              ref={scrollRef}
              className="flex gap-4 lg:gap-6 overflow-x-auto no-scrollbar pb-8 pt-4"
              style={{ scrollBehavior: 'auto' }}
            >
              {displayArts.map((art, i) => (
                <Link
                  to="/fanart"
                  key={art._id}
                  className="group relative flex-shrink-0 w-64 h-80 overflow-hidden bg-[#111] border border-[#222] hover:border-[#10b981] transition-colors"
                >
                  {art.imageUrl && (
                    <img
                      src={art.imageUrl}
                      alt={art.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] via-[#0a0a0e]/20 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-base font-bold text-white tracking-tight mb-1 truncate">{art.title}</h3>
                    <div className="text-[10px] tracking-[0.1em] uppercase text-[#10b981]">By {art.artist}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
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
      image: "/mode_5v5.jpg"
    },
    {
      title: "3v3 Rapid",
      subtitle: "FAST PACED",
      description: "Compact map, faster games. Perfect for quick sessions where every fight counts.",
      accent: "blue",
      image: "/mode_3v3.jpg"
    },
    {
      title: "Championship",
      subtitle: "TOURNAMENT SERIES",
      description: "Prove your worth in Solo Champion, Double, Triple, and achieve the ultimate Grand Slam title.",
      accent: "red",
      image: "/mode_champ.jpg"
    },
    {
      title: "1v1 Duel",
      subtitle: "SKILL MATCH",
      description: "Pure mechanical skill. No teammates, no excuses — prove your individual mastery.",
      accent: "blue",
      image: "/mode_1v1.jpg"
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
            <span className="text-[#dc2626]">GAME MODES</span>
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
              className={`group relative bg-[#0a0a0e] border border-transparent p-10 lg:p-14 transition-all duration-500 overflow-hidden min-h-[320px] flex flex-col justify-end ${
                mode.accent === 'red' ? 'hover:border-[#dc2626]/30' : 'hover:border-[#3b82f6]/30'
              }`}
            >
              {/* Background glow on hover */}
              <div className={`absolute -right-20 -top-20 w-64 h-64 opacity-0 group-hover:opacity-10 blur-3xl rounded-full transition-opacity duration-700 ${mode.accent === 'red' ? 'bg-[#dc2626]' : 'bg-[#2563eb]'}`} />
              
              {/* Mode Background Image */}
              <div className="absolute inset-0 z-0 overflow-hidden bg-[#0a0a0e]">
                <img
                  src={mode.image}
                  alt={mode.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-all duration-700 scale-105 group-hover:scale-100 mix-blend-luminosity group-hover:mix-blend-normal"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                {/* Gradient Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0e]/40 via-[#0a0a0e]/70 to-[#0a0a0e]/90 group-hover:from-[#0a0a0e]/20 group-hover:via-[#0a0a0e]/50 group-hover:to-[#0a0a0e]/80 transition-all duration-700" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className={`text-[9px] font-bold tracking-[0.3em] uppercase px-3 py-1.5 ${mode.accent === "red" ? "bg-[#dc2626/0.1] text-[#dc2626]" : "bg-[#2563eb/0.1] text-[#3b82f6]"}`}>
                    {mode.subtitle}
                  </span>
                </div>
                <h3 className={`text-2xl lg:text-3xl font-black text-white tracking-tight mb-4 transition-colors ${
                  mode.accent === 'red' ? 'group-hover:text-[#dc2626]' : 'group-hover:text-[#3b82f6]'
                }`}>
                  {mode.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#666] max-w-md">{mode.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Esports Section ─── */
function Esports() {
  const displayNews = mockNews.slice(0, 3);

  return (
    <section className="relative py-32 border-y border-[#222]" id="esports">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#dc2626]" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#dc2626]">Esports</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">
              COMPETITIVE
              <br />
              <span className="text-[#dc2626]">NEWS</span>
            </h2>
          </div>
          <Link to="/esports" className="inline-flex items-center border border-[#dc2626] text-[#dc2626] hover:bg-[#dc2626] hover:text-white text-[10px] font-bold tracking-[0.2em] uppercase px-8 py-3 transition-colors">
            <Trophy className="h-4 w-4 mr-2" />
            View Esports Hub
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {displayNews.map((news, i) => (
             <motion.div key={news.id} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} className="group bg-[#0a0a0e] border border-[#222] hover:border-[#dc2626] transition-colors overflow-hidden flex flex-col">
                <Link to="/esports" className="flex flex-col h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute top-4 left-4 z-10 bg-[#dc2626] text-white text-[9px] font-bold tracking-[0.2em] uppercase px-3 py-1">
                      {news.category}
                    </div>
                    <img src={news.image} alt={news.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] via-[#0a0a0e]/20 to-transparent opacity-90" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-[9px] tracking-[0.1em] text-[#666] mb-3">{news.date}</div>
                    <h3 className="text-lg font-bold text-white tracking-tight mb-3 group-hover:text-[#dc2626] transition-colors">{news.title}</h3>
                    <p className="text-sm text-[#888] line-clamp-2 mt-auto">{news.excerpt}</p>
                  </div>
                </Link>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Brand Icons ─── */
const DiscordIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" fill="currentColor" {...props}>
    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.2,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
  </svg>
);

const FacebookIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
  </svg>
);

const YouTubeIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
  </svg>
);

const InstagramIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.38 3.85 3.89 2.3 7.15 2.15c1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07c-4.27.2-6.78 2.71-6.98 6.98C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.27 2.71 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.27-.2 6.78-2.71 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.27-2.71-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.83a6.17 6.17 0 1 0 0 12.34 6.17 6.17 0 0 0 0-12.34zm0 10.18a4.01 4.01 0 1 1 0-8.02 4.01 4.01 0 0 1 0 8.02zm3.9-9.15a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z"/>
  </svg>
);

/* ─── Community Section ─── */
function Community() {
  const channels = [
    { label: "Discord", members: "53K MEMBERS", icon: DiscordIcon, href: "https://discord.com/invite/rov-mvp-club-1148485520540844122" },
    { label: "Facebook", members: "5.3M LIKES", icon: FacebookIcon, href: "https://www.facebook.com/ROVTH" },
    { label: "YouTube", members: "4M SUBSCRIBERS", icon: YouTubeIcon, href: "https://www.youtube.com/GarenaRoVThailand" },
    { label: "Instagram", members: "785K FOLLOWERS", icon: InstagramIcon, href: "https://www.instagram.com/garena_rov_official" },
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
              href={channel.href}
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
      <Hero />
      <Stats />
      <Features />
      <FanartShowcase />
      <GameModes />
      <Esports />
      <Community />
      <CTA />
    </motion.div>
  );
}


