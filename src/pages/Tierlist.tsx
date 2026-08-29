import { useState, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { Swords, Menu, X, Crown, RotateCcw, Download, Loader2 } from "lucide-react";
import html2canvas from "html2canvas";
import { heroes, type Hero } from "@/data/heroes";
import { heroImgUrl } from "../lib/heroImg";

const bezierEase = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05, ease: bezierEase },
  }),
};

const tierColors: Record<string, string> = {
  S: "bg-[#dc2626] text-white border-[#dc2626]",
  A: "bg-[#f97316] text-white border-[#f97316]",
  B: "bg-[#f59e0b] text-white border-[#f59e0b]",
  C: "bg-[#10b981] text-white border-[#10b981]",
  D: "bg-[#3b82f6] text-white border-[#3b82f6]",
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

const TIERS = ["S", "A", "B", "C", "D"];

export default function Tierlist() {
  const tierlistRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);

  // Initialize state based on hero default tiers
  const initialTierData = useMemo(() => {
    const data: Record<string, Hero[]> = { S: [], A: [], B: [], C: [], D: [], UNASSIGNED: [] };
    heroes.forEach((h) => {
      if (h.tier && data[h.tier]) {
        data[h.tier].push(h);
      } else {
        data.UNASSIGNED.push(h);
      }
    });
    return data;
  }, []);

  const [tierData, setTierData] = useState(initialTierData);
  const [draggedItem, setDraggedItem] = useState<{ id: string; sourceTier: string } | null>(null);

  const handleDragStart = (e: React.DragEvent, id: string, sourceTier: string) => {
    setDraggedItem({ id, sourceTier });
    // This is required for Firefox to allow drag
    e.dataTransfer.setData("text/plain", id);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent, targetTier: string) => {
    e.preventDefault();
    if (!draggedItem) return;

    const { id, sourceTier } = draggedItem;
    if (sourceTier === targetTier) {
      setDraggedItem(null);
      return;
    }

    setTierData((prev) => {
      const sourceList = [...prev[sourceTier]];
      const targetList = [...prev[targetTier]];
      
      const heroIndex = sourceList.findIndex((h) => h.id === id);
      if (heroIndex === -1) return prev;
      
      const [hero] = sourceList.splice(heroIndex, 1);
      targetList.push(hero);

      return {
        ...prev,
        [sourceTier]: sourceList,
        [targetTier]: targetList,
      };
    });

    setDraggedItem(null);
  };

  const resetTiers = () => {
    const next: Record<string, Hero[]> = { S: [], A: [], B: [], C: [], D: [], UNASSIGNED: [...heroes] };
    setTierData(next);
  };

  const handleExport = async () => {
    if (!tierlistRef.current) return;
    setIsExporting(true);
    try {
      const canvas = await html2canvas(tierlistRef.current, {
        backgroundColor: "#050505",
        scale: 2,
        useCORS: true,
      });
      const dataUrl = canvas.toDataURL("image/jpeg", 0.9);
      const link = document.createElement("a");
      link.download = "swiss-arena-tierlist.jpg";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to export image", err);
    } finally {
      setIsExporting(false);
    }
  };

  const renderHeroCard = (hero: Hero, currentTier: string) => (
    <div
      key={hero.id}
      draggable
      onDragStart={(e) => handleDragStart(e, hero.id, currentTier)}
      onDragEnd={() => setDraggedItem(null)}
      className="bg-[#111] p-2 flex flex-col items-center justify-center hover:bg-[#1a1a1a] transition-colors cursor-grab active:cursor-grabbing group border border-transparent hover:border-[#333]"
    >
      <div className="w-12 h-12 bg-[#222] rounded-sm mb-2 flex items-center justify-center group-hover:bg-[#333] transition-colors overflow-hidden relative">
        <img
          src={heroImgUrl(hero.name)}
          alt={hero.name}
          className="absolute inset-0 w-full h-full object-cover object-top opacity-70 group-hover:opacity-100 transition-opacity"
          loading="lazy"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
      </div>
      <div className="text-[10px] font-bold text-white text-center px-1 pb-1 w-full leading-tight">{hero.name}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0e] text-white">
      <Navbar />

      <section className="py-12 border-b border-[#222]">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#dc2626]" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#dc2626]">Interactive</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">
                  TIER <span className="text-[#666]">MAKER</span>
                </h1>
                <p className="text-sm text-[#666] max-w-lg">
                  Drag and drop heroes to create your own tier list. Share your meta read with the community.
                </p>
              </div>
              
              <div className="flex gap-4">
                <button
                  onClick={resetTiers}
                  className="inline-flex items-center border border-[#222] text-[#888] hover:text-white hover:border-white text-[10px] font-bold tracking-[0.15em] uppercase px-6 py-3 transition-colors"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reset
                </button>
                <button
                  onClick={handleExport}
                  disabled={isExporting}
                  className="inline-flex items-center bg-[#dc2626] hover:bg-[#b91c1c] disabled:opacity-50 disabled:cursor-not-allowed text-white text-[10px] font-bold tracking-[0.15em] uppercase px-6 py-3 transition-colors"
                >
                  {isExporting ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Download className="h-4 w-4 mr-2" />}
                  {isExporting ? "Exporting..." : "Export"}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16">
          
          {/* Tier Grid */}
          <div ref={tierlistRef} className="bg-[#050505] border border-[#222] mb-12 flex flex-col">
            {TIERS.map((tier) => (
              <div key={tier} className="flex flex-col md:flex-row border-b border-[#222] last:border-b-0">
                {/* Tier Label */}
                <div className={`w-full md:w-24 h-12 md:h-auto flex-shrink-0 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#222] ${tierColors[tier]} bg-opacity-10 md:bg-opacity-100`}>
                  <span className="text-2xl font-black tracking-tighter md:text-white" style={{ color: tierColors[tier].includes('text-white') ? 'white' : undefined }}>{tier}</span>
                </div>
                
                {/* Drop Zone */}
                <div
                  className="flex-1 min-h-[100px] p-2 flex flex-wrap gap-2 content-start bg-[#0a0a0e] transition-colors"
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, tier)}
                >
                  {tierData[tier].map((hero) => renderHeroCard(hero, tier))}
                  {tierData[tier].length === 0 && (
                    <div data-html2canvas-ignore="true" className="w-full h-full flex items-center justify-center opacity-20 pointer-events-none">
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#666]">Drag heroes here</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Unassigned Pool */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-6 bg-[#444]" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#666]">Hero Pool ({tierData.UNASSIGNED.length})</span>
            </div>
            <div
              className="min-h-[200px] bg-[#050505] border border-[#222] p-4 flex flex-wrap gap-2 content-start"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, "UNASSIGNED")}
            >
              {tierData.UNASSIGNED.map((hero) => renderHeroCard(hero, "UNASSIGNED"))}
              {tierData.UNASSIGNED.length === 0 && (
                <div className="w-full py-12 flex items-center justify-center opacity-30">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#666]">All heroes assigned</span>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}


