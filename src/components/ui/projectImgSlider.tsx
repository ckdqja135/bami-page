import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = { src: string; alt?: string; caption?: string; type?: "image" | "video" };
const isVideo = (src: string, type?: "image" | "video") =>
  type === "video" || /\.(mp4|webm|ogg)(\?.*)?$/i.test(src);

export function ProjectImageSlider({
  images,
  auto = false,
  delay = 4000,
}: {
  images: Slide[];
  auto?: boolean;
  delay?: number;
}) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const startX = useRef(0);
  const deltaX = useRef(0);
  const isDragging = useRef(false);

  const clamp = (n: number) => Math.max(0, Math.min(n, images.length - 1));
  const prev = useCallback(() => setIndex((i) => clamp(i - 1)), [images.length]);
  const next = useCallback(() => setIndex((i) => clamp(i + 1)), [images.length]);

  // 키보드 네비
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  // 자동재생
  useEffect(() => {
    if (!auto || images.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), delay);
    return () => clearInterval(id);
  }, [auto, delay, images.length]);

  // 드래그/스와이프
  const onPointerDown = (e: React.PointerEvent) => {
    const tag = (e.target as HTMLElement)?.tagName;
    if (tag === "VIDEO" || tag === "BUTTON") return;
    isDragging.current = true;
    startX.current = e.clientX;
    deltaX.current = 0;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    deltaX.current = e.clientX - startX.current;
    trackRef.current.style.transition = "none";
    trackRef.current.style.transform = `translateX(calc(${-index * 100}% + ${deltaX.current}px))`;
  };
  const onPointerUp = () => {
    if (!trackRef.current) return;
    isDragging.current = false;
    trackRef.current.style.transition = "transform 300ms ease";
    const threshold = 60;
    if (deltaX.current > threshold) prev();
    else if (deltaX.current < -threshold) next();
    else trackRef.current.style.transform = `translateX(${-index * 100}%)`;
    deltaX.current = 0;
  };

  useEffect(() => {
    if (!trackRef.current) return;
    trackRef.current.style.transition = "transform 300ms ease";
    trackRef.current.style.transform = `translateX(${-index * 100}%)`;
  }, [index]);

  return (
    <div
      className="relative z-0 w-full overflow-hidden rounded-lg mb-6 select-none"
      role="region"
      aria-roledescription="carousel"
      aria-label="project media"
    >
      <div
        ref={trackRef}
        className="flex w-full transition-transform duration-300 ease-in-out"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {images.map((img, i) => {
          const video = isVideo(img.src, img.type);
          return (
            <div
              key={i}
              className="relative w-full flex-shrink-0"
            >
              {/* 미디어 래퍼: 중앙정렬 + 유동높이 */}
              <div className="flex items-center justify-center bg-black/70 rounded-lg">
                {video ? (
                  <video
                    src={img.src}
                    className="block max-w-full max-h-[70vh] w-auto h-auto rounded-lg"
                    controls
                    playsInline
                    // autoPlay muted loop  // 원하면 활성화
                  />
                ) : (
                  <img
                    src={img.src}
                    alt={img.alt ?? `slide ${i + 1}`}
                    className="block max-w-full max-h-[70vh] w-auto h-auto rounded-lg"
                    draggable={false}
                  />
                )}
              </div>

              {(img.caption || img.alt) && (
                <>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-black/80 via-black/55 to-transparent rounded-b-lg" />
                  <div className="absolute inset-x-0 bottom-0 z-10 p-4 md:p-5 text-white">
                    <p className="text-sm md:text-base leading-snug drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                      {img.caption ?? img.alt}
                    </p>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="previous media"
            className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 
                       z-30 grid place-items-center w-10 h-10 rounded-full
                       bg-black/50 hover:bg-black/70 text-white transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            aria-label="next media"
            className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 
                       z-30 grid place-items-center w-10 h-10 rounded-full
                       bg-black/50 hover:bg-black/70 text-white transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-2 inset-x-0 flex justify-center gap-2">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full ${i === index ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
