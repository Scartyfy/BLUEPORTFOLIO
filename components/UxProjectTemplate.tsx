import React, { useRef, useState, useEffect } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from 'motion/react';
import { Language } from '../types';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Users,
  Clock,
  ShieldCheck,
  MapPin,
  Camera,
  MessageSquareQuote,
  Eye,
  Bookmark,
  GraduationCap,
  Heart,
  Compass,
  ArrowUpRight,
  Layers,
  Sparkles,
  CheckCircle2,
  FileText,
  Smartphone,
  Info
} from 'lucide-react';
import { UX_PROJECT_DATA, GalleryPhoto } from './uxProjectData';

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

  // Collect all images across sections for smooth lightbox navigation
  useEffect(() => {
    const list: Array<{ src: string; caption?: string }> = [];
    // slides
    data.fieldResearch.slides.forEach(s => list.push({ src: s.image, caption: s.caption?.[lang] }));
    // user journey
    data.userJourney.images.forEach(s => list.push({ src: s.image, caption: s.caption?.[lang] }));
    // inspirations
    data.inspirations.images.forEach(s => list.push({ src: s.image, caption: s.caption?.[lang] }));
    // arborescence
    list.push({ src: data.appPrototype.arborescence.image, caption: data.appPrototype.arborescence.title[lang] });
    // sketches
    data.appPrototype.sketches.images.forEach(s => list.push({ src: s.image, caption: s.caption?.[lang] }));
    // mockups
    data.appPrototype.mockups.images.forEach(s => list.push({ src: s.image, caption: s.caption?.[lang] }));
    // scenario
    data.appPrototype.usageScenario.steps.forEach(s => list.push({ src: s.image, caption: s.title[lang] }));

    setAllImages(list);
  }, [lang]);

  const openLightbox = (src: string, caption?: string) => {
    const idx = allImages.findIndex(img => img.src === src);
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
    offset: ["start start", "end end"],
    container: scrollContainerRef,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100,
  });

  const heroImageY = useTransform(smoothProgress, [0, 0.2], ["0%", "18%"]);
  const heroImageScale = useTransform(smoothProgress, [0, 0.2], [1, 1.06]);

  const renderProfileIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-[#002FA7]" />;
      case 'Users': return <Users className="w-5 h-5 text-[#002FA7]" />;
      case 'Heart': return <Heart className="w-5 h-5 text-[#002FA7]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#002FA7]" />;
      default: return <Users className="w-5 h-5 text-[#002FA7]" />;
    }
  };

  return (
    <div ref={containerRef} className="w-full bg-[#0A0D14] text-white selection:bg-[#002FA7] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* Top Floating Bar */}
      <div className="sticky top-0 z-50 w-full px-6 py-4 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto">
          <div className="bg-[#002FA7]/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
              {lang === 'fr' ? 'Case Study UX/UI' : 'UX/UI Case Study'}
            </span>
          </div>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="pointer-events-auto w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-lg"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Hero Section */}
      <section className="relative w-full pt-12 pb-20 md:pb-28 px-4 sm:px-6 md:px-12 lg:px-20 max-w-[1700px] mx-auto">
        <div className="flex flex-col gap-6 md:gap-8">
          
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-[#002FA7] bg-white px-3 py-1 rounded-full font-bold">
              {data.header.subtitle[lang]}
            </span>
            <span className="text-white/40 font-mono text-xs md:text-sm">• Paris Field Study</span>
          </div>

          <h1 className="font-display font-medium text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[0.92]">
            {data.header.title[lang]}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-4xl font-light leading-relaxed">
            {data.header.intro[lang]}
          </p>

          {/* Hero Banner / Cover */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl md:rounded-3xl overflow-hidden mt-6 border border-white/10 shadow-2xl bg-neutral-900">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-transparent to-black/30 z-10 pointer-events-none" />
            <motion.img
              src={data.header.heroImage}
              alt="Museum Companion UX/UI"
              style={{ y: heroImageY, scale: heroImageScale }}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-20 flex flex-wrap gap-4 items-center">
              <div className="bg-[#0A0D14]/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2">
                <MapPin size={16} className="text-[#002FA7]" />
                <span className="font-mono text-xs text-white">Musée d'Orsay & Musée du Quai Branly</span>
              </div>
              <div className="bg-[#0A0D14]/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2">
                <Users size={16} className="text-[#002FA7]" />
                <span className="font-mono text-xs text-white">23 Participants In Situ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PARTIE 1 : ANALYSE TERRAIN & RECHERCHE UTILISATEUR
      ========================================================================= */}
      <section className="relative w-full py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 border-t border-white/10 bg-[#0E121B]">
        <div className="max-w-[1700px] mx-auto flex flex-col gap-16 md:gap-20">
          
          {/* Section Title */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#002FA7]" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#002FA7] font-bold">
                {lang === 'fr' ? 'IMMERSION ETHNOGRAPHIQUE' : 'ETHNOGRAPHIC IMMERSION'}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
              {data.fieldResearch.title[lang]}
            </h2>
            <p className="text-white/60 text-base sm:text-lg max-w-3xl">
              {data.fieldResearch.subtitle[lang]}
            </p>
          </div>

          {/* Key Metric Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            <div className="p-6 rounded-2xl bg-[#141926] border border-white/10 flex flex-col justify-between">
              <div className="flex justify-between items-center text-white/50 mb-4">
                <span className="font-mono text-xs uppercase tracking-wider">{lang === 'fr' ? 'Échantillon' : 'Sample Size'}</span>
                <Users className="w-5 h-5 text-[#002FA7]" />
              </div>
              <div>
                <span className="font-display font-bold text-4xl sm:text-5xl text-white block">
                  {data.fieldResearch.stats.totalParticipants}
                </span>
                <span className="text-white/70 text-xs sm:text-sm mt-1 block">
                  {lang === 'fr' ? 'Participants interviewés in situ' : 'Participants interviewed in situ'}
                </span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#141926] border border-white/10 flex flex-col justify-between">
              <div className="flex justify-between items-center text-white/50 mb-4">
                <span className="font-mono text-xs uppercase tracking-wider">{lang === 'fr' ? 'Durée Échange' : 'Interview Duration'}</span>
                <Clock className="w-5 h-5 text-[#002FA7]" />
              </div>
              <div>
                <span className="font-display font-bold text-4xl sm:text-5xl text-white block">
                  {data.fieldResearch.stats.duration}
                </span>
                <span className="text-white/70 text-xs sm:text-sm mt-1 block">
                  {lang === 'fr' ? 'Entretiens courts & spontanés' : 'Short & spontaneous exchanges'}
                </span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#141926] border border-white/10 flex flex-col justify-between sm:col-span-2">
              <div className="flex justify-between items-center text-white/50 mb-3">
                <span className="font-mono text-xs uppercase tracking-wider">{lang === 'fr' ? 'Méthodologie & Contexte' : 'Methodology & Context'}</span>
                <ShieldCheck className="w-5 h-5 text-[#002FA7]" />
              </div>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light mb-2">
                {data.fieldResearch.stats.methodology[lang]}
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#002FA7] bg-white/90 px-3 py-1 rounded-md font-medium w-fit">
                <span>✓</span>
                <span>{data.fieldResearch.stats.collectionFormat[lang]}</span>
              </div>
            </div>

          </div>

          {/* Museum Breakdown Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.fieldResearch.museums.map((m, i) => (
              <div
                key={m.name}
                className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#161D2E] to-[#111622] border border-white/15 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none font-display font-bold text-7xl select-none">
                  0{i + 1}
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-[#002FA7] w-5 h-5" />
                  <span className="font-mono text-xs uppercase tracking-widest text-white/60">{m.location}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-white mb-2">
                  {m.name}
                </h3>
                <div className="text-sm sm:text-base text-white/80 mb-6 font-light">
                  {m.details[lang]}
                </div>
                <div className="inline-block bg-[#002FA7]/30 border border-[#002FA7]/50 px-4 py-1.5 rounded-full text-white font-mono text-xs font-bold">
                  {m.sample[lang]}
                </div>
              </div>
            ))}
          </div>

          {/* Statistics Slides (Emplacement pour les slides du user) */}
          <div className="flex flex-col gap-6 pt-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#002FA7] font-bold block mb-1">
                  {lang === 'fr' ? 'Données & Slides de Synthèse' : 'Data & Summary Slides'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-medium uppercase text-white">
                  {lang === 'fr' ? 'Statistiques Terrain' : 'Field Statistics'}
                </h3>
              </div>
              <div className="text-xs font-mono text-white/50">
                {lang === 'fr' ? 'Cliquer pour agrandir les slides' : 'Click to expand slides'}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.fieldResearch.slides.map((slide, idx) => (
                <div
                  key={slide.id}
                  onClick={() => openLightbox(slide.image, slide.caption?.[lang])}
                  className="group relative rounded-2xl overflow-hidden bg-[#161D2E] border border-white/10 shadow-lg cursor-zoom-in transition-all duration-300 hover:border-[#002FA7]/50"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-neutral-900">
                    <img
                      src={slide.image}
                      alt={slide.caption?.[lang] || `Slide ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 bg-[#141926] flex items-center justify-between">
                    <span className="font-mono text-xs text-white/80 line-clamp-1">
                      {slide.caption?.[lang]}
                    </span>
                    <Maximize2 size={14} className="text-white/40 group-hover:text-white shrink-0 ml-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visitor Profiles (Typologie issue du terrain) */}
          <div className="flex flex-col gap-6 pt-8">
            <div className="border-b border-white/10 pb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#002FA7] font-bold block mb-1">
                {lang === 'fr' ? 'Typologie des Visiteurs' : 'Visitor Typology'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-medium uppercase text-white">
                {lang === 'fr' ? 'Profils Découlant du Terrain' : 'Field Identified Profiles'}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.fieldResearch.profiles.map((profile) => (
                <div
                  key={profile.id}
                  className="p-6 rounded-2xl bg-[#141926] border border-white/10 flex flex-col justify-between hover:border-[#002FA7]/40 transition-colors"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 shadow-md">
                      {renderProfileIcon(profile.icon)}
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#002FA7] bg-white/90 px-2 py-0.5 rounded font-bold">
                      {profile.tag[lang]}
                    </span>
                    <h4 className="text-xl font-display font-medium text-white mt-3 mb-2">
                      {profile.name[lang]}
                    </h4>
                    <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                      {profile.desc[lang]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Questions Clés & Verbatims */}
          <div className="flex flex-col gap-8 pt-8">
            <div className="border-b border-white/10 pb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#002FA7] font-bold block mb-1">
                {lang === 'fr' ? 'Paroles de Visiteurs In Situ' : 'In Situ Visitor Quotes'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-medium uppercase text-white">
                {lang === 'fr' ? 'Questions Clés & Verbatims' : 'Key Questions & Verbatims'}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.fieldResearch.questions.map((qItem, qIdx) => (
                <div
                  key={qIdx}
                  className="p-6 sm:p-8 rounded-3xl bg-[#141926] border border-white/15 flex flex-col gap-6"
                >
                  <div>
                    <div className="flex items-center gap-2 text-[#002FA7] mb-2 font-mono text-xs font-bold uppercase">
                      <span>Question 0{qIdx + 1}</span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-display font-semibold text-white">
                      « {qItem.question[lang]} »
                    </h4>
                    {qItem.subtext && (
                      <p className="text-xs text-white/50 mt-1 font-light">
                        {qItem.subtext[lang]}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-4">
                    {qItem.verbatims.map((vb) => (
                      <div
                        key={vb.id}
                        className="p-5 rounded-2xl bg-[#0E121B] border border-white/10 flex flex-col gap-2 relative pl-6"
                      >
                        <span className="absolute left-3 top-5 w-1 h-8 bg-[#002FA7] rounded-full" />
                        <p className="text-sm sm:text-base text-white/90 italic font-serif leading-relaxed">
                          {vb.quote[lang]}
                        </p>
                        {vb.author && (
                          <span className="font-mono text-[11px] text-white/50 text-right mt-1">
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
          PARTIE 2 : USER JOURNEY (3 IMAGES DE SUBSTITUTION)
      ========================================================================= */}
      <section className="relative w-full py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#0A0D14]">
        <div className="max-w-[1700px] mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#002FA7]" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#002FA7] font-bold">
                {lang === 'fr' ? 'PARCOURS VISITEUR' : 'VISITOR JOURNEY'}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
              {data.userJourney.title[lang]}
            </h2>
            <p className="text-white/60 text-base sm:text-lg max-w-3xl">
              {data.userJourney.intro[lang]}
            </p>
          </div>

          {/* 3 Images de substitution pour User Journey */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {data.userJourney.images.map((ujItem, idx) => (
              <div
                key={ujItem.id}
                onClick={() => openLightbox(ujItem.image, ujItem.caption?.[lang])}
                className="group relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#161D2E] border border-white/15 shadow-xl cursor-zoom-in transition-all duration-300 hover:border-[#002FA7]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-neutral-900 relative">
                  <img
                    src={ujItem.image}
                    alt={ujItem.caption?.[lang] || `User Journey ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-4 left-4 z-10">
                    <span className="font-mono text-[10px] uppercase tracking-wider bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white border border-white/20">
                      Phase 0{idx + 1}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white">
                    <span className="font-mono text-xs font-medium line-clamp-1">
                      {ujItem.caption?.[lang]}
                    </span>
                    <Maximize2 size={16} className="text-white/60 group-hover:text-white shrink-0 ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          PARTIE 3 : INSPIRATIONS (BENCHMARK & MOODBOARD)
      ========================================================================= */}
      <section className="relative w-full py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#0E121B] border-t border-white/10">
        <div className="max-w-[1700px] mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#002FA7]" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#002FA7] font-bold">
                {lang === 'fr' ? 'BENCHMARKS & MOODBOARD' : 'BENCHMARKS & MOODBOARD'}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
              {data.inspirations.title[lang]}
            </h2>
            <p className="text-white/60 text-base sm:text-lg max-w-3xl">
              {data.inspirations.intro[lang]}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.inspirations.images.map((inspItem, idx) => (
              <div
                key={inspItem.id}
                onClick={() => openLightbox(inspItem.image, inspItem.caption?.[lang])}
                className="group relative rounded-2xl overflow-hidden bg-[#161D2E] border border-white/15 shadow-xl cursor-zoom-in transition-all duration-300 hover:border-[#002FA7]"
              >
                <div className="aspect-[4/3] sm:aspect-square overflow-hidden bg-neutral-900 relative">
                  <img
                    src={inspItem.image}
                    alt={inspItem.caption?.[lang] || `Inspiration ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white">
                    <span className="font-mono text-xs text-white/90 line-clamp-1">
                      {inspItem.caption?.[lang]}
                    </span>
                    <Maximize2 size={16} className="text-white/60 group-hover:text-white shrink-0 ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          PARTIE 4 : LA MAQUETTE DE NOTRE APPLICATION
      ========================================================================= */}
      <section className="relative w-full py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#0A0D14] border-t border-white/10">
        <div className="max-w-[1700px] mx-auto flex flex-col gap-20">
          
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#002FA7]" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#002FA7] font-bold">
                {lang === 'fr' ? 'DESIGN D\'APPLICATION' : 'APP DESIGN'}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
              {data.appPrototype.title[lang]}
            </h2>
            <p className="text-white/60 text-base sm:text-lg max-w-3xl">
              {data.appPrototype.subtitle[lang]}
            </p>
          </div>

          {/* 4.1 ARBORESCENCE */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#141926] border border-white/15 flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#002FA7] font-bold block mb-1">
                  Structure & Navigation
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-white">
                  {data.appPrototype.arborescence.title[lang]}
                </h3>
                <p className="text-white/70 text-sm sm:text-base mt-2 max-w-2xl font-light">
                  {data.appPrototype.arborescence.desc[lang]}
                </p>
              </div>
              <span className="text-xs font-mono text-white/50">{lang === 'fr' ? 'Cliquer pour examiner l\'arborescence' : 'Click to inspect site map'}</span>
            </div>

            <div
              onClick={() => openLightbox(data.appPrototype.arborescence.image, data.appPrototype.arborescence.title[lang])}
              className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 cursor-zoom-in group shadow-2xl"
            >
              <img
                src={data.appPrototype.arborescence.image}
                alt="Arborescence Application"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-4 right-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 flex items-center gap-2 text-xs font-mono text-white">
                <Maximize2 size={14} />
                <span>Zoom</span>
              </div>
            </div>
          </div>

          {/* 4.2 PLANCHES DE SKETCH */}
          <div className="flex flex-col gap-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#002FA7] font-bold block mb-1">
                {lang === 'fr' ? 'Idéation Papier' : 'Paper Wireframing'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-white">
                {data.appPrototype.sketches.title[lang]}
              </h3>
              <p className="text-white/70 text-sm sm:text-base mt-2 max-w-2xl font-light">
                {data.appPrototype.sketches.desc[lang]}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {data.appPrototype.sketches.images.map((skItem, idx) => (
                <div
                  key={skItem.id}
                  onClick={() => openLightbox(skItem.image, skItem.caption?.[lang])}
                  className="group relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#161D2E] border border-white/15 shadow-xl cursor-zoom-in transition-all duration-300 hover:border-[#002FA7]"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-neutral-900 relative">
                    <img
                      src={skItem.image}
                      alt={skItem.caption?.[lang] || `Sketch ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />
                    <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white">
                      <span className="font-mono text-xs text-white/90 line-clamp-1">
                        {skItem.caption?.[lang]}
                      </span>
                      <Maximize2 size={16} className="text-white/60 group-hover:text-white shrink-0 ml-2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4.3 DEUX RENDUS DE MISE EN SITUATION */}
          <div className="flex flex-col gap-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#002FA7] font-bold block mb-1">
                {lang === 'fr' ? 'Haute Fidélité' : 'High Fidelity'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-white">
                {data.appPrototype.mockups.title[lang]}
              </h3>
              <p className="text-white/70 text-sm sm:text-base mt-2 max-w-2xl font-light">
                {data.appPrototype.mockups.desc[lang]}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {data.appPrototype.mockups.images.map((mkItem, idx) => (
                <div
                  key={mkItem.id}
                  onClick={() => openLightbox(mkItem.image, mkItem.caption?.[lang])}
                  className="group relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#161D2E] border border-white/15 shadow-xl cursor-zoom-in transition-all duration-300 hover:border-[#002FA7]"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-neutral-900 relative">
                    <img
                      src={mkItem.image}
                      alt={mkItem.caption?.[lang] || `Mockup ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-75" />
                    <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white">
                      <span className="font-mono text-xs text-white/90 line-clamp-1">
                        {mkItem.caption?.[lang]}
                      </span>
                      <Maximize2 size={16} className="text-white/60 group-hover:text-white shrink-0 ml-2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4.4 TEST UTILISATEUR */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#141926] border border-white/15 flex flex-col gap-10">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#002FA7] font-bold block mb-1">
                {lang === 'fr' ? 'Validation Ergonomique' : 'Usability Validation'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-white">
                {data.appPrototype.userTesting.title[lang]}
              </h3>
              <p className="text-white/70 text-sm sm:text-base mt-2 max-w-3xl font-light">
                {data.appPrototype.userTesting.desc[lang]}
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {data.appPrototype.userTesting.metrics.map((m, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#0E121B] border border-white/10 flex flex-col justify-between">
                  <span className="font-mono text-xs uppercase text-white/50">{m.label[lang]}</span>
                  <div className="my-2">
                    <span className="text-4xl sm:text-5xl font-display font-bold text-white block">
                      {m.value}
                    </span>
                    <span className="text-xs text-white/70 mt-1 block">
                      {m.sub[lang]}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Qualitative Takeaways */}
            <div className="flex flex-col gap-3 pt-2">
              <span className="font-mono text-xs uppercase tracking-wider text-white/60">
                {lang === 'fr' ? 'Principaux enseignements retenus' : 'Key Usability Takeaways'}
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {data.appPrototype.userTesting.takeaways.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#0E121B] border border-white/10 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#002FA7] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                      {item[lang]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4.5 SCÉNARIO D'USAGE ILLUSTRÉ */}
          <div className="flex flex-col gap-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#002FA7] font-bold block mb-1">
                {lang === 'fr' ? 'Parcours Pas-à-Pas' : 'Step-by-Step Experience'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-white">
                {data.appPrototype.usageScenario.title[lang]}
              </h3>
              <p className="text-white/70 text-sm sm:text-base mt-2 max-w-2xl font-light">
                {data.appPrototype.usageScenario.desc[lang]}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.appPrototype.usageScenario.steps.map((st) => (
                <div
                  key={st.stepNumber}
                  onClick={() => openLightbox(st.image, `${st.stepNumber}. ${st.title[lang]}`)}
                  className="group rounded-2xl overflow-hidden bg-[#161D2E] border border-white/15 flex flex-col justify-between cursor-zoom-in hover:border-[#002FA7] transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-neutral-900 relative">
                    <img
                      src={st.image}
                      alt={st.title[lang]}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-[#002FA7] text-white font-mono text-xs px-2.5 py-1 rounded-md font-bold">
                      {st.stepNumber}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col gap-2">
                    <h4 className="font-display font-medium text-lg text-white leading-snug">
                      {st.title[lang]}
                    </h4>
                    <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
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

      <div className="w-full h-[6vh] bg-[#0A0D14]" />
    </div>
  );
};
