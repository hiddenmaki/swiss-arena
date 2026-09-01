import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { X, Menu, ChevronDown } from "lucide-react";
import { Footer } from "./Footer";

type NavItem = { label: string; href?: string; children?: { label: string; href: string }[] };

const navConfig: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Game Info",
    children: [
      { label: "Heroes", href: "/heroes" },
      { label: "Ranks", href: "/ranks" },
    ],
  },
  {
    label: "Tools",
    children: [
      { label: "Tierlist", href: "/tierlist" },
      { label: "Draft Planner", href: "/draft" },
      { label: "Counter Maker", href: "/counter-maker" },
      { label: "Winrate Calculator", href: "/winrate" },
    ],
  },
  {
    label: "Community",
    children: [
      { label: "Patch Notes", href: "/patch-notes" },
      { label: "Esports", href: "/esports" },
      { label: "Fanart", href: "/fanart" },
    ],
  },
];

export function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handlePlayClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

    // iOS detection
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      window.open('https://apps.apple.com/th/app/garena-rov/id1150337432', '_blank');
      return;
    }

    // Android detection
    if (/android/i.test(userAgent)) {
      window.open('https://play.google.com/store/apps/details?id=com.garena.game.kgth', '_blank');
      return;
    }

    // Fallback for PC
    window.open('https://rov.in.th/', '_blank');
  };

  const toggleMobileDropdown = (label: string) => {
    if (openDropdown === label) setOpenDropdown(null);
    else setOpenDropdown(label);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0e] text-white flex flex-col font-sans">
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

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center gap-10">
              {navConfig.map((item) => (
                item.children ? (
                  <div key={item.label} className="relative group py-5">
                    <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#888] group-hover:text-white transition-colors duration-200 flex items-center gap-1 cursor-pointer">
                      {item.label} <ChevronDown className="w-3 h-3 opacity-50" />
                    </span>
                    <div className="absolute top-full left-0 mt-0 w-48 bg-[#0a0a0e]/95 backdrop-blur-md border border-[#222] shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col p-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="px-4 py-3 text-[11px] text-[#888] hover:text-white hover:bg-[#111] transition-colors uppercase tracking-widest"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link key={item.label} to={item.href!} className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#888] hover:text-white transition-colors duration-200 py-5">
                    {item.label}
                  </Link>
                )
              ))}
              <div className="w-px h-4 bg-[#222]" />
              <a href="https://rov.in.th/" onClick={handlePlayClick} target="_blank" rel="noopener noreferrer">
                <span className="inline-flex items-center bg-[#dc2626] hover:bg-[#b91c1c] text-white text-[11px] font-bold tracking-[0.15em] uppercase px-6 py-2 h-9 cursor-pointer transition-colors">
                  Play RoV
                </span>
              </a>
            </div>

            {/* Mobile Toggle */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="xl:hidden text-white p-2">
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="xl:hidden bg-[#0a0a0e] border-t border-[#222] max-h-[80vh] overflow-y-auto">
            <div className="px-8 py-6 flex flex-col gap-4">
              {navConfig.map((item) => (
                <div key={item.label} className="border-b border-[#222] pb-4 last:border-0">
                  {item.children ? (
                    <>
                      <button 
                        onClick={() => toggleMobileDropdown(item.label)}
                        className="w-full flex items-center justify-between text-sm font-bold tracking-[0.15em] uppercase text-white py-2"
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180 text-[#dc2626]" : "text-[#666]"}`} />
                      </button>
                      {openDropdown === item.label && (
                        <div className="flex flex-col gap-3 mt-3 pl-4 border-l-2 border-[#222]">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="text-xs font-medium tracking-[0.1em] uppercase text-[#888] hover:text-[#dc2626]"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href!}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm font-bold tracking-[0.15em] uppercase text-white py-2 block"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-4">
                <a href="https://rov.in.th/" onClick={handlePlayClick} target="_blank" rel="noopener noreferrer" className="block text-center bg-[#dc2626] text-white text-[11px] font-bold tracking-[0.15em] uppercase py-3">
                  Play RoV
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}
