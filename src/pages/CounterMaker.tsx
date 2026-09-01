import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { Menu, X, Download, Loader2, Search, Trash2 } from "lucide-react";
import * as htmlToImage from "html-to-image";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { heroImgUrl } from "../lib/heroImg";
import { ROLES } from "../data/heroes";

const bezierEase = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: Math.min(i, 20) * 0.05, ease: bezierEase },
  }),
};



export default function CounterMaker() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);
  const [roleFilter, setRoleFilter] = useState("All");
  
  // counters state: targetHeroId -> [counterId1, counterId2, counterId3]
  const [counters, setCounters] = useState<Record<string, (string | null)[]>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Picker state
  const [pickerState, setPickerState] = useState<{ targetId: string; slotIdx: number } | null>(null);
  const [pickerSearch, setPickerSearch] = useState("");
  const [pickerRole, setPickerRole] = useState("All");

  const heroes = useQuery(api.heroes.getAll) || [];

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("swiss-arena-counters");
    if (saved) {
      try {
        setCounters(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved counters", e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage when updated
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("swiss-arena-counters", JSON.stringify(counters));
    }
  }, [counters, isLoaded]);

  const filteredHeroes = useMemo(() => {
    let list = [...heroes];
    if (roleFilter !== "All") list = list.filter((h) => h.role === roleFilter);
    list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [heroes, roleFilter]);

  const pickerHeroes = useMemo(() => {
    let list = [...heroes];
    if (pickerSearch.trim()) {
      const q = pickerSearch.toLowerCase();
      list = list.filter(h => h.name.toLowerCase().includes(q));
    }
    if (pickerRole !== "All") {
      list = list.filter(h => h.role === pickerRole);
    }
    list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [heroes, pickerSearch, pickerRole]);

  const getCounter = (targetId: string, slotIdx: number) => {
    const heroCounters = counters[targetId];
    if (!heroCounters) return null;
    const counterId = heroCounters[slotIdx];
    return heroes.find(h => h.id === counterId) || null;
  };

  const setCounter = (targetId: string, slotIdx: number, counterId: string | null) => {
    setCounters(prev => {
      const heroCounters = prev[targetId] ? [...prev[targetId]] : [null, null, null];
      heroCounters[slotIdx] = counterId;
      return { ...prev, [targetId]: heroCounters };
    });
    setPickerState(null);
  };

  const exportRef = useRef<HTMLDivElement>(null);

  const filledHeroes = useMemo(() => {
    let list = [...heroes];
    if (roleFilter !== "All") list = list.filter((h) => h.role === roleFilter);
    list = list.filter((h) => {
      const c = counters[h.id];
      return c && c.some((id) => id !== null);
    });
    list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [heroes, roleFilter, counters]);

  const exportAsImage = async () => {
    if (filledHeroes.length === 0) {
      alert("กรุณาใส่ Counter อย่างน้อย 1 ตัวก่อนทำการ Export ครับ");
      return;
    }
    if (!exportRef.current) return;
    
    setIsExporting(true);
    try {
      // Yield to the browser to ensure React has fully rendered the off-screen container
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const dataUrl = await htmlToImage.toPng(exportRef.current, {
        backgroundColor: "#0a0a0e",
        pixelRatio: 2,
        skipFonts: true,
      });
      const link = document.createElement("a");
      link.download = `swiss-arena-counters-${roleFilter}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to export image", err);
      alert("เกิดข้อผิดพลาดในการ Export รูปภาพ กรุณาลองใหม่อีกครั้ง");
    } finally {
      setIsExporting(false);
    }
  };

  if (!isLoaded || heroes.length === 0) {
    return (
      <div className="min-h-screen bg-[#0a0a0e] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#dc2626] animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0e] font-sans selection:bg-[#dc2626]/30 pb-20">
      <main className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16 py-12">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#dc2626]" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#dc2626]">Custom Counters</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase">
              Counter <span className="text-[#3b82f6]">Maker</span>
            </h1>
            <p className="text-[#888] mt-4 max-w-xl text-sm leading-relaxed">
              สร้าง Counter List ของคุณเอง เลือก role เพื่อกรองฮีโร่ แต่ละฮีโร่ใส่ตัวแก้ทางได้ 3 ลำดับ<br/>
              (⭐⭐⭐ ดีสุด → ⭐⭐ ดี → ⭐พอได้)
            </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1} className="flex items-center gap-4">
            <button
              onClick={() => {
                if (window.confirm("คุณต้องการลบข้อมูล Counter ทั้งหมดใช่หรือไม่?")) {
                  setCounters({});
                }
              }}
              className="flex items-center gap-2 px-6 py-3 bg-[#111] hover:bg-[#222] text-white text-[11px] font-bold tracking-[0.1em] uppercase transition-colors border border-[#333]"
            >
              <Trash2 className="w-4 h-4" />
              Reset All
            </button>
            <button
              onClick={exportAsImage}
              disabled={isExporting}
              className="flex items-center gap-2 px-6 py-3 bg-[#dc2626] hover:bg-[#b91c1c] disabled:opacity-50 text-white text-[11px] font-bold tracking-[0.1em] uppercase transition-colors"
            >
              {isExporting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
              {isExporting ? "Exporting..." : "Export PNG"}
            </button>
          </motion.div>
        </div>

        {/* Role Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["All", ...ROLES].map((role) => (
            <button
              key={role}
              onClick={() => setRoleFilter(role)}
              className={`px-6 py-2.5 text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 ${
                roleFilter === role
                  ? "bg-[#3b82f6] text-white"
                  : "bg-[#111] text-[#888] hover:bg-[#222] hover:text-white border border-[#222]"
              }`}
            >
              {role}
            </button>
          ))}
        </div>

        {/* Export Container */}
        <div ref={containerRef} className="bg-[#0a0a0e] p-2 -m-2">
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredHeroes.map((hero, i) => (
              <motion.div
                key={hero.id}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={i % 15}
                className="bg-[#111] border border-[#222] flex p-3 gap-4 items-center group hover:border-[#333] transition-colors"
              >
                {/* Target Hero */}
                <div className="flex flex-col items-center gap-2 w-20 shrink-0">
                  <div className="w-16 h-16 bg-[#222] rounded overflow-hidden border border-[#333] relative">
                    <img crossOrigin="anonymous" src={heroImgUrl(hero.name)} alt={hero.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-1">
                      <p className="text-[9px] text-center font-bold text-white uppercase tracking-wider truncate">{hero.name}</p>
                    </div>
                  </div>
                </div>

                {/* VS Divider */}
                <div className="flex flex-col gap-1 items-center justify-center opacity-30">
                  <div className="w-px h-4 bg-white" />
                  <span className="text-[9px] font-bold tracking-widest text-[#dc2626]">VS</span>
                  <div className="w-px h-4 bg-white" />
                </div>

                {/* Counter Slots */}
                <div className="flex-1 flex gap-2 justify-between">
                  {[0, 1, 2].map((slotIdx) => {
                    const counterHero = getCounter(hero.id, slotIdx);
                    const stars = 3 - slotIdx;
                    
                    return (
                      <button
                        key={slotIdx}
                        onClick={() => {
                          setPickerSearch("");
                          setPickerRole("All");
                          setPickerState({ targetId: hero.id, slotIdx });
                        }}
                        data-html2canvas-ignore={!counterHero ? "true" : undefined}
                        className={`w-14 h-14 md:w-16 md:h-16 rounded border border-dashed flex flex-col items-center justify-center overflow-hidden relative transition-all group/slot ${
                          counterHero ? "border-solid border-[#444] bg-[#222]" : "border-[#333] hover:border-[#dc2626] bg-transparent"
                        }`}
                      >
                        {counterHero ? (
                          <>
                            <img crossOrigin="anonymous" src={heroImgUrl(counterHero.name)} alt={counterHero.name} className="w-full h-full object-cover" />
                            <div className="absolute top-0 right-0 bg-black/60 px-1 py-0.5 rounded-bl">
                              <span className="text-[8px] text-yellow-400">{"★".repeat(stars)}</span>
                            </div>
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/slot:opacity-100 flex items-center justify-center transition-opacity">
                              <span className="text-[10px] font-bold text-white uppercase">Change</span>
                            </div>
                          </>
                        ) : (
                          <>
                            <span className="text-yellow-500/30 text-[10px] mb-1">{"★".repeat(stars)}</span>
                            <span className="text-[#444] text-[16px]">+</span>
                          </>
                        )}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hidden Export Container (Only Filled Heroes) */}
        <div style={{ position: "absolute", top: "-9999px", left: "-9999px" }}>
          <div 
            ref={exportRef} 
            className="bg-[#0a0a0e] p-8"
            style={{ width: "1200px" }}
          >
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-black text-white tracking-tight uppercase">
              Counter <span className="text-[#3b82f6]">Maker</span>
            </h1>
            <p className="text-[#888] mt-2 text-sm">
              Role: <span className="text-[#dc2626] font-bold">{roleFilter}</span> | swiss-arena.com
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-6">
            {filledHeroes.map((hero) => (
              <div
                key={`export-${hero.id}`}
                className="bg-[#111] border border-[#222] flex p-4 gap-4 items-center"
              >
                {/* Target Hero */}
                <div className="flex flex-col items-center gap-2 w-24 shrink-0">
                  <div className="w-20 h-20 bg-[#222] rounded overflow-hidden border border-[#333] relative">
                    <img crossOrigin="anonymous" src={heroImgUrl(hero.name)} alt={hero.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-1.5">
                      <p className="text-[10px] text-center font-bold text-white uppercase tracking-wider truncate">{hero.name}</p>
                    </div>
                  </div>
                </div>

                {/* VS Divider */}
                <div className="flex flex-col gap-1 items-center justify-center opacity-30">
                  <div className="w-px h-4 bg-white" />
                  <span className="text-[10px] font-bold tracking-widest text-[#dc2626]">VS</span>
                  <div className="w-px h-4 bg-white" />
                </div>

                {/* Counter Slots */}
                <div className="flex-1 flex gap-2 justify-between">
                  {[0, 1, 2].map((slotIdx) => {
                    const counterHero = getCounter(hero.id, slotIdx);
                    const stars = 3 - slotIdx;
                    
                    return (
                      <div
                        key={`export-slot-${slotIdx}`}
                        className={`w-16 h-16 rounded border border-dashed flex flex-col items-center justify-center overflow-hidden relative ${
                          counterHero ? "border-solid border-[#444] bg-[#222]" : "border-[#333] bg-transparent"
                        }`}
                      >
                        {counterHero ? (
                          <>
                            <img crossOrigin="anonymous" src={heroImgUrl(counterHero.name)} alt={counterHero.name} className="w-full h-full object-cover" />
                            <div className="absolute top-0 right-0 bg-black/60 px-1 py-0.5 rounded-bl">
                              <span className="text-[8px] text-yellow-400">{"★".repeat(stars)}</span>
                            </div>
                          </>
                        ) : (
                          <>
                            <span className="text-yellow-500/30 text-[10px] mb-1">{"★".repeat(stars)}</span>
                            <span className="text-[#444] text-[16px]">+</span>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </main>

      {/* Hero Picker Modal */}
      <AnimatePresence>
        {pickerState && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-end md:items-center justify-center p-0 md:p-6"
            onClick={(e) => {
              if (e.target === e.currentTarget) setPickerState(null);
            }}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-[#111] w-full md:max-w-3xl md:rounded-xl border-t md:border border-[#333] overflow-hidden flex flex-col h-[85vh] md:h-[70vh]"
            >
              {/* Header */}
              <div className="p-4 border-b border-[#222] flex items-center justify-between bg-[#151515]">
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wider text-sm">Select Counter Hero</h3>
                  <p className="text-[#666] text-[10px] uppercase tracking-widest mt-1">
                    For {heroes.find(h => h.id === pickerState.targetId)?.name} • Slot {pickerState.slotIdx + 1}
                  </p>
                </div>
                <button onClick={() => setPickerState(null)} className="p-2 text-[#888] hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Filters */}
              <div className="p-4 border-b border-[#222] space-y-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666]" />
                  <input
                    type="text"
                    placeholder="Search hero..."
                    value={pickerSearch}
                    onChange={(e) => setPickerSearch(e.target.value)}
                    className="w-full bg-[#0a0a0e] border border-[#333] text-white px-10 py-3 text-sm focus:outline-none focus:border-[#3b82f6] transition-colors"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
                  {["All", ...ROLES].map((role) => (
                    <button
                      key={role}
                      onClick={() => setPickerRole(role)}
                      className={`shrink-0 px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase transition-colors ${
                        pickerRole === role ? "bg-[#3b82f6] text-white" : "bg-[#222] text-[#888] hover:bg-[#333]"
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid */}
              <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
                  {/* Option to clear slot */}
                  <button
                    onClick={() => setCounter(pickerState.targetId, pickerState.slotIdx, null)}
                    className="aspect-square bg-[#0a0a0e] border border-dashed border-[#444] hover:border-[#dc2626] rounded flex flex-col items-center justify-center gap-2 group transition-colors"
                  >
                    <Trash2 className="w-5 h-5 text-[#666] group-hover:text-[#dc2626] transition-colors" />
                    <span className="text-[9px] uppercase tracking-wider text-[#666] font-bold group-hover:text-[#dc2626] transition-colors">Clear</span>
                  </button>

                  {pickerHeroes.map((hero) => (
                    <button
                      key={hero.id}
                      onClick={() => setCounter(pickerState.targetId, pickerState.slotIdx, hero.id)}
                      className="aspect-square bg-[#222] rounded overflow-hidden relative group"
                    >
                      <img src={heroImgUrl(hero.name)} alt={hero.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
                        <div className="w-full bg-black/80 py-1 translate-y-full group-hover:translate-y-0 transition-transform">
                          <span className="text-[9px] font-bold text-white uppercase tracking-wider block text-center truncate px-1">
                            {hero.name}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
