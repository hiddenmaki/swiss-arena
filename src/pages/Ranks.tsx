import { motion } from "framer-motion";
import { rovRanks } from "../data/ranks";
import { Shield, Star, Trophy, Target, ChevronRight } from "lucide-react";

export default function Ranks() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#0a0a0e] pt-24 pb-32 text-white"
    >
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#dc2626]" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#dc2626]">Game System</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight mb-6">
            Ranked <span className="text-[#dc2626]">Tiers</span>
          </h1>
          <p className="text-[#888] max-w-2xl text-sm leading-relaxed">
            ระบบจัดอันดับใน Arena of Valor (RoV) ตั้งแต่ผู้เริ่มต้นจนถึงจุดสูงสุดของเซิร์ฟเวอร์ <br/>
            สำรวจเส้นทางที่คุณต้องเผชิญเพื่อคว้าเกียรติยศสูงสุด
          </p>
        </div>

        {/* Timeline / Grid */}
        <div className="relative border-l border-[#222] ml-4 md:ml-8 pl-8 md:pl-16 space-y-16">
          {rovRanks.map((rank, index) => (
            <motion.div
              key={rank.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[37px] md:-left-[69px] top-4 w-4 h-4 rounded-full bg-[#0a0a0e] border-2 border-[#dc2626] group-hover:bg-[#dc2626] transition-colors z-10" />
              
              <div className="bg-[#111]/50 border border-[#222] p-8 md:p-12 relative overflow-hidden backdrop-blur-sm hover:border-[#444] transition-colors">
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${rank.color} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-700`} />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                  <div className="flex items-center gap-8">
                    {/* Rank Badge Mockup / Image */}
                    <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <img 
                        src={`/ranks/${rank.id}.png?v=${new Date().getTime()}`} 
                        alt={rank.name}
                        className={`absolute inset-0 w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] z-20 ${rank.id === 'immortal' ? 'scale-[1.4]' : ''}`}
                        onError={(e) => {
                          // Hide image and show fallback on error
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      
                      {/* Fallback CSS Badge (Hidden by default, shown via JS if image fails) */}
                      <div className="hidden absolute inset-0 items-center justify-center w-full h-full">
                        <div className={`absolute inset-0 bg-gradient-to-br ${rank.color} opacity-20 rounded-xl transform rotate-45 group-hover:rotate-90 transition-transform duration-700`} />
                        <div className={`absolute inset-2 bg-gradient-to-br ${rank.color} opacity-40 rounded-xl transform rotate-12`} />
                        <Shield className="w-10 h-10 md:w-14 md:h-14 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] z-10" />
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl md:text-4xl font-bold tracking-widest uppercase mb-2">
                        {rank.name}
                      </h2>
                    </div>
                  </div>

                  {/* Requirements / Details */}
                  <div className="flex flex-row md:flex-col gap-6 md:gap-4 border-t md:border-t-0 md:border-l border-[#333] pt-6 md:pt-0 md:pl-8">
                    {rank.tiers ? (
                      <div className="flex items-center gap-3">
                        <Target className="w-5 h-5 text-[#666]" />
                        <div>
                          <p className="text-[10px] text-[#555] uppercase font-bold tracking-widest">Sub-Tiers</p>
                          <p className="font-medium text-white">{rank.tierDetails}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <Star className="w-5 h-5 text-[#dc2626]" />
                        <div>
                          <p className="text-[10px] text-[#555] uppercase font-bold tracking-widest">Requirement</p>
                          <p className="font-medium text-white">{rank.stars}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
