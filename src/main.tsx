import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { GlobalAudioPlayer } from "./components/GlobalAudioPlayer.tsx";
import "./index.css";

const Landing = lazy(() => import("./pages/Landing.tsx"));
const HeroCatalog = lazy(() => import("./pages/HeroCatalog.tsx"));
const DraftPlanner = lazy(() => import("./pages/DraftPlanner.tsx"));
const Tierlist = lazy(() => import("./pages/Tierlist.tsx"));
const PatchNotes = lazy(() => import("./pages/PatchNotes.tsx"));
const Esports = lazy(() => import("./pages/Esports.tsx"));
const Fanart = lazy(() => import("./pages/Fanart.tsx"));
const CounterMaker = lazy(() => import("./pages/CounterMaker.tsx"));
const Ranks = lazy(() => import("./pages/Ranks.tsx"));
const Winrate = lazy(() => import("./pages/Winrate.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

import { Layout } from "./components/Layout.tsx";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0e]">
      <div className="animate-pulse text-[#666] text-sm tracking-widest uppercase">
        Loading...
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConvexProvider client={convex}>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Landing />} />
              <Route path="/heroes" element={<HeroCatalog />} />
              <Route path="/draft" element={<DraftPlanner />} />
              <Route path="/tierlist" element={<Tierlist />} />
              <Route path="/patch-notes" element={<PatchNotes />} />
              <Route path="/esports" element={<Esports />} />
              <Route path="/fanart" element={<Fanart />} />
              <Route path="/counter-maker" element={<CounterMaker />} />
              <Route path="/ranks" element={<Ranks />} />
              <Route path="/winrate" element={<Winrate />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          <GlobalAudioPlayer />
        </Suspense>
      </BrowserRouter>
    </ConvexProvider>
  </StrictMode>
);

