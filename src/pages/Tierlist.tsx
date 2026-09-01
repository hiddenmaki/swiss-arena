import { useState, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { Swords, Menu, X, Crown, RotateCcw, Download, Loader2 } from "lucide-react";
import html2canvas from "html2canvas";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
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



const TIERS = ["S", "A", "B", "C", "D"];

export default function Tierlist() {
  const tierlistRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);

  const dbHeroes = useQuery(api.heroes.getAll);
  const [tierData, setTierData] = useState<Record<string, any[]> | null>(null);

  // Initialize state based on hero default tiers once data loads
  useMemo(() => {
    if (dbHeroes && !tierData) {
      const data: Record<string, any[]> = { S: [], A: [], B: [], C: [], D: [], UNASSIGNED: [] };
      dbHeroes.forEach((h) => {
        if (h.tier && data[h.tier]) {
          data[h.tier].push(h);
        } else {
          data.UNASSIGNED.push(h);
        }
      });
      setTierData(data);
    }
  }, [dbHeroes, tierData]);

  const [draggedItem, setDraggedItem] = useState<{ id: string; sourceTier: string } | null>(null);
  const [selectedItem, setSelectedItem] = useState<{ id: string; sourceTier: string } | null>(null);

  const moveHero = (id: string, sourceTier: string, targetTier: string) => {
    if (sourceTier === targetTier) return;
    setTierData((prev) => {
      if (!prev) return prev;
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
  };

  const handleDragStart = (e: React.DragEvent, id: string, sourceTier: string) => {
    setDraggedItem({ id, sourceTier });
    setSelectedItem(null); // clear selection if they start dragging
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
    moveHero(draggedItem.id, draggedItem.sourceTier, targetTier);
    setDraggedItem(null);
  };

  const handleHeroClick = (e: React.MouseEvent, id: string, currentTier: string) => {
    e.stopPropagation();
    if (selectedItem) {
      if (selectedItem.id === id) {
        setSelectedItem(null); // deselect
      } else {
        moveHero(selectedItem.id, selectedItem.sourceTier, currentTier);
        setSelectedItem(null);
      }
    } else {
      setSelectedItem({ id, sourceTier: currentTier });
    }
  };

  const handleZoneClick = (targetTier: string) => {
    if (selectedItem) {
      moveHero(selectedItem.id, selectedItem.sourceTier, targetTier);
      setSelectedItem(null);
    }
  };

  const resetTiers = () => {
    if (!dbHeroes) return;
    const next: Record<string, any[]> = { S: [], A: [], B: [], C: [], D: [], UNASSIGNED: [...dbHeroes] };
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

  const renderHeroCard = (hero: any, currentTier: string) => {
    const isSelected = selectedItem?.id === hero.id;
    return (
      <div
        key={hero.id}
        draggable
        onDragStart={(e) => handleDragStart(e, hero.id, currentTier)}
        onDragEnd={() => setDraggedItem(null)}
        onClick={(e) => handleHeroClick(e, hero.id, currentTier)}
        className={`bg-[#111] p-2 flex flex-col items-center justify-center hover:bg-[#1a1a1a] transition-colors cursor-pointer md:cursor-grab active:cursor-grabbing group border ${isSelected ? 'border-[#3b82f6] shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'border-transparent hover:border-[#333]'}`}
      >
        <div className="w-12 h-12 bg-[#222] rounded-sm mb-2 flex items-center justify-center group-hover:bg-[#333] transition-colors overflow-hidden relative">
          <img
            src={heroImgUrl(hero.name)}
            alt={hero.name}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity ${isSelected ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}
            loading="lazy"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </div>
        <div className={`text-[10px] font-bold text-center px-1 pb-1 w-full leading-tight ${isSelected ? 'text-[#3b82f6]' : 'text-white'}`}>{hero.name}</div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a0e] text-white">
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
                  TIER <span className="text-[#dc2626]">MAKER</span>
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
          
          {!tierData ? (
            <div className="flex flex-col items-center justify-center py-32 text-[#666]">
              <Loader2 className="w-8 h-8 animate-spin mb-4 text-[#dc2626]" />
              <p>Loading heroes from database...</p>
            </div>
          ) : (
            <>
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
                  className={`flex-1 min-h-[100px] p-2 flex flex-wrap gap-2 content-start transition-colors cursor-pointer ${selectedItem ? 'bg-[#0a0a0e] hover:bg-[#111]' : 'bg-[#0a0a0e]'}`}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, tier)}
                  onClick={() => handleZoneClick(tier)}
                >
                  {tierData[tier].map((hero) => renderHeroCard(hero, tier))}
                  {tierData[tier].length === 0 && (
                    <div data-html2canvas-ignore="true" className="w-full h-full flex items-center justify-center opacity-20 pointer-events-none">
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#666]">{selectedItem ? 'Tap to place here' : 'Drag heroes here'}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {/* Watermark for Export */}
            <div className="w-full flex items-center justify-between px-4 py-3 bg-[#0a0a0e] border-t border-[#222]">
              <div className="flex items-center gap-2">
                <img src="/favicon.png" alt="Logo" className="w-5 h-5 object-contain opacity-80" />
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white">SWISS ARENA</span>
              </div>
              <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#555]">
                Made by <span className="text-[#888]">badcookie</span>
              </div>
            </div>
          </div>

          {/* Unassigned Pool */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-6 bg-[#444]" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#666]">Hero Pool ({tierData.UNASSIGNED.length})</span>
            </div>
            <div
              className={`min-h-[200px] border border-[#222] p-4 flex flex-wrap gap-2 content-start transition-colors cursor-pointer ${selectedItem ? 'bg-[#050505] hover:bg-[#0a0a0e]' : 'bg-[#050505]'}`}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, "UNASSIGNED")}
              onClick={() => handleZoneClick("UNASSIGNED")}
            >
              {tierData.UNASSIGNED.map((hero) => renderHeroCard(hero, "UNASSIGNED"))}
              {tierData.UNASSIGNED.length === 0 && (
                <div className="w-full py-12 flex items-center justify-center opacity-30 pointer-events-none">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#666]">All heroes assigned</span>
                </div>
              )}
            </div>
          </div>
          </>
          )}

        </div>
      </section>
    </div>
  );
}


