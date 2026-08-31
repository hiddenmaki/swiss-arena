import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { Swords, Menu, X, FileText, ChevronRight } from "lucide-react";

const bezierEase = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05, ease: bezierEase },
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
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-3">
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

interface PatchDetailSection {
  title: string;
  items: string[];
}

interface Patch {
  version: string;
  date: string;
  title: string;
  description: string;
  highlights: string[];
  fullDetails: PatchDetailSection[];
}

const mockPatches: Patch[] = [
  {
    version: "1.54.2",
    date: "August 2026",
    title: "Balance Adjustments & Sinestrea Rework",
    description: "แพตช์ปรับสมดุลล่าสุด เน้นการปรับปรุงฮีโร่เก่าให้เข้ากับเมต้าปัจจุบัน รวมถึงการนำระบบสละเลือดของ Sinestrea กลับมาปรับปรุงใหม่",
    highlights: ["Sinestrea: ปรับสกิลคู่ Dextra และระบบ Blood Ritual", "Thane: บัฟฟื้นฟู HP จากสกิล Excalibur", "Arthur & Butterfly: เนิร์ฟลดความสามารถ", "Wiro: ทดสอบบัฟฟื้นฟูเลือดในเซิร์ฟเบต้า"],
    fullDetails: [
      {
        title: "ฮีโร่ - Sinestrea (Rework)",
        items: [
          "สกิลติดตัว: ปรับเปลี่ยนกลไกการสละเลือด (Blood Ritual) ให้ใช้งานง่ายขึ้น",
          "สกิล 1: เพิ่มเอฟเฟกต์สโลว์เป้าหมาย 30% เป็นเวลา 1.5 วินาที",
          "สกิล 2: สลับโหมดโจมตีใกล้/ไกล ได้ลื่นไหลขึ้น",
          "สกิลคู่ (Dextra): ปรับปรุงระยะเวลาการแสดงผลสกิลลิงก์ให้สมดุลขึ้น"
        ]
      },
      {
        title: "ฮีโร่ - ปรับสมดุล (บัฟ)",
        items: [
          "Thane: สกิลอัลติเมท (Excalibur) ฟื้นฟู HP ตามความเสียหายที่ทำได้เพิ่มขึ้นจาก 15% -> 20%",
          "Wiro (Beta): โจมตีปกติแบบเสริมพลังจะช่วยฟื้นฟู HP เมื่อโจมตีโดนฮีโร่ศัตรู"
        ]
      },
      {
        title: "ฮีโร่ - ปรับสมดุล (เนิร์ฟ)",
        items: [
          "Arthur: ลดปริมาณโล่จากสกิล 1 ในช่วงเลทเกมลง 10%",
          "Butterfly: ลดความเสียหายพื้นฐานของสกิลอัลติเมทลง 50 หน่วยในทุกระดับ"
        ]
      }
    ]
  },
  {
    version: "1.54.0",
    date: "July 8, 2026",
    title: "New Hero: ทมิฬ (Tamyn)",
    description: "ต้อนรับการมาของฮีโร่ใหม่ 'ทมิฬ' ออฟเลนสายไฟเตอร์ ลูกครึ่งยักษ์ผู้ออกล่าความมืดและแสงสว่าง",
    highlights: ["เปิดตัวฮีโร่ใหม่ 'ทมิฬ' (Warrior)", "กิจกรรมแจกฮีโร่ทมิฬฟรี", "ปรับปรุงระบบจัดอันดับโหมด Rank", "อัปเดตแผนที่ธีมใหม่"],
    fullDetails: [
      {
        title: "ฮีโร่ใหม่ - ทมิฬ (Tamyn)",
        items: [
          "ตำแหน่ง: Warrior / Offlane",
          "จุดเด่น: ความคล่องตัวสูง มีสกิลพุ่งเข้าหาศัตรูและทำความเสียหายวงกว้าง",
          "สกิลติดตัว: เมื่อรวบรวมพลังแห่งแสงและความมืดครบ จะเสริมพลังโจมตีปกติครั้งถัดไปให้เป็น True Damage",
          "สกิลอัลติเมท: สร้างอาณาเขตทมิฬ ชะลอความเร็วศัตรูทั้งหมดและดูดซับความเสียหาย"
        ]
      },
      {
        title: "กิจกรรมและระบบใหม่",
        items: [
          "เพิ่มกิจกรรม: บททดสอบแห่งแสงและเงา รับฮีโร่ทมิฬฟรีเมื่อทำภารกิจครบ 7 วัน",
          "ระบบจัดอันดับ: รีเซ็ตแรงก์ Season 34 และปรับปรุงหน้าต่างแสดงผลรางวัลแรงก์ใหม่",
          "แผนที่สมรภูมิ: เพิ่มเอฟเฟกต์แสงจันทร์ในพื้นที่แม่น้ำช่วงกลางคืน"
        ]
      }
    ]
  }
];

export default function PatchNotes() {
  const [activePatch, setActivePatch] = useState<Patch | null>(null);

  // prevent body scroll when modal is open
  if (typeof document !== 'undefined') {
    if (activePatch) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0e] text-white">
      <Navbar />

      <section className="py-16 border-b border-[#222]">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#dc2626]" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#dc2626]">Game Updates</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">
              PATCH <span className="text-[#666]">NOTES</span>
            </h1>
            <p className="text-sm text-[#666] max-w-lg">
              Stay up to date with the latest hero balances, item changes, and game mechanics.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8 space-y-8">
              {mockPatches.map((patch, idx) => (
                <motion.div 
                  key={patch.version} 
                  variants={fadeUp} 
                  initial="hidden" 
                  animate="visible" 
                  custom={idx}
                  className="bg-[#0d0d0d] border border-[#222] p-8 group hover:border-[#dc2626/50] transition-colors"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase bg-[#dc2626] text-white px-3 py-1">V {patch.version}</span>
                        <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#666]">{patch.date}</span>
                      </div>
                      <h3 className="text-2xl font-black text-white tracking-tight">{patch.title}</h3>
                    </div>
                    <FileText className="w-8 h-8 text-[#222] group-hover:text-[#dc2626] transition-colors" />
                  </div>
                  
                  <p className="text-sm text-[#888] mb-6 leading-relaxed">
                    {patch.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#555]">Key Changes</span>
                    <ul className="space-y-2">
                      {patch.highlights.map(item => (
                        <li key={item} className="text-sm text-[#ccc] flex items-center gap-2">
                          <div className="w-1 h-1 bg-[#dc2626]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    onClick={() => setActivePatch(patch)}
                    className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#dc2626] hover:text-white transition-colors"
                  >
                    Read Full Notes <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
            
            <div className="md:col-span-4 space-y-8">
              <div className="bg-[#111] border border-[#222] p-6">
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#666] mb-4">Version History</h4>
                <div className="space-y-2">
                  {mockPatches.map(patch => (
                    <button key={patch.version} className="w-full text-left px-4 py-3 bg-[#0a0a0e] text-sm text-[#888] hover:bg-[#1a1a1a] hover:text-white transition-colors flex justify-between items-center">
                      <span>v{patch.version}</span>
                      <ChevronRight className="w-4 h-4 text-[#555]" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      <AnimatePresence>
        {activePatch && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#050508]/90 backdrop-blur-sm"
            onClick={() => setActivePatch(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: bezierEase }}
              className="relative w-full max-w-3xl max-h-[85vh] bg-[#0a0a0e] border border-[#333] shadow-2xl flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between p-6 border-b border-[#222] bg-[#0d0d0d]">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase bg-[#dc2626] text-white px-3 py-1">V {activePatch.version}</span>
                    <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#666]">{activePatch.date}</span>
                  </div>
                  <h2 className="text-2xl font-black text-white tracking-tight">{activePatch.title}</h2>
                </div>
                <button 
                  onClick={() => setActivePatch(null)}
                  className="p-2 text-[#888] hover:text-white hover:bg-[#222] rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto flex-1">
                <p className="text-sm text-[#888] mb-8 leading-relaxed">
                  {activePatch.description}
                </p>

                <div className="space-y-8">
                  {activePatch.fullDetails.map((detail, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-px w-8 bg-[#dc2626]" />
                        <h4 className="text-sm font-bold tracking-[0.1em] text-white uppercase">{detail.title}</h4>
                      </div>
                      <ul className="space-y-3 pl-11">
                        {detail.items.map((item, i) => (
                          <li key={i} className="text-sm text-[#ccc] leading-relaxed relative">
                            <span className="absolute -left-6 top-2.5 w-1.5 h-1.5 bg-[#dc2626] rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
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


