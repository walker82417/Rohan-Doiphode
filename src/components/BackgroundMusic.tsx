import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Play } from "lucide-react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [needsInteraction, setNeedsInteraction] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.4;
    audio.muted = false;
    audio.loop = true;

    const tryPlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        setNeedsInteraction(false);
      } catch {
        setNeedsInteraction(true);
        const start = async () => {
          try {
            await audio.play();
            setIsPlaying(true);
            setNeedsInteraction(false);
            window.removeEventListener("click", start);
            window.removeEventListener("keydown", start);
            window.removeEventListener("touchstart", start);
          } catch {}
        };
        window.addEventListener("click", start);
        window.addEventListener("keydown", start);
        window.addEventListener("touchstart", start);
      }
    };
    tryPlay();
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
        setNeedsInteraction(false);
      } catch {}
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/background-music.mp3" loop preload="auto" />
      <button
        onClick={toggle}
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:scale-105 border border-primary/20"
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5" />
        ) : needsInteraction ? (
          <>
            <Play className="w-5 h-5" />
            <span className="text-sm font-medium">Play Music</span>
          </>
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </button>
    </>
  );
}
