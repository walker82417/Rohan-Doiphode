import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import aqua3 from "@/assets/aqua3.jpg";

const galleryImages = [
  { src: aqua3, alt: "Aquaculture Project", caption: "Aquaculture Project" },
  { src: "/placeholder.svg", alt: "Project 2", caption: "Loading Soon...." },
  { src: "/placeholder.svg", alt: "Project 3", caption: "Loading Soon...." },
  { src: "/placeholder.svg", alt: "Project 4", caption: "Loading Soon...." },
  { src: "/placeholder.svg", alt: "Project 5", caption: "Loading Soon...." },
  { src: "/placeholder.svg", alt: "Project 6", caption: "Loading Soon...." },
  { src: "/placeholder.svg", alt: "Project 7", caption: "Loading Soon...." },
  { src: "/placeholder.svg", alt: "Project 8", caption: "Loading Soon...." },
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((i) => (i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null));
  const next = () => setLightbox((i) => (i !== null ? (i + 1) % galleryImages.length : null));

  return (
    <section id="gallery" className="py-16 lg:py-20">
      <div className="container" ref={ref}>
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Gallery</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Project <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">A visual showcase of my projects, builds, and experiments.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className={`group relative aspect-square rounded-xl overflow-hidden border border-border/50 hover:border-primary/40 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-contain bg-muted/30 transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-sm font-mono text-primary">{img.caption}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md flex items-center justify-center p-4" onClick={closeLightbox}>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 md:left-8 p-2 rounded-full bg-muted/50 text-foreground hover:bg-muted transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="max-w-4xl max-h-[80vh] relative" onClick={(e) => e.stopPropagation()}>
            <img src={galleryImages[lightbox].src} alt={galleryImages[lightbox].alt} className="max-w-full max-h-[75vh] object-contain rounded-lg" />
            <p className="text-center mt-3 text-sm font-mono text-primary">{galleryImages[lightbox].caption}</p>
          </div>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 md:right-8 p-2 rounded-full bg-muted/50 text-foreground hover:bg-muted transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
          <button onClick={closeLightbox} className="absolute top-4 right-4 p-2 rounded-full bg-muted/50 text-foreground hover:bg-muted transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
    </section>
  );
}
