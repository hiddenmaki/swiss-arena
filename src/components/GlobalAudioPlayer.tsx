import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export function GlobalAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Attempt to autoplay on mount
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5; // Default volume 50%

    // The browser usually blocks autoplay unless muted or user has interacted.
    // We try to play it. If it fails, we wait for the first click on the document.
    const playAttempt = audio.play();

    if (playAttempt !== undefined) {
      playAttempt
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay was prevented.
          // Add a one-time click listener to the document to start playback.
          const handleFirstInteraction = () => {
            audio.play().then(() => {
              setIsPlaying(true);
            }).catch(e => console.error("Playback failed after interaction", e));
            
            document.removeEventListener("click", handleFirstInteraction);
            document.removeEventListener("keydown", handleFirstInteraction);
          };

          document.addEventListener("click", handleFirstInteraction);
          document.addEventListener("keydown", handleFirstInteraction);

          return () => {
            document.removeEventListener("click", handleFirstInteraction);
            document.removeEventListener("keydown", handleFirstInteraction);
          };
        });
    }
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(console.error);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/mark-your-legacy.mp3"
        loop
        onTimeUpdate={(e) => {
          if (e.currentTarget.currentTime >= 249) {
            e.currentTarget.currentTime = 0;
          }
        }}
      />
      
      {/* Floating Control Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-[100] w-12 h-12 bg-[#111]/80 backdrop-blur-md border border-[#333] rounded-full flex items-center justify-center text-white hover:bg-[#222] hover:scale-110 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] group"
        title={isPlaying ? "Mute Music" : "Play Music"}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-[#10b981]" />
        ) : (
          <VolumeX className="w-5 h-5 text-[#888]" />
        )}
        
        {/* Subtle pulse effect when playing */}
        {isPlaying && (
          <span className="absolute inset-0 rounded-full border border-[#10b981] animate-ping opacity-20 pointer-events-none" />
        )}
      </motion.button>
    </>
  );
}
