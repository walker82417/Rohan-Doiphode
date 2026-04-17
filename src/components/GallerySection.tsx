import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import aqua1 from "@/assets/aqua1.jpg";
import aqua2 from "@/assets/aqua2.jpg";
import aqua3 from "@/assets/aqua3.jpg";
import aquaculture from "@/assets/aquaculture.jpg";

type GalleryItem =
  | { type: "image"; src: string; alt: string; caption: string }
  | { type: "soon"; caption: string };

const galleryImages: GalleryItem[] = [
  { type: "image", src: aquaculture, alt: "Aquaculture Team Presentation", caption: "Aquaculture — Team Showcase" },
  { type: "image", src: aqua1, alt: "Aquaculture Hardware Setup", caption: "IoT Hardware Setup" },
  { type: "image", src: aqua2, alt: "Project Discussion", caption: "Project Discussion" },
  { type: "image", src: aqua3, alt: "Aquaculture Project", caption: "Aquaculture Project" },
  { type: "soon", caption: "Coming Soon...." },
  { type: "soon", caption: "Coming Soon...." },
  { type: "soon", caption: "Coming Soon...." },
  { type: "soon", caption: "Coming Soon...." },
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const imageItems = galleryImages.filter((g): g is Extract<GalleryItem, { type: "image" }> => g.type === "image");

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((i) => (i !== null ? (i - 1 + imageItems.length) % imageItems.length : null));
  const next = () => setLightbox((i) => (i !== null ? (i + 1) % imageItems.length : null));

  let imageIdx = -1;

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

        {/* Masonry layout — preserves each image's natural aspect ratio (Google Photos style) */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 [column-fill:_balance]">
          {galleryImages.map((item, i) => {
            if (item.type === "image") {
              imageIdx += 1;
              const idx = imageIdx;
              return (
                <button
                  key={i}
                  onClick={() => openLightbox(idx)}
                  className={`group relative mb-3 md:mb-4 block w-full break-inside-avoid rounded-xl overflow-hidden border border-border/50 hover:border-primary/40 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-sm font-mono text-primary">{item.caption}</span>
                  </div>
                </button>
              );
            }
            return (
              <div
                key={i}
                className={`mb-3 md:mb-4 break-inside-avoid rounded-xl border border-dashed border-border/60 bg-muted/20 aspect-square flex items-center justify-center transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="text-sm font-mono text-muted-foreground">{item.caption}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md flex items-center justify-center p-4" onClick={closeLightbox}>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 md:left-8 p-2 rounded-full bg-muted/50 text-foreground hover:bg-muted transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="max-w-4xl max-h-[80vh] relative" onClick={(e) => e.stopPropagation()}>
            <img src={imageItems[lightbox].src} alt={imageItems[lightbox].alt} className="max-w-full max-h-[75vh] object-contain rounded-lg" />
            <p className="text-center mt-3 text-sm font-mono text-primary">{imageItems[lightbox].caption}</p>
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
