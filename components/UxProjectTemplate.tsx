import React, { useRef, useState, useEffect } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from 'motion/react';
import { Language } from '../types';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { UX_PROJECT_DATA } from './uxProjectData';

interface UxProjectTemplateProps {
  lang: Language;
  scrollContainerRef?: React.RefObject<HTMLDivElement | null>;
  onClose?: () => void;
}

export const UxProjectTemplate: React.FC<UxProjectTemplateProps> = ({
  lang,
  scrollContainerRef,
  onClose,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const data = UX_PROJECT_DATA;

  const [lightboxImage, setLightboxImage] = useState<{ src: string; caption?: string } | null>(null);
  const [lightboxIdx, setLightboxIdx] = useState<number>(0);
  const [allImages, setAllImages] = useState<Array<{ src: string; caption?: string }>>([]);

  // Collect all images across sections for seamless lightbox browsing
  useEffect(() => {
    const list: Array<{ src: string; caption?: string }> = [];
    data.fieldResearch.slides.forEach((s) => list.push({ src: s.image, caption: s.caption?.[lang] }));
    data.userJourney.images.forEach((s) => list.push({ src: s.image, caption: s.caption?.[lang] }));
    data.inspirations.images.forEach((s) => list.push({ src: s.image, caption: s.caption?.[lang] }));
    list.push({ src: data.appPrototype.arborescence.image, caption: data.appPrototype.arborescence.title[lang] });
    data.appPrototype.sketches.images.forEach((s) => list.push({ src: s.image, caption: s.caption?.[lang] }));
    data.appPrototype.mockups.images.forEach((s) => list.push({ src: s.image, caption: s.caption?.[lang] }));
    data.appPrototype.usageScenario.steps.forEach((s) => list.push({ src: s.image, caption: `${s.stepNumber}. ${s.title[lang]}` }));
    setAllImages(list);
  }, [lang]);

  const openLightbox = (src: string, caption?: string) => {
    const idx = allImages.findIndex((img) => img.src === src);
    setLightboxIdx(idx >= 0 ? idx : 0);
    setLightboxImage({ src, caption });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextLightbox = () => {
    if (!allImages.length) return;
    const next = (lightboxIdx + 1) % allImages.length;
    setLightboxIdx(next);
    setLightboxImage(allImages[next]);
  };

  const prevLightbox = () => {
    if (!allImages.length) return;
    const prev = (lightboxIdx - 1 + allImages.length) % allImages.length;
    setLightboxIdx(prev);
    setLightboxImage(allImages[prev]);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightboxImage) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxImage, lightboxIdx, allImages]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
    container: scrollContainerRef,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100,
  });

  const heroImageY = useTransform(smoothProgress, [0, 0.2], ['0%', '20%']);
  const heroImageScale = useTransform(smoothProgress, [0, 0.2], [1, 1.08]);
  const heroTextY = useTransform(smoothProgress, [0, 0.2], ['0%', '35%']);

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#F5F5F3] text-[#002FA7] min-h-screen relative font-sans selection:bg-[#002FA7] selection:text-white overflow-x-hidden"
    >
      {/* Global Noise Overlay (same as other projects) */}
      <div
        className="pointer-events-none fixed inset-0 z-[100] opacity-[0.04] mix-blend-darken"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />

      {/* Floating Close Button */}
      {onClose && (
        <button
          onClick={onClose}
          className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-[#002FA7] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
          aria-label="Close"
        >
          <X size={20} />
        </button>
      )}

      {/* =========================================================================
          HERO SECTION — EXACT SAME DA & BRUTALIST GRID AS OTHER PROJECTS
      ========================================================================= */}
      <section className="relative w-full min-h-screen pt-4 pb-12 px-4 md:px-8 flex flex-col justify-between overflow-hidden">
        <div className="w-full relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative pointer-events-none pt-12 md:pt-16">
            <div className="md:col-span-3 flex flex-col gap-8 md:gap-16">
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
                P/04 — Project
              </h2>
              {/* Architectural Arrow */}
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.3,
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

            <div className="md:col-span-6 mt-4 md:mt-0">
              <h3 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] font-medium tracking-tight">
                {data.header.headerDesc[lang]}
              </h3>
            </div>
          </div>
        </div>

        {/* Massive Title */}
        <motion.div
          style={{ y: heroTextY }}
          className="w-full text-right mt-8 sm:mt-12 md:-mt-12 md:mb-4 relative z-20 mix-blend-difference text-white pointer-events-none"
        >
          <h1 className="text-4xl sm:text-6xl md:text-[11vw] lg:text-[12vw] font-display font-medium tracking-tighter leading-[0.85] md:leading-[0.8] uppercase break-normal md:whitespace-nowrap">
            {data.header.title[lang]}
            <span className="text-2xl sm:text-3xl md:text-[4vw] align-top ml-2 inline-block text-white mix-blend-normal">
              ©
            </span>
          </h1>
        </motion.div>

        {/* Bottom Content & Main Hero Image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-16 md:mt-0 items-stretch flex-grow z-10 relative">
          <div className="md:col-span-4 flex flex-col justify-start pt-4 md:pt-8 pb-0 md:pb-4 gap-6 text-[#002FA7]">
            <h4 className="font-sans text-xs md:text-sm font-bold uppercase tracking-widest text-[#002FA7]/70">
              {data.header.subtitle[lang]}
            </h4>
            <p className="text-base md:text-lg pr-2 md:pr-6 leading-relaxed font-medium whitespace-pre-wrap text-[#002FA7]/90">
              {data.header.intro[lang]}
            </p>
          </div>

          <div className="md:col-span-8 relative w-full h-full flex items-end">
            <div className="w-full aspect-[4/3] md:aspect-[21/9] relative z-20 overflow-hidden shadow-2xl rounded-2xl md:rounded-3xl bg-neutral-200">
              <div className="absolute inset-0 bg-[#002FA7]/10 z-10 pointer-events-none mix-blend-multiply" />
              <motion.img
                style={{ y: heroImageY, scale: heroImageScale }}
                src={data.header.heroImage}
                alt="Projet Maquette App UI"
                className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover contrast-[1.05] saturate-50 origin-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 01 : ANALYSE TERRAIN & ENTRETIENS IN SITU
      ========================================================================= */}
      <section className="relative w-full py-20 md:py-32 px-4 md:px-8 border-t border-[#002FA7]/15">
        <div className="max-w-[1500px] mx-auto flex flex-col gap-16 md:gap-24">
          
          {/* Section Header */}
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs md:text-sm uppercase tracking-widest font-bold text-[#002FA7]/60">
              01 / ANALYSE TERRAIN
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-medium uppercase tracking-tight">
              {data.fieldResearch.title[lang]}
            </h2>
            <p className="text-lg md:text-xl text-[#002FA7]/80 max-w-3xl font-normal mt-2">
              {data.fieldResearch.subtitle[lang]}
            </p>
          </div>

          {/* Key Facts & Museum Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {data.fieldResearch.museums.map((m, idx) => (
              <div
                key={m.name}
                className="p-8 md:p-10 rounded-2xl md:rounded-3xl bg-white border border-[#002FA7]/15 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#002FA7]/60">
                      Site 0{idx + 1} — {m.location}
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#002FA7]">
                      {m.sample[lang]}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-medium mb-3">
                    {m.name}
                  </h3>
                  <p className="text-base text-[#002FA7]/80 leading-relaxed font-normal">
                    {m.details[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Methodology Info Box */}
          <div className="p-8 md:p-10 rounded-2xl md:rounded-3xl bg-white border border-[#002FA7]/15 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between shadow-sm">
            <div className="max-w-2xl flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#002FA7]/60">
                {lang === 'fr' ? 'Méthodologie & Démarche' : 'Methodology & Approach'}
              </span>
              <p className="text-base md:text-lg text-[#002FA7] leading-relaxed font-normal">
                {data.fieldResearch.stats.methodology[lang]}
              </p>
              <p className="text-sm text-[#002FA7]/70 font-light mt-1">
                {data.fieldResearch.stats.collectionFormat[lang]}
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end shrink-0 border-t md:border-t-0 md:border-l border-[#002FA7]/15 pt-4 md:pt-0 md:pl-8">
              <span className="text-4xl md:text-5xl font-display font-bold text-[#002FA7]">
                {data.fieldResearch.stats.totalParticipants}
              </span>
              <span className="text-xs uppercase font-mono tracking-wider text-[#002FA7]/60">
                {lang === 'fr' ? 'Participants In Situ' : 'Participants In Situ'}
              </span>
            </div>
          </div>

          {/* Slides Statistiques (Placeholders pour les planches du user) */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#002FA7]/15 pb-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#002FA7]/60 block mb-1">
                  Recherche Documentaire
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-medium uppercase">
                  {lang === 'fr' ? 'Slides & Synthèse Statistique' : 'Research Slides & Stats'}
                </h3>
              </div>
              <span className="font-mono text-xs text-[#002FA7]/60">
                {lang === 'fr' ? 'Cliquer pour agrandir' : 'Click to enlarge'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.fieldResearch.slides.map((slide, idx) => (
                <div
                  key={slide.id}
                  onClick={() => openLightbox(slide.image, slide.caption?.[lang])}
                  className="group rounded-2xl overflow-hidden bg-white border border-[#002FA7]/15 shadow-sm hover:shadow-xl transition-all cursor-zoom-in"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-neutral-200 relative">
                    <img
                      src={slide.image}
                      alt={slide.caption?.[lang] || `Slide ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm p-1.5 rounded-lg text-[#002FA7] opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 size={14} />
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-mono text-[#002FA7]/80 line-clamp-1">
                      {slide.caption?.[lang]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profils de Visiteurs */}
          <div className="flex flex-col gap-6">
            <div className="border-b border-[#002FA7]/15 pb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#002FA7]/60 block mb-1">
                Typologie
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-medium uppercase">
                {lang === 'fr' ? 'Les 4 Profils Identifiés' : 'The 4 Identified Profiles'}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.fieldResearch.profiles.map((p, idx) => (
                <div
                  key={p.id}
                  className="p-6 md:p-8 rounded-2xl bg-white border border-[#002FA7]/15 flex flex-col justify-between shadow-sm hover:border-[#002FA7] transition-colors"
                >
                  <div>
                    <span className="font-mono text-xs font-bold text-[#002FA7]/60 block mb-4">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#002FA7] font-semibold block mb-2">
                      {p.tag[lang]}
                    </span>
                    <h4 className="text-xl font-display font-medium mb-3">
                      {p.name[lang]}
                    </h4>
                    <p className="text-sm text-[#002FA7]/80 leading-relaxed font-normal">
                      {p.desc[lang]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Questions Clés & Verbatims */}
          <div className="flex flex-col gap-8">
            <div className="border-b border-[#002FA7]/15 pb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#002FA7]/60 block mb-1">
                Paroles Recueillies
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-medium uppercase">
                {lang === 'fr' ? 'Questions Clés & Verbatims In Situ' : 'Key Questions & On-Site Verbatims'}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.fieldResearch.questions.map((qItem, qIdx) => (
                <div
                  key={qIdx}
                  className="p-8 rounded-3xl bg-white border border-[#002FA7]/15 flex flex-col gap-6 shadow-sm"
                >
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#002FA7]/60 block mb-1">
                      Question 0{qIdx + 1}
                    </span>
                    <h4 className="text-2xl font-display font-medium leading-snug">
                      « {qItem.question[lang]} »
                    </h4>
                    {qItem.subtext && (
                      <p className="text-xs font-mono text-[#002FA7]/60 mt-1">
                        {qItem.subtext[lang]}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-4">
                    {qItem.verbatims.map((vb) => (
                      <div
                        key={vb.id}
                        className="p-5 rounded-xl bg-[#F5F5F3] border border-[#002FA7]/10 flex flex-col gap-2"
                      >
                        <p className="text-base text-[#002FA7] italic font-serif leading-relaxed">
                          {vb.quote[lang]}
                        </p>
                        {vb.author && (
                          <span className="text-xs font-mono text-[#002FA7]/60 text-right">
                            — {vb.author[lang]}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 02 : USER JOURNEY
      ========================================================================= */}
      <section className="relative w-full py-20 md:py-32 px-4 md:px-8 border-t border-[#002FA7]/15 bg-[#002FA7] text-white">
        <div className="max-w-[1500px] mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs md:text-sm uppercase tracking-widest font-bold text-white/60">
              02 / PARCOURS VISITEUR
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-medium uppercase tracking-tight">
              {data.userJourney.title[lang]}
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl font-light mt-2">
              {data.userJourney.intro[lang]}
            </p>
          </div>

          {/* 3 Images de substitution pour User Journey */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {data.userJourney.images.map((ujItem, idx) => (
              <div
                key={ujItem.id}
                onClick={() => openLightbox(ujItem.image, ujItem.caption?.[lang])}
                className="group rounded-2xl md:rounded-3xl overflow-hidden bg-white/10 border border-white/20 shadow-lg cursor-zoom-in transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden bg-white/5 relative">
                  <img
                    src={ujItem.image}
                    alt={ujItem.caption?.[lang] || `User Journey 0${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm p-1.5 rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={14} />
                  </div>
                </div>
                <div className="p-4 bg-black/20">
                  <span className="font-mono text-xs text-white/80 line-clamp-1">
                    {ujItem.caption?.[lang]}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 03 : INSPIRATIONS
      ========================================================================= */}
      <section className="relative w-full py-20 md:py-32 px-4 md:px-8 border-t border-[#002FA7]/15">
        <div className="max-w-[1500px] mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs md:text-sm uppercase tracking-widest font-bold text-[#002FA7]/60">
              03 / MOODBOARD & BENCHMARK
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-medium uppercase tracking-tight">
              {data.inspirations.title[lang]}
            </h2>
            <p className="text-lg md:text-xl text-[#002FA7]/80 max-w-3xl font-normal mt-2">
              {data.inspirations.intro[lang]}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.inspirations.images.map((inspItem, idx) => (
              <div
                key={inspItem.id}
                onClick={() => openLightbox(inspItem.image, inspItem.caption?.[lang])}
                className="group rounded-2xl overflow-hidden bg-white border border-[#002FA7]/15 shadow-sm hover:shadow-xl transition-all cursor-zoom-in"
              >
                <div className="aspect-[4/3] overflow-hidden bg-neutral-200 relative">
                  <img
                    src={inspItem.image}
                    alt={inspItem.caption?.[lang] || `Inspiration 0${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm p-1.5 rounded-lg text-[#002FA7] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={14} />
                  </div>
                </div>
                <div className="p-4">
                  <span className="font-mono text-xs text-[#002FA7]/80 line-clamp-1">
                    {inspItem.caption?.[lang]}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 04 : LA MAQUETTE DE NOTRE APPLICATION
      ========================================================================= */}
      <section className="relative w-full py-20 md:py-32 px-4 md:px-8 border-t border-[#002FA7]/15">
        <div className="max-w-[1500px] mx-auto flex flex-col gap-20 md:gap-28">
          
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs md:text-sm uppercase tracking-widest font-bold text-[#002FA7]/60">
              04 / PROTOTYPE & RENDUS
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-medium uppercase tracking-tight">
              {data.appPrototype.title[lang]}
            </h2>
            <p className="text-lg md:text-xl text-[#002FA7]/80 max-w-3xl font-normal mt-2">
              {data.appPrototype.subtitle[lang]}
            </p>
          </div>

          {/* 4.1 ARBORESCENCE */}
          <div className="p-8 md:p-12 rounded-3xl bg-white border border-[#002FA7]/15 flex flex-col gap-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#002FA7]/60 block mb-1">
                  Architecture de l'Information
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-medium">
                  {data.appPrototype.arborescence.title[lang]}
                </h3>
                <p className="text-[#002FA7]/80 text-base mt-2 max-w-2xl font-normal">
                  {data.appPrototype.arborescence.desc[lang]}
                </p>
              </div>
              <span className="text-xs font-mono text-[#002FA7]/60">
                {lang === 'fr' ? 'Cliquer pour examiner' : 'Click to inspect'}
              </span>
            </div>

            <div
              onClick={() => openLightbox(data.appPrototype.arborescence.image, data.appPrototype.arborescence.title[lang])}
              className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden bg-neutral-200 border border-[#002FA7]/15 cursor-zoom-in group shadow-md"
            >
              <img
                src={data.appPrototype.arborescence.image}
                alt="Arborescence Application"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-mono text-[#002FA7] shadow">
                Zoom
              </div>
            </div>
          </div>

          {/* 4.2 PLANCHES DE SKETCH */}
          <div className="flex flex-col gap-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#002FA7]/60 block mb-1">
                Idéation Papier
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-medium">
                {data.appPrototype.sketches.title[lang]}
              </h3>
              <p className="text-[#002FA7]/80 text-base mt-2 max-w-2xl font-normal">
                {data.appPrototype.sketches.desc[lang]}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {data.appPrototype.sketches.images.map((skItem, idx) => (
                <div
                  key={skItem.id}
                  onClick={() => openLightbox(skItem.image, skItem.caption?.[lang])}
                  className="group rounded-2xl md:rounded-3xl overflow-hidden bg-white border border-[#002FA7]/15 shadow-sm hover:shadow-xl transition-all cursor-zoom-in"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-neutral-200 relative">
                    <img
                      src={skItem.image}
                      alt={skItem.caption?.[lang] || `Sketch 0${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm p-1.5 rounded-lg text-[#002FA7] opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 size={14} />
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="font-mono text-xs text-[#002FA7]/80 line-clamp-1">
                      {skItem.caption?.[lang]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4.3 DEUX RENDUS DE MISE EN SITUATION */}
          <div className="flex flex-col gap-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#002FA7]/60 block mb-1">
                Mise en Situation Réelle
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-medium">
                {data.appPrototype.mockups.title[lang]}
              </h3>
              <p className="text-[#002FA7]/80 text-base mt-2 max-w-2xl font-normal">
                {data.appPrototype.mockups.desc[lang]}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {data.appPrototype.mockups.images.map((mkItem, idx) => (
                <div
                  key={mkItem.id}
                  onClick={() => openLightbox(mkItem.image, mkItem.caption?.[lang])}
                  className="group rounded-2xl md:rounded-3xl overflow-hidden bg-white border border-[#002FA7]/15 shadow-sm hover:shadow-xl transition-all cursor-zoom-in"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-neutral-200 relative">
                    <img
                      src={mkItem.image}
                      alt={mkItem.caption?.[lang] || `Rendu 0${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm p-1.5 rounded-lg text-[#002FA7] opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 size={14} />
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="font-mono text-xs text-[#002FA7]/80 line-clamp-1">
                      {mkItem.caption?.[lang]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4.4 TEST UTILISATEUR */}
          <div className="p-8 md:p-12 rounded-3xl bg-white border border-[#002FA7]/15 flex flex-col gap-8 shadow-sm">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#002FA7]/60 block mb-1">
                Évaluation & Enseignements
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-medium">
                {data.appPrototype.userTesting.title[lang]}
              </h3>
              <p className="text-[#002FA7]/80 text-base mt-2 max-w-3xl font-normal">
                {data.appPrototype.userTesting.desc[lang]}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.appPrototype.userTesting.takeaways.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#F5F5F3] border border-[#002FA7]/10 flex flex-col justify-between"
                >
                  <span className="font-mono text-xs font-bold text-[#002FA7]/60 mb-3">
                    0{idx + 1}
                  </span>
                  <p className="text-sm md:text-base text-[#002FA7] leading-relaxed font-normal">
                    {item[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 4.5 SCÉNARIO D'USAGE ILLUSTRÉ */}
          <div className="flex flex-col gap-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#002FA7]/60 block mb-1">
                Parcours Illustré
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-medium">
                {data.appPrototype.usageScenario.title[lang]}
              </h3>
              <p className="text-[#002FA7]/80 text-base mt-2 max-w-2xl font-normal">
                {data.appPrototype.usageScenario.desc[lang]}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.appPrototype.usageScenario.steps.map((st) => (
                <div
                  key={st.stepNumber}
                  onClick={() => openLightbox(st.image, `${st.stepNumber}. ${st.title[lang]}`)}
                  className="group rounded-2xl overflow-hidden bg-white border border-[#002FA7]/15 flex flex-col justify-between shadow-sm cursor-zoom-in hover:shadow-xl transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-neutral-200 relative">
                    <img
                      src={st.image}
                      alt={st.title[lang]}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-[#002FA7] text-white font-mono text-xs px-2.5 py-1 rounded-md font-bold">
                      {st.stepNumber}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col gap-2">
                    <h4 className="font-display font-medium text-lg leading-snug">
                      {st.title[lang]}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#002FA7]/75 font-normal leading-relaxed">
                      {st.desc[lang]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 md:p-8 select-none"
            onClick={closeLightbox}
          >
            {/* Top Bar */}
            <div
              className="w-full flex items-center justify-between text-white z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="font-mono text-xs sm:text-sm uppercase tracking-wider text-white/70">
                <span className="text-white font-bold">{lightboxIdx + 1}</span> / {allImages.length}
                {lightboxImage.caption && ` — ${lightboxImage.caption}`}
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 flex items-center justify-center text-white transition-all cursor-pointer"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Center Image with Prev / Next */}
            <div
              className="relative flex-1 flex items-center justify-center my-2 max-h-[82vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {allImages.length > 1 && (
                <button
                  type="button"
                  onClick={prevLightbox}
                  className="absolute left-2 sm:left-4 z-30 w-11 h-11 rounded-full bg-black/50 hover:bg-white hover:text-black border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer active:scale-90"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
              )}

              <AnimatePresence mode="wait">
                <motion.img
                  key={lightboxImage.src}
                  src={lightboxImage.src}
                  alt={lightboxImage.caption || 'Preview'}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="max-w-[92vw] max-h-[78vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                />
              </AnimatePresence>

              {allImages.length > 1 && (
                <button
                  type="button"
                  onClick={nextLightbox}
                  className="absolute right-2 sm:right-4 z-30 w-11 h-11 rounded-full bg-black/50 hover:bg-white hover:text-black border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer active:scale-90"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              )}
            </div>

            {/* Bottom Caption */}
            <div
              className="w-full text-center text-white z-20 flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {lightboxImage.caption && (
                <p className="text-xs sm:text-sm text-white/80 font-light max-w-xl">
                  {lightboxImage.caption}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full h-[6vh] bg-[#F5F5F3]" />
    </div>
  );
};
