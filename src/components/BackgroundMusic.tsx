import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.3;

    const tryPlay = async () => {
      try {
        await audio.play();
        setHasStarted(true);
      } catch {
        // Autoplay blocked — wait for first user interaction
        const startOnInteract = async () => {
          try {
            await audio.play();
            setHasStarted(true);
          } catch {}
          window.removeEventListener("click", startOnInteract);
          window.removeEventListener("keydown", startOnInteract);
          window.removeEventListener("touchstart", startOnInteract);
        };
        window.addEventListener("click", startOnInteract);
        window.addEventListener("keydown", startOnInteract);
        window.addEventListener("touchstart", startOnInteract);
      }
    };
    tryPlay();
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    const next = !isMuted;
    audio.muted = next;
    setIsMuted(next);
    if (!hasStarted) {
      audio.play().then(() => setHasStarted(true)).catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/background-music.mp3" loop preload="auto" />
      <button
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute background music" : "Mute background music"}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary/90 text-primary-foreground shadow-lg hover:bg-primary transition-all hover:scale-110 backdrop-blur-sm border border-primary/20"
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>
    </>
  );
}
