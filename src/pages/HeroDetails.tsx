import { useState } from "react";
import { useParams, Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { heroImgUrl } from "../lib/heroImg";
import {
  ChevronLeft,
  Zap,
  Shield,
  Wind,
  Star,
  Target,
  Users,
  ArrowRight,
} from "lucide-react";

const TIER_COLORS: Record<string, string> = {
  S: "text-[#f59e0b] border-[#f59e0b]/40 bg-[#f59e0b]/10",
  A: "text-[#10b981] border-[#10b981]/40 bg-[#10b981]/10",
  B: "text-[#3b82f6] border-[#3b82f6]/40 bg-[#3b82f6]/10",
  C: "text-[#8b5cf6] border-[#8b5cf6]/40 bg-[#8b5cf6]/10",
  D: "text-[#888] border-[#444]/40 bg-[#333]/10",
};

const DIFF_COLORS: Record<string, string> = {
  Easy: "text-[#10b981]",
  Medium: "text-[#f59e0b]",
  Hard: "text-[#dc2626]",
};

const STAT_ICONS = [Zap, Wind, Shield, Users, Star];
const STAT_LABELS = ["Damage", "Mobility", "Durability", "Utility", "Difficulty"];
const STAT_KEYS = ["damage", "mobility", "durability", "utility", "difficulty"] as const;

const SKILL_LABELS = ["Passive", "Skill 1", "Skill 2", "Ultimate"];
const SKILL_COLORS = ["text-[#888]", "text-[#3b82f6]", "text-[#10b981]", "text-[#dc2626]"];
const SKILL_BG = [
  "border-[#555]/40 bg-[#333]/20 data-[active=true]:border-[#888] data-[active=true]:bg-[#555]/20",
  "border-[#3b82f6]/30 bg-[#3b82f6]/5 data-[active=true]:border-[#3b82f6] data-[active=true]:bg-[#3b82f6]/20",
  "border-[#10b981]/30 bg-[#10b981]/5 data-[active=true]:border-[#10b981] data-[active=true]:bg-[#10b981]/20",
  "border-[#dc2626]/30 bg-[#dc2626]/5 data-[active=true]:border-[#dc2626] data-[active=true]:bg-[#dc2626]/20",
];

export default function HeroDetails() {
  const { id } = useParams<{ id: string }>();
  const hero = useQuery(api.heroes.getById, id ? { id } : "skip");
  const [activeSkill, setActiveSkill] = useState(0);

  // Loading
  if (hero === undefined) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-2 border-[#dc2626] border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-[#444] text-xs tracking-[0.2em] uppercase">Loading hero data...</p>
        </div>
      </div>
    );
  }

  // Not found
  if (hero === null) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center gap-6">
        <h1 className="text-6xl font-black text-[#222] uppercase tracking-tighter">404</h1>
        <p className="text-[#555] text-sm tracking-widest uppercase">Hero not found</p>
        <Link to="/heroes" className="flex items-center gap-2 text-[#dc2626] hover:text-white text-sm font-bold tracking-widest uppercase transition-colors">
          <ChevronLeft className="w-4 h-4" /> Back to Roster
        </Link>
      </div>
    );
  }

  // Radar chart points (pentagon, 5 stats)
  const cx = 100;
  const cy = 100;
  const maxR = 80;
  const radarPoints = STAT_KEYS.map((key, i) => {
    const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
    const r = ((hero.stats[key] ?? 0) / 10) * maxR;
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
  }).join(" ");

  const gridLevels = [2, 4, 6, 8, 10];
  const gridPolygons = gridLevels.map(level =>
    STAT_KEYS.map((_, i) => {
      const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
      const r = (level / 10) * maxR;
      return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
    }).join(" ")
  );

  const abilities: { name: string; description: string; cooldown: string; manaCost: string }[] =
    hero.abilities ?? [];

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">

      {/* ── TOP NAV BAR ── */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#050505]/80 backdrop-blur-xl border-b border-[#111]">
        <Link
          to="/heroes"
          className="flex items-center gap-2 text-[#666] hover:text-white text-xs font-bold tracking-[0.2em] uppercase transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Hero Catalog
        </Link>
        <div className="flex items-center gap-3">
          <span className={`text-xs font-black tracking-[0.2em] uppercase border px-3 py-1 rounded ${TIER_COLORS[hero.tier] ?? TIER_COLORS.D}`}>
            {hero.tier} Tier
          </span>
          <span className={`text-xs font-bold tracking-[0.15em] uppercase ${DIFF_COLORS[hero.difficulty] ?? ""}`}>
            {hero.difficulty}
          </span>
        </div>
      </div>

      {/* ── HERO BANNER ── */}
      <div className="relative h-[65vh] md:h-[75vh] overflow-hidden pt-16">
        {/* BG Image */}
        <img
          src={heroImgUrl(hero.name)}
          alt={hero.name}
          className="absolute inset-0 w-full h-full object-cover object-top scale-105"
          style={{ filter: "brightness(0.45) saturate(1.2)" }}
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/10 to-transparent" />

        {/* Hero Identity */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-16 pb-10 md:pb-14">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-[#dc2626]" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#dc2626]">
                {hero.role} · {hero.lane}
              </span>
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-none text-white mb-3 drop-shadow-2xl">
              {hero.name}
            </h1>
            <p className="text-sm md:text-base text-[#888] italic font-light tracking-wider">
              " {hero.title} "
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16 py-16 space-y-20">

        {/* ── ROW 1: STATS + LORE ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#0a0a0e] border border-[#1a1a1a] rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-[#1a1a1a]" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#555]">Combat Stats</span>
              <div className="h-px flex-1 bg-[#1a1a1a]" />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              {/* SVG Pentagon */}
              <div className="w-52 h-52 shrink-0">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* Grid web */}
                  {gridPolygons.map((pts, i) => (
                    <polygon key={i} points={pts} fill="none" stroke="#1e1e1e" strokeWidth="1" />
                  ))}
                  {/* Axis lines */}
                  {STAT_KEYS.map((_, i) => {
                    const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
                    return (
                      <line
                        key={i}
                        x1={cx} y1={cy}
                        x2={cx + maxR * Math.cos(angle)}
                        y2={cy + maxR * Math.sin(angle)}
                        stroke="#1e1e1e" strokeWidth="1"
                      />
                    );
                  })}
                  {/* Stat fill */}
                  <polygon
                    points={radarPoints}
                    fill="rgba(220,38,38,0.15)"
                    stroke="#dc2626"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    className="drop-shadow-[0_0_6px_rgba(220,38,38,0.6)]"
                  />
                  {/* Dots */}
                  {radarPoints.split(" ").map((pt, i) => {
                    const [x, y] = pt.split(",").map(Number);
                    return <circle key={i} cx={x} cy={y} r="3" fill="#dc2626" />;
                  })}
                </svg>
              </div>

              {/* Stat bars */}
              <div className="flex-1 w-full space-y-3">
                {STAT_KEYS.map((key, i) => {
                  const Icon = STAT_ICONS[i];
                  const val = hero.stats[key] ?? 0;
                  return (
                    <div key={key}>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.15em] uppercase text-[#555]">
                          <Icon className="w-3 h-3" /> {STAT_LABELS[i]}
                        </div>
                        <span className="text-[11px] font-black text-[#888]">{val}<span className="text-[#333]">/10</span></span>
                      </div>
                      <div className="h-1.5 bg-[#111] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${val * 10}%` }}
                          transition={{ delay: 0.3 + i * 0.06, duration: 0.6, ease: "easeOut" }}
                          className="h-full bg-[#dc2626] rounded-full"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Lore */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-[#0a0a0e] border border-[#1a1a1a] rounded-2xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px flex-1 bg-[#1a1a1a]" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#555]">Biography</span>
                <div className="h-px flex-1 bg-[#1a1a1a]" />
              </div>
              <p className="text-[#666] leading-7 text-sm">{hero.lore}</p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="border border-[#1a1a1a] rounded-xl p-4">
                <div className="text-[9px] font-bold tracking-[0.25em] uppercase text-[#333] mb-1">Role</div>
                <div className="text-sm font-bold text-white">{hero.role}</div>
              </div>
              <div className="border border-[#1a1a1a] rounded-xl p-4">
                <div className="text-[9px] font-bold tracking-[0.25em] uppercase text-[#333] mb-1">Main Lane</div>
                <div className="text-sm font-bold text-white">{hero.lane}</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── ROW 2: ABILITIES ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-xs font-black tracking-[0.3em] uppercase text-[#555]">Abilities</h2>
            <div className="h-px flex-1 bg-[#1a1a1a]" />
          </div>

          {/* Skill selector tabs */}
          <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
            {SKILL_LABELS.map((label, i) => (
              <button
                key={i}
                onClick={() => setActiveSkill(i)}
                data-active={activeSkill === i}
                className={`shrink-0 px-5 py-3 rounded-xl border text-xs font-bold tracking-[0.15em] uppercase transition-all duration-200 ${SKILL_BG[i]}`}
              >
                <span className={activeSkill === i ? SKILL_COLORS[i] : "text-[#555]"}>{label}</span>
              </button>
            ))}
          </div>

          {/* Skill detail card */}
          <AnimatePresence mode="wait">
            {abilities[activeSkill] ? (
              <motion.div
                key={activeSkill}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.15 }}
                className="bg-[#0a0a0e] border border-[#1a1a1a] rounded-2xl p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <div className={`text-[9px] font-bold tracking-[0.25em] uppercase mb-2 ${SKILL_COLORS[activeSkill]}`}>
                      {SKILL_LABELS[activeSkill]}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
                      {abilities[activeSkill].name}
                    </h3>
                  </div>
                  <div className="flex gap-4 shrink-0">
                    {abilities[activeSkill].cooldown !== "0s" && (
                      <div className="border border-[#1a1a1a] rounded-xl px-4 py-3 text-center">
                        <div className="text-[9px] font-bold tracking-widest uppercase text-[#333] mb-0.5">Cooldown</div>
                        <div className="text-sm font-black text-white">{abilities[activeSkill].cooldown}</div>
                      </div>
                    )}
                    {abilities[activeSkill].manaCost !== "0" && (
                      <div className="border border-[#1a1a1a] rounded-xl px-4 py-3 text-center">
                        <div className="text-[9px] font-bold tracking-widest uppercase text-[#333] mb-0.5">Mana</div>
                        <div className="text-sm font-black text-[#3b82f6]">{abilities[activeSkill].manaCost}</div>
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-[#777] leading-7 text-base">
                  {abilities[activeSkill].description}
                </p>
              </motion.div>
            ) : (
              <div className="bg-[#0a0a0e] border border-[#1a1a1a] rounded-2xl p-8 text-center text-[#333] text-sm">
                No ability data
              </div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ── ROW 3: TIPS + COUNTERS + SYNERGIES ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Pro Tips */}
          <div className="bg-[#0a0a0e] border border-[#1a1a1a] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-4 h-4 text-[#dc2626]" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#555]">Pro Tips</span>
            </div>
            <ul className="space-y-4">
              {(hero.tips ?? []).map((tip, i) => (
                <li key={i} className="flex gap-3 text-[#666] text-sm leading-relaxed">
                  <ArrowRight className="w-3.5 h-3.5 text-[#dc2626] shrink-0 mt-0.5" />
                  {tip}
                </li>
              ))}
              {(hero.tips ?? []).length === 0 && (
                <li className="text-[#333] text-sm">No tips available</li>
              )}
            </ul>
          </div>

          {/* Weak Against */}
          <div className="bg-[#0a0a0e] border border-[#1a1a1a] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-4 h-4 text-[#3b82f6]" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#555]">Weak Against</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {(hero.counters ?? []).map((c, i) => (
                <span key={i} className="text-xs font-bold tracking-widest uppercase text-[#3b82f6] border border-[#3b82f6]/20 bg-[#3b82f6]/5 px-3 py-1.5 rounded-lg">
                  {c}
                </span>
              ))}
              {(hero.counters ?? []).length === 0 && (
                <span className="text-[#333] text-sm">No data</span>
              )}
            </div>
          </div>

          {/* Synergies */}
          <div className="bg-[#0a0a0e] border border-[#1a1a1a] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-4 h-4 text-[#10b981]" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#555]">Synergies</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {(hero.synergies ?? []).map((s, i) => (
                <span key={i} className="text-xs font-bold tracking-widest uppercase text-[#10b981] border border-[#10b981]/20 bg-[#10b981]/5 px-3 py-1.5 rounded-lg">
                  {s}
                </span>
              ))}
              {(hero.synergies ?? []).length === 0 && (
                <span className="text-[#333] text-sm">No data</span>
              )}
            </div>
          </div>
        </motion.div>

        {/* ── BACK BUTTON ── */}
        <div className="flex justify-center pt-4">
          <Link
            to="/heroes"
            className="flex items-center gap-2 px-8 py-3 border border-[#1a1a1a] hover:border-[#dc2626] text-[#555] hover:text-white text-xs font-bold tracking-[0.25em] uppercase rounded-xl transition-all duration-200"
          >
            <ChevronLeft className="w-4 h-4" /> Back to Roster
          </Link>
        </div>
      </div>
    </div>
  );
}
