import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="border-t border-[#222] bg-[#050505] pt-16 pb-8 text-[#888]">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Description (spans 2 columns) */}
          <div className="lg:col-span-2">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-3 mb-6">
              <img src="/favicon.png" alt="Logo" className="h-10 w-10 object-contain drop-shadow-md" />
              <div>
                <span className="text-sm font-bold tracking-[0.2em] uppercase text-white">Swiss</span>
                <span className="text-sm font-light tracking-[0.2em] uppercase text-[#dc2626] ml-1">Arena</span>
              </div>
            </Link>
            <p className="text-xs leading-relaxed text-[#666] max-w-sm">
              The community hub for Arena of Valor. Guides, hero data, draft tools, and strategy &mdash; built for competitive players.
            </p>
          </div>

          {/* Link Columns */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#dc2626] mb-6">Heroes</h4>
            <ul className="space-y-4 text-xs">
              <li><Link to="/heroes" className="hover:text-white transition-colors">Hero Catalog</Link></li>
              <li><Link to="/tierlist" className="hover:text-white transition-colors">Tier Lists</Link></li>
              <li><Link to="/counter-maker" className="hover:text-white transition-colors">Counter Picks</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#dc2626] mb-6">Tools</h4>
            <ul className="space-y-4 text-xs">
              <li><Link to="/draft" className="hover:text-white transition-colors">Draft Planner</Link></li>
              <li><Link to="/winrate" className="hover:text-white transition-colors">Winrate Calculator</Link></li>
              <li><Link to="/patch-notes" className="hover:text-white transition-colors">Patch Notes</Link></li>
              <li><Link to="/ranks" className="hover:text-white transition-colors">Ranks</Link></li>
              <li><Link to="/fanart" className="hover:text-white transition-colors">Fanart Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#dc2626] mb-6">Community</h4>
            <ul className="space-y-4 text-xs">
              <li><a href="https://discord.com/invite/rov-mvp-club-1148485520540844122" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Discord</a></li>
              <li><a href="https://www.facebook.com/ROVTH" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="https://www.youtube.com/GarenaRoVThailand" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">YouTube</a></li>
              <li><a href="https://www.instagram.com/garena_rov_official" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#dc2626] mb-6">Game</h4>
            <ul className="space-y-4 text-xs">
              <li><a href="https://rov.in.th/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Download RoV</a></li>
              <li><Link to="/esports" className="hover:text-white transition-colors">Esports</Link></li>
              <li><a href="https://rov.in.th/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Official Site</a></li>
              <li><a href="https://cs.agentic.garena.in.th/service/garena-rov" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="pt-8 border-t border-[#222]">
          <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#555] mb-4">Disclaimer</h4>
          <div className="space-y-4 text-[11px] leading-relaxed max-w-4xl text-[#555]">
            <p>
              <strong className="text-[#888]">SWISS ARENA</strong> is a <strong className="text-[#888]">fan-made</strong> resource built and maintained for the community. This site is <strong className="text-[#888]">not affiliated with, endorsed, or approved</strong> by Garena, Tencent, or the official ROV / Arena of Valor publishers in any way.
            </p>
            <p>
              All game data, hero images, and lore shown on this site are property of their respective owners and are used for <strong className="text-[#888]">non-commercial educational purposes only</strong>. The statistics and strategies are presented as best-effort approximations for community study and competitive analysis.
            </p>
            <p className="text-[#666]">
              Created out of passion for the game and its community.
            </p>
            <p className="mt-6 pt-6 border-t border-[#222] text-[#555]">
              A Fan Project by badcookie &middot; SWISS ARENA &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
