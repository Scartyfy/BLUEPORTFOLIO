import React, { useRef, useState, useEffect } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from 'motion/react';
import { Language } from '../types';
import { Maximize2, X, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { CONCEPT_CARS, ConceptCarData } from './carProjectData';

interface CarProjectTemplateProps {
  lang: Language;
  scrollContainerRef?: React.RefObject<HTMLDivElement | null>;
  onClose?: () => void;
}

const RevealTitle = ({ children }: { children: string }) => {
  return (
    <div className="overflow-hidden inline-block pr-2 pb-4 -mb-4">
      <motion.div
        initial={{ y: "110%", rotate: 5 }}
        whileInView={{ y: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="origin-top-left inline-block"
      >
        {children}
      </motion.div>
    </div>
  );
};

export const CarProjectTemplate: React.FC<CarProjectTemplateProps> = ({
  lang,
  scrollContainerRef,
  onClose,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCarId, setActiveCarId] = useState<string>('concept-1');
  const [showAll, setShowAll] = useState<boolean>(true);
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);
  const [lightboxList, setLightboxList] = useState<{ src: string; title: string }[]>([]);
  const [lightboxIdx, setLightboxIdx] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
    container: scrollContainerRef,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100,
  });

  const heroImageY = useTransform(smoothProgress, [0, 0.2], ["0%", "25%"]);
  const heroImageScale = useTransform(smoothProgress, [0, 0.2], [1, 1.08]);
  const heroTextY = useTransform(smoothProgress, [0, 0.2], ["0%", "40%"]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === 'Escape') {
        setLightbox(null);
      } else if (e.key === 'ArrowRight') {
        if (lightboxList.length > 0) {
          const next = (lightboxIdx + 1) % lightboxList.length;
          setLightboxIdx(next);
          setLightbox(lightboxList[next]);
        }
      } else if (e.key === 'ArrowLeft') {
        if (lightboxList.length > 0) {
          const prev = (lightboxIdx - 1 + lightboxList.length) % lightboxList.length;
          setLightboxIdx(prev);
          setLightbox(lightboxList[prev]);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox, lightboxIdx, lightboxList]);

  const openLightbox = (car: ConceptCarData, currentSrc: string) => {
    const items = [
      { src: car.poster.image, title: car.poster.title[lang] },
      { src: car.sketch.image, title: car.sketch.title[lang] },
      ...car.photos.map(p => ({ src: p.image, title: car.name }))
    ];
    setLightboxList(items);
    const found = items.findIndex(i => i.src === currentSrc);
    const idx = found >= 0 ? found : 0;
    setLightboxIdx(idx);
    setLightbox(items[idx]);
  };

  const displayedCars = showAll 
    ? CONCEPT_CARS 
    : CONCEPT_CARS.filter(c => c.id === activeCarId);

  const t = {
    fr: {
      projectBadge: "P/03 — Project",
      headerDesc: "Design Automobile & Concept Cars",
      title: "Concept Cars",
      subtitle: "Exploration stylistique, morphologique et recherche aérodynamique.",
      contextLabel: "Contexte",
      contextText: "Conception de deux concept cars indépendants : Lobster Car et Vortex Stratos. Une démarche épurée allant des premières esquisses manuelles de proportions jusqu'aux affiches et visuels photographiques finaux.",
      allConcepts: "Tous les concepts",
      posterTag: "Affiche & Manifeste de Style",
      sketchTag: "Recherche de Style & Esquisses",
      photosTag: "Visuels Photographiques",
      clickZoom: "Agrandir",
      back: "Retour",
      backToPortfolio: "Retour au portfolio"
    },
    en: {
      projectBadge: "P/03 — Project",
      headerDesc: "Automotive Design & Concept Cars",
      title: "Concept Cars",
      subtitle: "Stylistic, morphological exploration and aerodynamic sculpting.",
      contextLabel: "Context",
      contextText: "Design of two independent concept cars: Lobster Car and Vortex Stratos. A refined workflow spanning from initial proportion sketches to high-definition posters and photographic renders.",
      allConcepts: "All concepts",
      posterTag: "Styling Poster & Manifesto",
      sketchTag: "Styling Sketches & Ideation",
      photosTag: "Photographic Visuals",
      clickZoom: "Zoom",
      back: "Back",
      backToPortfolio: "Back to portfolio"
    }
  }[lang];

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#F5F5F3] text-[#002FA7] min-h-screen relative font-sans selection:bg-[#002FA7] selection:text-white"
    >
      {/* Global Noise Overlay */}
      <div 
        className="pointer-events-none fixed inset-0 z-[100] opacity-[0.04] mix-blend-darken" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />

      {/* Floating Back button */}
      {onClose && (
        <button
          onClick={onClose}
          className="fixed top-6 right-6 md:top-8 md:right-8 z-50 flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 hover:bg-white text-[#002FA7] border border-[#002FA7]/20 shadow-lg backdrop-blur-md text-xs font-mono tracking-widest uppercase transition-all hover:scale-105 active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.back}</span>
        </button>
      )}

      {/* ========================================================================= */}
      {/* 1. BRUTALIST HERO SECTION (IDENTIQUE AUX AUTRES PROJETS DU PORTFOLIO)    */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-screen pt-2 md:pt-4 pb-12 px-4 md:px-8 flex flex-col justify-between overflow-hidden">
        <div className="w-full relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative pointer-events-none pt-12 md:pt-16">
            
            {/* Number + Arrow */}
            <div className="md:col-span-3 flex flex-col gap-8 md:gap-20">
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight overflow-hidden pb-2 -mb-2">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.2,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="block font-display"
                >
                  {t.projectBadge}
                </motion.span>
              </h2>
              
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="hidden md:block w-20 h-20 origin-center"
              >
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path d="M10 10 L80 80" stroke="#002FA7" strokeWidth="6" />
                  <path
                    d="M85 30 L85 85 L30 85"
                    stroke="#002FA7"
                    strokeWidth="6"
                    fill="none"
                    strokeLinejoin="miter"
                  />
                </svg>
              </motion.div>
            </div>

            {/* Header Category Description */}
            <div className="md:col-span-5 mt-8 md:mt-0">
              <h3 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] font-medium tracking-tight font-display">
                {t.headerDesc
                  .split(" & ")
                  .map((line: string, i: number, arr: any[]) => (
                    <div key={i} className="overflow-hidden pb-1 -mb-1">
                      <motion.div
                        initial={{ y: "110%", clipPath: "inset(0 0 100% 0)" }}
                        animate={{ y: 0, clipPath: "inset(0 0 0% 0)" }}
                        transition={{
                          delay: 0.1 * i + 0.5,
                          duration: 1.2,
                          ease: [0.76, 0, 0.24, 1],
                        }}
                      >
                        {line}
                        {i < arr.length - 1 && <>&nbsp;&amp;</>}
                      </motion.div>
                    </div>
                  ))}
              </h3>
            </div>

            <div className="md:col-span-4 flex justify-start md:justify-end mt-4 md:mt-0" />
          </div>
        </div>

        {/* Massive Title */}
        <motion.div
          style={{ y: heroTextY }}
          className="w-full text-right mt-16 md:-mt-12 md:mb-4 relative z-20 mix-blend-difference text-white pointer-events-none"
        >
          <h1 className="text-[15vw] md:text-[13vw] font-display font-medium tracking-tighter leading-[0.8] uppercase whitespace-nowrap">
            {t.title.split(" ").map((word: string, i: number) => (
              <RevealTitle key={i}>{word}</RevealTitle>
            ))}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-[4vw] align-top ml-2 inline-block text-white mix-blend-normal"
            >
              ©
            </motion.span>
          </h1>
        </motion.div>

        {/* Bottom Content & Main Banner */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-16 md:mt-0 items-stretch flex-grow z-10 relative">
          
          {/* Left Metadata Column */}
          <div className="md:col-span-3 flex flex-col justify-start pt-4 md:pt-8 pb-0 md:pb-4 gap-8 md:gap-16 text-[#002FA7]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-base md:text-lg pr-4 md:pr-8 leading-relaxed font-bold">
                {t.subtitle}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h4 className="font-sans text-xs md:text-sm font-bold uppercase tracking-widest mb-2 md:mb-4">
                {t.contextLabel}
              </h4>
              <p className="text-base md:text-lg pr-4 md:pr-8 leading-relaxed max-w-sm font-bold">
                {t.contextText}
              </p>
            </motion.div>
          </div>

          {/* Large Hero Banner */}
          <div className="md:col-span-9 relative w-full h-full flex items-end">
            <motion.div
              initial={{
                clipPath: "inset(100% 0 0 0)",
              }}
              animate={{
                clipPath: "inset(0% 0 0 0)",
              }}
              transition={{
                delay: 0.2,
                duration: 1.4,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="w-full aspect-[4/3] md:aspect-[21/9] relative z-20 overflow-hidden shadow-2xl rounded-2xl md:rounded-3xl"
            >
              <div className="absolute inset-0 bg-[#002FA7]/10 z-10 pointer-events-none mix-blend-multiply" />
              <motion.img
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                style={{ y: heroImageY, scale: heroImageScale }}
                transition={{
                  delay: 0.2,
                  duration: 1.4,
                  ease: [0.76, 0, 0.24, 1],
                }}
                src="./top_header.png"
                onError={(e) => {
                  // Fallback to car 1 poster if top_header fails
                  (e.target as HTMLImageElement).src = './1.png';
                }}
                alt="Automotive Design"
                className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover contrast-[1.1] saturate-50 origin-center"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SÉLECTEUR ÉPURÉ DES 2 CONCEPT CARS (STICKY)                               */}
      {/* ========================================================================= */}
      <section className="sticky top-0 z-40 w-full bg-[#F5F5F3]/90 backdrop-blur-md border-y border-[#002FA7]/10 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#002FA7]/60">
              CONCEPTS //
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {CONCEPT_CARS.map((car, idx) => {
              const isActive = !showAll && activeCarId === car.id;
              return (
                <button
                  key={car.id}
                  onClick={() => {
                    setShowAll(false);
                    setActiveCarId(car.id);
                  }}
                  className={`px-4 md:px-6 py-2 rounded-full text-xs font-mono uppercase tracking-wider font-semibold transition-all ${
                    isActive
                      ? 'bg-[#002FA7] text-white shadow-md'
                      : 'bg-white text-[#002FA7] border border-[#002FA7]/20 hover:bg-[#002FA7]/5'
                  }`}
                >
                  0{idx + 1} — {car.name.split('—')[0].trim()}
                </button>
              );
            })}

            <button
              onClick={() => setShowAll(true)}
              className={`px-4 md:px-6 py-2 rounded-full text-xs font-mono uppercase tracking-wider font-semibold transition-all ${
                showAll
                  ? 'bg-[#002FA7] text-white shadow-md'
                  : 'bg-white text-[#002FA7] border border-[#002FA7]/20 hover:bg-[#002FA7]/5'
              }`}
            >
              {t.allConcepts}
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CONTENU PRINCIPAL : ÉPURÉ POUR CHACUN DES 2 CONCEPTS                      */}
      {/* ========================================================================= */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 space-y-36 md:space-y-48">
        {displayedCars.map((car, cIdx) => (
          <article key={car.id} className="relative">
            
            {/* Header épuré du Concept Car */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-12 md:mb-16 border-b border-[#002FA7]/20">
              <div>
                <span className="font-mono text-xs md:text-sm font-bold tracking-widest text-[#002FA7]/50 uppercase block mb-1">
                  CONCEPT 0{cIdx + 1}
                </span>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium uppercase tracking-tight text-[#002FA7]">
                  {car.name}
                </h2>
              </div>
              <span className="font-mono text-xs md:text-sm text-[#002FA7]/70 uppercase tracking-widest font-semibold">
                {car.tagline[lang]}
              </span>
            </div>

            {/* --------------------------------------------------------------------- */}
            {/* 1. GROSSE AFFICHE AVEC TEXTE DESCRIPTIF                               */}
            {/* --------------------------------------------------------------------- */}
            <section className="mb-24 md:mb-32">
              <div 
                onClick={() => openLightbox(car, car.poster.image)}
                className="w-full relative group cursor-zoom-in rounded-2xl md:rounded-3xl overflow-hidden bg-white shadow-[0_25px_60px_rgba(0,47,167,0.12)] border border-[#002FA7]/15 p-2 sm:p-4 md:p-6 transition-all duration-500 hover:border-[#002FA7]/40"
              >
                <div className="relative w-full rounded-xl md:rounded-2xl overflow-hidden bg-black/5 flex items-center justify-center min-h-[280px] sm:min-h-[460px] md:min-h-[580px]">
                  <img
                    src={car.poster.image}
                    alt={car.name}
                    className="w-full h-auto max-h-[82vh] object-contain rounded-xl transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-[1.01]"
                    loading="eager"
                  />
                  
                  {/* Badge Zoom épuré */}
                  <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 px-4 py-2 rounded-full bg-white/95 text-[#002FA7] text-xs font-mono uppercase tracking-wider shadow-lg backdrop-blur-md opacity-90 group-hover:opacity-100 transition-all flex items-center gap-2">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>{t.clickZoom}</span>
                  </div>
                </div>
              </div>

              {/* Texte descriptif sous l'affiche */}
              <div className="max-w-4xl mt-8 md:mt-10">
                <p className="text-xl md:text-2xl font-light text-[#002FA7]/90 leading-relaxed">
                  {car.poster.description[lang]}
                </p>
              </div>
            </section>

            {/* --------------------------------------------------------------------- */}
            {/* 2. PHOTO AVEC DES SKETCH ET UN TEXTE A COTE                           */}
            {/* --------------------------------------------------------------------- */}
            <section className="mb-24 md:mb-32 pt-12 border-t border-[#002FA7]/15">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                
                {/* Photo avec des sketch */}
                <div className="lg:col-span-7">
                  <div
                    onClick={() => openLightbox(car, car.sketch.image)}
                    className="w-full relative group cursor-zoom-in rounded-2xl md:rounded-3xl overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,47,167,0.08)] border border-[#002FA7]/15 p-2 sm:p-4 transition-all duration-500 hover:border-[#002FA7]/40"
                  >
                    <div className="relative w-full aspect-[16/10] overflow-hidden flex items-center justify-center bg-black/5 rounded-xl md:rounded-2xl">
                      <img
                        src={car.sketch.image}
                        alt="Styling Sketches"
                        className="w-full h-full object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
                        loading="eager"
                      />
                      
                      {/* Zoom Indicator */}
                      <div className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-white/95 text-[#002FA7] text-xs font-mono uppercase tracking-wider shadow-lg backdrop-blur-md opacity-90 group-hover:opacity-100 transition-all flex items-center gap-2">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>{t.clickZoom}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Texte à côté */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#002FA7]/60 block mb-2 font-bold">
                    {t.sketchTag}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-medium uppercase text-[#002FA7] mb-4 tracking-tight">
                    {car.sketch.title[lang]}
                  </h3>
                  <p className="text-lg md:text-xl font-light text-[#002FA7]/85 leading-relaxed">
                    {car.sketch.text[lang]}
                  </p>
                </div>
              </div>
            </section>

            {/* --------------------------------------------------------------------- */}
            {/* 3. UNIQUEMENT DES VISUELS PHOTOS (3) SANS TEXTE SUPERFLU             */}
            {/* --------------------------------------------------------------------- */}
            <section className="pt-12 border-t border-[#002FA7]/15">
              {/* Grille épurée de 3 photos : aucun texte superflu */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {car.photos.slice(0, 3).map((photo, pIdx) => (
                  <div
                    key={photo.id}
                    onClick={() => openLightbox(car, photo.image)}
                    className="w-full relative group cursor-zoom-in rounded-2xl md:rounded-3xl overflow-hidden bg-white shadow-[0_15px_45px_rgba(0,47,167,0.08)] border border-[#002FA7]/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,47,167,0.18)] hover:border-[#002FA7]/40"
                  >
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-black/5 flex items-center justify-center min-h-[240px]">
                      <img
                        src={photo.image}
                        alt={`Visual 0${pIdx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-[#002FA7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      
                      {/* Zoom Indicator */}
                      <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-white/95 text-[#002FA7] text-[11px] font-mono uppercase tracking-wider shadow-md backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
                        <Maximize2 className="w-3 h-3" />
                        <span>{t.clickZoom}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </article>
        ))}
      </main>

      {/* ========================================================================= */}
      {/* LIGHTBOX PLEIN ÉCRAN POUR INSPECTER LES VISUELS EN HAUTE RÉSOLUTION      */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 md:p-8"
            onClick={() => setLightbox(null)}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between w-full" onClick={(e) => e.stopPropagation()}>
              <span className="text-xs font-mono text-white/60 tracking-widest uppercase">
                {lightboxIdx + 1} / {lightboxList.length}
              </span>
              <button
                onClick={() => setLightbox(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95"
                title="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image */}
            <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={lightbox.src}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                src={lightbox.src}
                alt={lightbox.title}
                className="max-h-[84vh] max-w-[94vw] object-contain rounded-xl select-none shadow-2xl"
              />

              {lightboxList.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const prev = (lightboxIdx - 1 + lightboxList.length) % lightboxList.length;
                      setLightboxIdx(prev);
                      setLightbox(lightboxList[prev]);
                    }}
                    className="absolute left-2 md:left-6 w-12 h-12 rounded-full bg-black/40 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all backdrop-blur-sm"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const next = (lightboxIdx + 1) % lightboxList.length;
                      setLightboxIdx(next);
                      setLightbox(lightboxList[next]);
                    }}
                    className="absolute right-2 md:right-6 w-12 h-12 rounded-full bg-black/40 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all backdrop-blur-sm"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Bottom Caption */}
            <div className="w-full text-center" onClick={(e) => e.stopPropagation()}>
              <p className="text-[11px] font-mono text-white/40 tracking-wider">
                Utilisez ← et → pour naviguer · Échap pour fermer
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* PIED DE PAGE AVEC RETOUR AU PORTFOLIO                                     */}
      {/* ========================================================================= */}
      <footer className="w-full py-20 border-t border-[#002FA7]/10 flex justify-center bg-[#F5F5F3]">
        {onClose && (
          <button
            onClick={onClose}
            className="px-8 py-4 rounded-full bg-[#002FA7] text-white hover:bg-[#002FA7]/90 text-xs font-mono uppercase tracking-widest transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center gap-3"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.backToPortfolio}</span>
          </button>
        )}
      </footer>
    </div>
  );
};
