import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Target, Trophy, Swords, AlertCircle, RefreshCcw } from "lucide-react";

export default function Winrate() {
  const [totalMatches, setTotalMatches] = useState<string>("");
  const [currentWinRate, setCurrentWinRate] = useState<string>("");
  const [desiredWinRate, setDesiredWinRate] = useState<string>("");

  const calculation = useMemo(() => {
    const total = parseFloat(totalMatches);
    const current = parseFloat(currentWinRate);
    const desired = parseFloat(desiredWinRate);

    if (isNaN(total) || isNaN(current) || isNaN(desired)) {
      return { status: "empty" };
    }
    if (total <= 0) return { status: "error", message: "จำนวนแมตช์ต้องมากกว่า 0" };
    if (current < 0 || current >= 100 || desired <= 0 || desired > 100) {
      return { status: "error", message: "อัตราการชนะต้องอยู่ระหว่าง 0 - 100%" };
    }
    if (desired <= current) {
      return { status: "error", message: "อัตราการชนะที่ต้องการต้องสูงกว่าปัจจุบัน" };
    }
    if (desired === 100) {
      return { status: "error", message: "ไม่สามารถคำนวณเป้าหมาย 100% ได้" };
    }

    const gamesToWin = (total * (desired - current)) / (100 - desired);
    const result = Math.ceil(gamesToWin);

    return { status: "success", result, totalNew: total + result };
  }, [totalMatches, currentWinRate, desiredWinRate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#0a0a0e] pt-24 pb-32 text-white relative"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        
        <div className="mb-12 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <div className="h-px w-12 bg-[#dc2626]" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#dc2626]">Tools</span>
            <div className="h-px w-12 bg-[#dc2626] md:hidden" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight mb-4">
            WINRATE <span className="text-[#dc2626]">CALCULATOR</span>
          </h1>
          <p className="text-[#888] max-w-2xl text-sm leading-relaxed mx-auto md:mx-0">
            เครื่องมือคำนวณอัตราการชนะ (Winrate) สุดแม่นยำ 
            รู้ทันทีว่าต้องแบกทีมชนะรวดอีกกี่ตาถึงจะทะลุเป้าหมายที่ตั้งไว้
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Input Section */}
          <div className="bg-[#0f0f13] border border-[#222] p-6 md:p-10 rounded-2xl relative overflow-hidden h-full">
            
            <h2 className="text-xl font-bold tracking-widest uppercase mb-8 flex items-center gap-3">
              <Swords className="w-5 h-5 text-[#dc2626]" />
              Stats Input
            </h2>

            <div className="space-y-6 relative z-10">
              <div>
                <label className="block text-xs font-bold tracking-[0.1em] uppercase text-[#888] mb-3">
                  จำนวนแมตช์ที่เล่นทั้งหมด
                </label>
                <input
                  type="number"
                  value={totalMatches}
                  onChange={(e) => setTotalMatches(e.target.value)}
                  placeholder="เช่น 1500"
                  className="w-full bg-[#15151a] border border-[#333] focus:border-[#dc2626] rounded-xl px-4 py-4 text-white placeholder-[#444] transition-colors outline-none font-medium [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold tracking-[0.1em] uppercase text-[#888] mb-3">
                  อัตราการชนะปัจจุบัน (%)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    value={currentWinRate}
                    onChange={(e) => setCurrentWinRate(e.target.value)}
                    placeholder="เช่น 55.5"
                    className="w-full bg-[#15151a] border border-[#333] focus:border-[#dc2626] rounded-xl pl-4 pr-12 py-4 text-white placeholder-[#444] transition-colors outline-none font-medium [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#666] font-bold">%</div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold tracking-[0.1em] uppercase text-[#dc2626] mb-3">
                  เป้าหมาย Winrate ที่ต้องการ (%)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    value={desiredWinRate}
                    onChange={(e) => setDesiredWinRate(e.target.value)}
                    placeholder="เช่น 60.0"
                    className="w-full bg-[#15151a] border border-[#dc2626]/50 focus:border-[#dc2626] rounded-xl pl-4 pr-12 py-4 text-white placeholder-[#444] transition-colors outline-none font-medium shadow-[0_0_15px_rgba(220,38,38,0.1)] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#666] font-bold">%</div>
                </div>
              </div>

              <button 
                onClick={() => { setTotalMatches(""); setCurrentWinRate(""); setDesiredWinRate(""); }}
                className="w-full flex items-center justify-center gap-2 py-4 text-xs font-bold tracking-[0.1em] uppercase text-[#888] hover:text-white transition-colors"
              >
                <RefreshCcw className="w-4 h-4" />
                เคลียร์ข้อมูล
              </button>
            </div>
          </div>

          {/* Result Section */}
          <div className="bg-[#dc2626] p-6 md:p-10 rounded-2xl relative overflow-hidden flex flex-col justify-center h-full min-h-[400px]">

            <div className="relative z-10 text-center">
              {calculation.status === "empty" && (
                <div className="text-white/60">
                  <Target className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium">กรอกข้อมูลให้ครบทั้ง 3 ช่อง<br/>เพื่อดูผลลัพธ์</p>
                </div>
              )}

              {calculation.status === "error" && (
                <div className="text-white">
                  <AlertCircle className="w-16 h-16 mx-auto mb-4 text-white" />
                  <p className="text-lg font-medium bg-black/20 p-4 rounded-xl backdrop-blur-sm">
                    {calculation.message}
                  </p>
                </div>
              )}

              {calculation.status === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring" }}
                >
                  <p className="text-white/80 font-medium text-lg mb-2">เพื่อให้ได้ Winrate ตามเป้าหมาย...</p>
                  <p className="text-white text-2xl font-bold mb-6">คุณต้องแบกทีมชนะติดต่อกัน</p>
                  
                  <div className="flex items-end justify-center gap-3 mb-8">
                    <span className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none drop-shadow-lg">
                      {calculation.result?.toLocaleString()}
                    </span>
                    <span className="text-xl md:text-2xl font-bold pb-1 md:pb-2 opacity-80 uppercase tracking-widest">
                      Games
                    </span>
                  </div>

                  <div className="inline-block bg-black/20 px-6 py-4 rounded-xl backdrop-blur-sm">
                    <p className="text-sm font-medium text-white/90">
                      รวมแมตช์ทั้งหมดจะเป็น: <span className="font-bold text-white">{calculation.totalNew?.toLocaleString()} แมตช์</span>
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
