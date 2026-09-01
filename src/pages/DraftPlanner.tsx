import { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { Swords, Search, X, Menu, Crown, Clock, CheckCircle2, Shield, ChevronLeft, ChevronRight, Loader2, Pause, Play, Undo2 } from "lucide-react";
import { type Hero, type HeroRole } from "@/data/heroes";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { heroImgUrl } from "../lib/heroImg";

const bezierEase = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const roleColors: Record<HeroRole, string> = {
  Warrior: "text-[#dc2626] border-[#dc2626/0.2] bg-[#dc2626/0.1]",
  Assassin: "text-[#3b82f6] border-[#2563eb/0.2] bg-[#2563eb/0.1]",
  Mage: "text-[#f59e0b] border-[#f59e0b/0.2] bg-[#f59e0b/0.1]",
  Marksman: "text-[#f97316] border-[#f97316/0.2] bg-[#f97316/0.1]",
  Support: "text-[#10b981] border-[#10b981/0.2] bg-[#10b981/0.1]",
  Tank: "text-[#888] border-[#888/0.2] bg-[#888/0.1]",
};



// ─── Draft Sequence Logic ───
type DraftAction = { side: "blue" | "red"; type: "ban" | "pick"; expectedRole?: HeroRole };

// Global Ban/Pick Rule (18 steps)
const DRAFT_SEQUENCE: DraftAction[] = [
  // Phase 1 Bans (2 each)
  { side: "blue", type: "ban" }, { side: "red", type: "ban" },
  { side: "blue", type: "ban" }, { side: "red", type: "ban" },
  // Phase 1 Picks (3 each)
  { side: "blue", type: "pick", expectedRole: "Warrior" },
  { side: "red", type: "pick", expectedRole: "Warrior" }, { side: "red", type: "pick", expectedRole: "Assassin" },
  { side: "blue", type: "pick", expectedRole: "Assassin" }, { side: "blue", type: "pick", expectedRole: "Mage" },
  { side: "red", type: "pick", expectedRole: "Mage" },
  // Phase 2 Bans (2 each)
  { side: "red", type: "ban" }, { side: "blue", type: "ban" },
  { side: "red", type: "ban" }, { side: "blue", type: "ban" },
  // Phase 2 Picks (2 each)
  { side: "red", type: "pick", expectedRole: "Marksman" },
  { side: "blue", type: "pick", expectedRole: "Marksman" }, { side: "blue", type: "pick", expectedRole: "Support" },
  { side: "red", type: "pick", expectedRole: "Support" },
];

export default function DraftPlanner() {
  const blueScrollRef = useRef<HTMLDivElement>(null);
  const redScrollRef = useRef<HTMLDivElement>(null);

  const scrollContainer = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      ref.current.scrollBy({ left: direction === 'left' ? -150 : 150, behavior: 'smooth' });
    }
  };

  const [currentStep, setCurrentStep] = useState(0);
  const [draftData, setDraftData] = useState<(Hero | null)[]>(Array(18).fill(null));
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);
  const [isPaused, setIsPaused] = useState(false);

  const isDraftComplete = currentStep >= DRAFT_SEQUENCE.length;
  const currentAction = isDraftComplete ? null : DRAFT_SEQUENCE[currentStep];

  const dbHeroes = useQuery(api.heroes.getAll);

  // Timer logic
  const latestDraftState = useRef({ draftData, currentStep, currentAction, dbHeroes, isDraftComplete });
  useEffect(() => {
    latestDraftState.current = { draftData, currentStep, currentAction, dbHeroes, isDraftComplete };
  });

  useEffect(() => {
    if (isDraftComplete || isPaused) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [currentStep, isDraftComplete, isPaused]);

  useEffect(() => {
    if (timeLeft === 0) {
      const { draftData, currentStep, currentAction, dbHeroes, isDraftComplete } = latestDraftState.current;
      if (isDraftComplete || !currentAction || !dbHeroes) return;

      if (currentAction.type === "ban") {
        setDraftData((prev) => {
          const next = [...prev];
          next[currentStep] = null;
          return next;
        });
      } else {
        const used = new Set<string>();
        draftData.forEach((h) => h && used.add(h.id));
        let available = dbHeroes.filter((h) => !used.has(h.id));
        
        if (currentAction.expectedRole) {
          const rolePool = available.filter(h => h.role === currentAction.expectedRole);
          if (rolePool.length > 0) available = rolePool;
        }
        
        const randomHero = available[Math.floor(Math.random() * available.length)];
        setDraftData((prev) => {
          const next = [...prev];
          next[currentStep] = (randomHero as unknown as Hero) || null;
          return next;
        });
      }
      
      setSelectedHero(null);
      setSearchQuery("");
      setCurrentStep(currentStep + 1);
      setTimeLeft(30);
    }
  }, [timeLeft]);



  // Derived state for easy rendering
  const allUsed = useMemo(() => {
    const used = new Set<string>();
    draftData.forEach((h) => h && used.add(h.id));
    return used;
  }, [draftData]);

  const filteredHeroes = useMemo(() => {
    if (!dbHeroes) return [];
    let list = dbHeroes.filter((h) => !allUsed.has(h.id));
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(h => h.name.toLowerCase().includes(q) || h.role.toLowerCase().includes(q));
    }
    return list;
  }, [allUsed, searchQuery, dbHeroes]);

  // Helper to extract team specific picks/bans
  const getTeamData = (side: "blue" | "red", type: "pick" | "ban") => {
    const result: (Hero | null)[] = [];
    DRAFT_SEQUENCE.forEach((action, index) => {
      if (action.side === side && action.type === type) {
        result.push(draftData[index]);
      }
    });
    return result; // Picks will have 5, Bans will have 4
  };

  const bluePicks = getTeamData("blue", "pick");
  const redPicks = getTeamData("red", "pick");
  const blueBans = getTeamData("blue", "ban");
  const redBans = getTeamData("red", "ban");

  const handleSelectHero = (hero: Hero) => {
    if (isDraftComplete) return;
    setSelectedHero(hero);
  };

  const handleLockIn = () => {
    if (!selectedHero || isDraftComplete) return;
    
    setDraftData((prev) => {
      const next = [...prev];
      next[currentStep] = selectedHero;
      return next;
    });
    
    setSelectedHero(null);
    setSearchQuery("");
    setCurrentStep((prev) => prev + 1);
    setTimeLeft(30); // reset timer
  };

  const handleUndo = () => {
    if (currentStep === 0) return;
    setDraftData((prev) => {
      const next = [...prev];
      next[currentStep - 1] = null;
      return next;
    });
    setCurrentStep((prev) => prev - 1);
    setSelectedHero(null);
    setTimeLeft(30);
  };

  const renderPickSlot = (hero: Hero | null, side: "blue" | "red", index: number, isCurrentTurn: boolean) => (
    <div
      key={`${side}-pick-${index}`}
      className={`relative h-20 bg-[#0d0d0d] border flex flex-col justify-center px-4 overflow-hidden transition-all ${
        isCurrentTurn ? `border-${side === "blue" ? "[#3b82f6]" : "[#dc2626]"} shadow-[0_0_15px_rgba(var(--${side}-color),0.3)] bg-[#111]` 
        : hero ? "border-[#222]" : "border-[#1a1a1a]"
      }`}
    >
      {isCurrentTurn && (
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className={`absolute inset-0 border-l-4 ${side === "blue" ? "border-l-[#3b82f6]" : "border-l-[#dc2626]"}`}
        />
      )}
      
      {hero ? (
        <div className="flex items-center gap-4 z-10">
          <div className="w-12 h-12 bg-[#1a1a1a] border border-[#333] rounded-sm flex flex-shrink-0 overflow-hidden relative shadow-lg">
            <img 
              src={heroImgUrl(hero.name)} 
              alt={hero.name}
              className="absolute inset-0 w-full h-full object-cover object-top"
              loading="lazy"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </div>
          <div className="relative z-10">
            <div className="font-black text-white text-lg tracking-tight uppercase drop-shadow-md">{hero.name}</div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#ccc] drop-shadow-md font-bold">{hero.role}</div>
          </div>
          {/* Background image fade for pick slot */}
          <div className="absolute inset-0 z-0 opacity-20 mask-image-linear-right pointer-events-none">
            <img 
              src={heroImgUrl(hero.name)} 
              alt=""
              className="w-full h-full object-cover object-center filter blur-[2px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center opacity-30 z-10">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#888]">PICK {index + 1}</span>
          <span className="text-[8px] tracking-[0.2em] uppercase text-[#555] mt-1">{getExpectedRole(side, "pick", index)}</span>
        </div>
      )}
    </div>
  );

  const renderBanSlot = (hero: Hero | null, side: "blue" | "red", index: number, isCurrentTurn: boolean) => (
    <div
      key={`${side}-ban-${index}`}
      className={`relative w-12 h-12 flex items-center justify-center border transition-all ${
        isCurrentTurn ? `border-${side === "blue" ? "[#3b82f6]" : "[#dc2626]"}` : "border-[#222]"
      } ${hero ? "bg-[#111]" : "bg-[#0d0d0d]"}`}
      title={hero?.name || `Ban ${index + 1}`}
    >
      {hero ? (
        <>
          <img 
            src={heroImgUrl(hero.name)} 
            alt={hero.name}
            className="absolute inset-0 w-full h-full object-cover object-top grayscale opacity-60"
            loading="lazy"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-red-950/60 mix-blend-multiply z-10" />
          <div className="absolute top-0 right-0 bottom-0 left-0 border-2 border-red-600/50 z-40 pointer-events-none overflow-hidden">
            {/* Diagonal line for ban */}
            <div className="absolute w-[150%] h-0.5 bg-red-600/80 -rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_5px_rgba(220,38,38,0.8)]" />
          </div>
        </>
      ) : (
        <span className="text-[10px] font-bold text-[#333]">{index + 1}</span>
      )}
    </div>
  );

  // Helper to determine if a specific slot (by index in the team's array) is currently active
  const isSlotActive = (side: "blue" | "red", type: "pick" | "ban", index: number) => {
    if (!currentAction) return false;
    if (currentAction.side !== side || currentAction.type !== type) return false;
    
    // Count how many actions of this type & side have occurred before current step
    let countBefore = 0;
    for (let i = 0; i < currentStep; i++) {
      if (DRAFT_SEQUENCE[i].side === side && DRAFT_SEQUENCE[i].type === type) {
        countBefore++;
      }
    }
    return countBefore === index;
  };

  const getExpectedRole = (side: "blue" | "red", type: "pick" | "ban", index: number) => {
    let count = 0;
    for (let i = 0; i < DRAFT_SEQUENCE.length; i++) {
      if (DRAFT_SEQUENCE[i].side === side && DRAFT_SEQUENCE[i].type === type) {
        if (count === index) return DRAFT_SEQUENCE[i].expectedRole;
        count++;
      }
    }
    return undefined;
  };

  return (
    <div className="min-h-screen bg-[#0a0a0e] text-white flex flex-col">
      {/* Header */}
      <div className="bg-[#050505] border-b border-[#222] py-4">
        <div className="mx-auto max-w-[1440px] px-4 lg:px-8 flex flex-wrap justify-between items-center gap-y-4">
          <div className="flex items-center gap-2 lg:gap-4 w-1/2 sm:w-auto justify-start">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#3b82f6]/20 flex items-center justify-center flex-shrink-0">
              <Swords className="text-[#3b82f6] h-4 w-4 lg:h-5 lg:w-5" />
            </div>
            <div>
              <div className="text-[9px] lg:text-[10px] tracking-[0.2em] font-bold uppercase text-[#3b82f6]">Blue Team</div>
              <div className="text-xs lg:text-sm font-black tracking-tight text-white uppercase truncate">First Pick</div>
            </div>
          </div>
          
          <div className="flex flex-col items-center w-full sm:w-auto order-3 sm:order-none">
            {!currentAction ? (
              <div className="text-xl lg:text-2xl font-black text-[#10b981] tracking-tight uppercase">Draft Complete</div>
            ) : (
              <>
                <div className="flex items-center gap-4 mb-1">
                  <button 
                    onClick={() => setIsPaused(!isPaused)}
                    className={`p-1.5 rounded-full border transition-colors ${isPaused ? 'border-[#dc2626] text-[#dc2626] bg-[#dc2626]/10' : 'border-[#333] text-[#888] hover:text-white hover:border-[#555]'}`}
                    title={isPaused ? "Resume Timer" : "Pause Timer"}
                  >
                    {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                  </button>
                  <div className="text-[9px] lg:text-[10px] tracking-[0.2em] font-bold uppercase text-[#888]">
                    {currentAction.side.toUpperCase()} TEAM {currentAction.type.toUpperCase()}
                  </div>
                  <button 
                    onClick={handleUndo}
                    disabled={currentStep === 0}
                    className={`p-1.5 rounded-full border transition-colors ${currentStep === 0 ? 'opacity-30 cursor-not-allowed border-[#222] text-[#555]' : 'border-[#333] text-[#888] hover:text-white hover:border-[#555]'}`}
                    title="Undo Last Pick/Ban"
                  >
                    <Undo2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className={`text-3xl lg:text-4xl font-black tabular-nums leading-none ${isPaused ? 'text-[#555]' : timeLeft <= 10 ? 'text-[#dc2626] animate-pulse' : 'text-white'}`}>
                  {timeLeft.toString().padStart(2, '0')}
                </div>
              </>
            )}
          </div>

          <div className="flex items-center gap-2 lg:gap-4 text-right w-1/2 sm:w-auto justify-end">
            <div>
              <div className="text-[9px] lg:text-[10px] tracking-[0.2em] font-bold uppercase text-[#dc2626]">Red Team</div>
              <div className="text-xs lg:text-sm font-black tracking-tight text-white uppercase truncate">Counter Pick</div>
            </div>
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#dc2626]/20 flex items-center justify-center flex-shrink-0">
              <Swords className="text-[#dc2626] h-4 w-4 lg:h-5 lg:w-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Draft Area */}
      <div className="flex-1 flex flex-col md:flex-row overflow-y-auto lg:overflow-hidden">
        
        {/* Blue Team Panel */}
        <div className="w-full lg:w-80 bg-[#08080c] border-b lg:border-b-0 lg:border-r border-[#222] flex flex-col flex-shrink-0">
          <div className="p-4 border-b border-[#222] bg-[#050505]">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[9px] tracking-[0.2em] font-bold uppercase text-[#555]">Blue Bans</div>
              <div className="flex gap-1 md:hidden">
                <button onClick={() => scrollContainer(blueScrollRef, 'left')} className="p-1 bg-[#111] hover:bg-[#222] border border-[#222] text-[#888] hover:text-white transition-colors"><ChevronLeft className="w-3 h-3" /></button>
                <button onClick={() => scrollContainer(blueScrollRef, 'right')} className="p-1 bg-[#111] hover:bg-[#222] border border-[#222] text-[#888] hover:text-white transition-colors"><ChevronRight className="w-3 h-3" /></button>
              </div>
            </div>
            <div className="flex gap-2 justify-center lg:justify-start">
              {blueBans.map((hero, i) => renderBanSlot(hero, "blue", i, isSlotActive("blue", "ban", i)))}
            </div>
          </div>
          <div ref={blueScrollRef} className="flex-1 p-4 space-y-2 lg:overflow-y-auto flex md:flex-col gap-2 lg:gap-0 overflow-x-auto lg:overflow-x-visible snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {bluePicks.map((hero, i) => (
              <div key={i} className="w-48 lg:w-auto flex-shrink-0 snap-start">
                {renderPickSlot(hero, "blue", i, isSlotActive("blue", "pick", i))}
              </div>
            ))}
          </div>
        </div>

        {/* Center Panel (Hero Selection) */}
        <div className="flex-1 flex flex-col bg-[#0a0a0e] relative min-h-[600px] lg:min-h-0 order-3 lg:order-none">
          {/* Top Bar: Search & Filter */}
          <div className="p-4 lg:p-6 border-b border-[#222] flex gap-4 bg-[#0a0a0e]/95 backdrop-blur-sm z-10 sticky top-0">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#555]" />
              <input
                type="text"
                placeholder="Search heroes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                disabled={isDraftComplete}
                className="w-full h-12 pl-12 pr-4 bg-[#111] border border-[#222] text-sm text-white placeholder:text-[#555] focus:outline-none focus:border-[#444] transition-colors"
              />
            </div>
          </div>

          {/* Hero Grid */}
          <div className="flex-1 overflow-y-auto p-4 lg:p-6 pb-40 lg:pb-32">
            {!dbHeroes ? (
              <div className="h-full flex flex-col items-center justify-center text-[#666]">
                <Loader2 className="w-8 h-8 animate-spin mb-4 text-[#dc2626]" />
                <p>Loading heroes from database...</p>
              </div>
            ) : !isDraftComplete && (
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2 lg:gap-3">
                {filteredHeroes.map(hero => (
                  <button
                    key={hero.id}
                    onClick={() => handleSelectHero(hero as unknown as Hero)}
                    className={`relative aspect-[3/4] border transition-all overflow-hidden flex flex-col justify-end p-2 lg:p-3 ${
                      selectedHero?.id === hero.id 
                        ? currentAction?.side === "blue" ? "border-[#3b82f6] shadow-[0_0_15px_rgba(59,130,246,0.5)] scale-105 z-10" : "border-[#dc2626] shadow-[0_0_15px_rgba(220,38,38,0.5)] scale-105 z-10"
                        : "border-[#222] hover:border-[#444] opacity-80 hover:opacity-100"
                    } bg-[#111] group`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-0 opacity-80 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Hero image */}
                    <img
                      src={heroImgUrl(hero.name)}
                      alt={hero.name}
                      className="absolute inset-0 w-full h-full object-cover object-top opacity-40 group-hover:opacity-60 transition-opacity"
                      loading="lazy"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                    
                    <div className="relative z-10 text-left">
                      <div className="text-[10px] lg:text-xs font-black uppercase tracking-tight text-white mb-0.5 leading-none truncate w-full">{hero.name}</div>
                      <div className={`text-[8px] tracking-[0.2em] font-bold uppercase ${roleColors[hero.role as HeroRole].split(" ")[0]}`}>
                        {hero.role}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
            
            {isDraftComplete && (
              <div className="h-full flex flex-col items-center justify-center py-12 lg:py-0">
                <CheckCircle2 className="h-16 w-16 lg:h-20 lg:w-20 text-[#10b981] mb-6" />
                <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-2 uppercase text-center">Draft Finished</h2>
                <p className="text-[#888] mb-8 text-center max-w-sm lg:max-w-md text-sm lg:text-base px-4">The pick and ban phase is complete. Analyze the team compositions on the left and right panels.</p>
                <button
                  onClick={() => window.location.reload()}
                  className="bg-white text-black px-6 lg:px-8 py-3 lg:py-4 text-[10px] lg:text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#ccc] transition-colors"
                >
                  Start New Draft
                </button>
              </div>
            )}
          </div>

          {/* Bottom Action Bar (Lock In) */}
          {!isDraftComplete && (
            <div className="fixed bottom-0 left-0 right-0 p-4 lg:p-6 bg-gradient-to-t from-[#050505] via-[#050505]/95 to-transparent flex justify-center pointer-events-none z-[100]">
              <AnimatePresence>
                {selectedHero && (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    className="pointer-events-auto flex flex-col sm:flex-row items-center bg-[#111] border border-[#333] p-2 shadow-2xl w-full max-w-sm sm:max-w-md"
                  >
                    <div className="flex items-center gap-4 px-4 lg:px-6 py-2 w-full justify-center sm:justify-start">
                      <Crown className={`h-6 w-6 lg:h-8 lg:w-8 ${currentAction?.side === "blue" ? "text-[#3b82f6]" : "text-[#dc2626]"}`} />
                      <div>
                        <div className="text-[9px] lg:text-[10px] tracking-[0.2em] uppercase font-bold text-[#888]">Selected Hero</div>
                        <div className="text-xl lg:text-2xl font-black text-white uppercase tracking-tight truncate max-w-[120px] sm:max-w-[150px]">{selectedHero.name}</div>
                      </div>
                    </div>
                    <button
                      onClick={handleLockIn}
                      className={`w-full sm:w-auto px-6 lg:px-10 py-3 lg:py-4 font-black text-xs lg:text-sm tracking-[0.2em] uppercase transition-colors flex-shrink-0 ${
                        currentAction?.type === "ban" 
                          ? "bg-[#dc2626] hover:bg-[#b91c1c] text-white border border-[#dc2626]" 
                          : currentAction?.side === "blue" 
                            ? "bg-[#3b82f6] hover:bg-[#2563eb] text-white" 
                            : "bg-[#dc2626] hover:bg-[#b91c1c] text-white"
                      }`}
                    >
                      {currentAction?.type === "ban" ? "Ban Hero" : "Lock In"}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Red Team Panel */}
        <div className="w-full lg:w-80 bg-[#08080c] border-t lg:border-t-0 lg:border-l border-[#222] flex flex-col flex-shrink-0">
          <div className="p-4 border-b border-[#222] bg-[#050505]">
            <div className="flex items-center justify-between md:justify-end mb-2">
              <div className="text-[9px] tracking-[0.2em] font-bold uppercase text-[#555] lg:text-right">Red Bans</div>
              <div className="flex gap-1 md:hidden">
                <button onClick={() => scrollContainer(redScrollRef, 'left')} className="p-1 bg-[#111] hover:bg-[#222] border border-[#222] text-[#888] hover:text-white transition-colors"><ChevronLeft className="w-3 h-3" /></button>
                <button onClick={() => scrollContainer(redScrollRef, 'right')} className="p-1 bg-[#111] hover:bg-[#222] border border-[#222] text-[#888] hover:text-white transition-colors"><ChevronRight className="w-3 h-3" /></button>
              </div>
            </div>
            <div className="flex gap-2 justify-center lg:justify-end">
              {redBans.map((hero, i) => renderBanSlot(hero, "red", i, isSlotActive("red", "ban", i)))}
            </div>
          </div>
          <div ref={redScrollRef} className="flex-1 p-4 space-y-2 lg:overflow-y-auto flex md:flex-col gap-2 lg:gap-0 overflow-x-auto lg:overflow-x-visible snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {redPicks.map((hero, i) => (
              <div key={i} className="w-48 lg:w-auto flex-shrink-0 snap-start">
                {renderPickSlot(hero, "red", i, isSlotActive("red", "pick", i))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}



