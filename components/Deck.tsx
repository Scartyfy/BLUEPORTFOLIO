import React, { useMemo, useState, useEffect } from 'react';
import { ViewState } from '../types';

interface DeckProps {
  scrollProgress: number;
  viewState: ViewState;
  onCardSelect: () => void;
}

export const Deck: React.FC<DeckProps> = ({ scrollProgress, viewState, onCardSelect }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isZooming, setIsZooming] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [windowWidth, setWindowWidth] = useState(() => typeof window !== 'undefined' ? window.innerWidth : 390);
  const isMobile = windowWidth < 768;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (viewState === ViewState.REVEALING) {
        // Step 1: Flip the card immediately
        setIsFlipped(true);

        // Step 2: Transform/Zoom after a short delay to allow the flip to be visible
        const zoomTimer = setTimeout(() => {
            setIsZooming(true);
        }, 800); 
        
        return () => {
            clearTimeout(zoomTimer);
        };
    } else {
        setIsZooming(false);
        setIsFlipped(false);
    }
  }, [viewState]);

  const easeOutCubic = (x: number): number => 1 - Math.pow(1 - x, 3);
  const spreadRaw = (viewState === ViewState.INTRO || viewState === ViewState.REVEALING) ? easeOutCubic(scrollProgress) : 0;
  const spread = Math.min(spreadRaw * 1.1, 1);
  const isInteractive = viewState === ViewState.INTRO && scrollProgress > 0.5;

  const numberOfCards = 5;
  const centerIndex = 2;
  const cards = useMemo(() => Array.from({ length: numberOfCards }), [numberOfCards]);

  const activeIndex = viewState === ViewState.REVEALING ? selectedIndex : hoveredIndex;

  return (
    <div className="relative w-full h-full flex items-center justify-center perspective-1000">
      {/* Subtle Hand Outlines for Atmospheric Intro */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${viewState === ViewState.INTRO ? 'opacity-30' : 'opacity-0'}`}>
        <div className="absolute left-[10%] bottom-0 w-[40vw] h-[60vh] border-l-[0.5px] border-t-[0.5px] border-white/20 rounded-tr-[200px] transform rotate-[10deg] blur-sm"></div>
        <div className="absolute right-[10%] bottom-0 w-[40vw] h-[60vh] border-r-[0.5px] border-t-[0.5px] border-white/20 rounded-tl-[200px] transform rotate-[-10deg] blur-sm"></div>
      </div>

      <div className="relative w-[120px] h-[175px] xs:w-[130px] xs:h-[190px] sm:w-56 sm:h-[315px] md:w-64 md:h-[360px]">
        {cards.map((_, index) => {
          // Responsive Spread - Fan layout on mobile, wide horizontal line on desktop
          const offsetBase = (index - centerIndex);
          
          // Calculate mobile spacing so all 5 cards fan out across the mobile screen with ~50% exposure each
          const mobileSpacing = Math.min(Math.max((windowWidth - 136) / 4, 46), 62);
          const spreadSpacing = isMobile ? mobileSpacing : 280;
          const spreadX = offsetBase * spreadSpacing * spread;
          const spreadY = isMobile ? Math.pow(Math.abs(offsetBase), 1.55) * 11 * spread : 0; 
          const spreadZ = 0; 
          const spreadRotateY = 0; 
          const spreadRotateX = 0; 
          const spreadRotateZ = isMobile ? offsetBase * 8.5 * spread : 0; 

          const isHovered = activeIndex === index;
          
          // Hover/active effect: Card comes forward, straightens, and scales up
          const hoverY = (isInteractive && isHovered) ? (isMobile ? -36 : -50) : 0; 
          const hoverZ = (isInteractive && isHovered) ? (isMobile ? 100 : 120) : 0; 
          const hoverScale = (isInteractive && isHovered) ? (isMobile ? 1.15 : 1.1) : 1;

          let x = spreadX;
          let y = spreadY + hoverY;
          let z = spreadZ + hoverZ;
          let r = (isInteractive && isHovered) ? 0 : spreadRotateZ;
          let rx = (isInteractive && isHovered) ? 0 : spreadRotateX;
          let ry = (isInteractive && isHovered) ? 0 : spreadRotateY;
          let s = hoverScale;
          let rotateY = 0;
          
          // Fully opaque for an epic, solid look
          let opacity = 1;
          let transitionOverride = '';

          if (viewState === ViewState.REVEALING || viewState === ViewState.PROJECTS) {
            if (isHovered) {
                x = 0;
                y = viewState === ViewState.PROJECTS ? -1200 : 0; // Slide further up
                z = 100;
                rotateY = isFlipped ? 180 : 0; 
                s = isMobile ? 1.25 : 1.25; 
                r = 0;
                rx = 0;
                ry = 0;
                opacity = viewState === ViewState.PROJECTS ? 0 : 1;
                transitionOverride = viewState === ViewState.PROJECTS 
                    ? 'all 3500ms cubic-bezier(0.2, 1, 0.2, 1)' // Slower slide for better rhythm
                    : (isZooming ? 'all 2000ms cubic-bezier(0.16, 1, 0.3, 1)' : 'all 1000ms cubic-bezier(0.23, 1, 0.32, 1)');
            } else {
                x = spreadX * 2; 
                y = 1000;
                z = spreadZ;
                opacity = 0;
                s = 0;
                transitionOverride = 'all 600ms cubic-bezier(0.55, 0.055, 0.675, 0.19)';
            }
          } else if (viewState === ViewState.INTRO) {
            if (scrollProgress === 0) {
                // Hidden / Initial state before dealing
                x = 0;
                y = 800; // From bottom
                z = -500; // From deep background
                r = (index - centerIndex) * 180; // Spin in
                rx = 60;
                ry = 0;
                s = 0.2;
                opacity = 0;
                transitionOverride = 'none'; // Snap to this position instantly
            } else if (scrollProgress === 1 && !isHovered) {
                // Dealing animation
                const delay = index * 120;
                transitionOverride = `all 1400ms cubic-bezier(0.175, 0.885, 0.32, 1.1) ${delay}ms`;
            }
          }

          const floatDelay = index * 0.5;
          const defaultTransition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'; // Fluid spring

          return (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transform-style-3d
                ${isInteractive ? 'cursor-pointer touch-manipulation' : ''}
              `}
              style={{
                transform: `translateX(${x}px) translateY(${y}px) translateZ(${z}px) rotate(${r}deg) rotateX(${rx}deg) rotateY(${ry}deg) scale(${s})`,
                zIndex: isHovered ? 50 : 10 - Math.abs(offsetBase), 
                opacity: opacity,
                pointerEvents: isInteractive ? 'auto' : 'none', 
                transition: transitionOverride || (isInteractive ? defaultTransition : 'all 1500ms cubic-bezier(0.2, 0.8, 0.2, 1)')
              }}
              onMouseEnter={() => { if(isInteractive) setHoveredIndex(index); }}
              onMouseLeave={() => { if(isInteractive && activeIndex === index && viewState !== ViewState.REVEALING) setHoveredIndex(null); }}
              onTouchStart={() => { if(isInteractive) setHoveredIndex(index); }}
              onClick={() => {
                if (isInteractive) {
                    setSelectedIndex(index);
                    setHoveredIndex(index);
                    if (isMobile) {
                      setTimeout(() => {
                        onCardSelect();
                      }, 180);
                    } else {
                      onCardSelect();
                    }
                }
              }}
            >
              <div 
                className="w-full h-full transform-style-3d shadow-2xl"
                style={{ 
                    transform: `rotateY(${rotateY}deg)`,
                    transition: 'transform 2000ms cubic-bezier(0.23, 1, 0.32, 1)',
                    animationName: viewState === ViewState.INTRO ? 'float' : 'none',
                    animationDuration: '6s',
                    animationTimingFunction: 'linear',
                    animationIterationCount: 'infinite',
                    animationDelay: `${floatDelay}s`
                }}
              >
                  {/* Card Back */}
                  <div className="absolute inset-0 backface-hidden rounded-xl sm:rounded-2xl overflow-hidden bg-[#002480] border-2 sm:border-[3px] border-white shadow-xl">
                     <div className="w-full h-full p-1.5 sm:p-2 relative z-10">
                        <div className="w-full h-full rounded-lg sm:rounded-xl flex items-center justify-center relative border-2 sm:border-[3px] border-white">
                           <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 border-2 sm:border-[3px] border-white rounded-full flex items-center justify-center">
                                <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 rounded-full bg-white"></div>
                           </div>
                        </div>
                     </div>
                  </div>

                    {/* Card Front (Revelation) - Ace of Spades */}
                    <div className="absolute inset-0 backface-hidden rounded-xl sm:rounded-2xl overflow-hidden flex flex-col justify-between p-2.5 sm:p-3 md:p-4 border border-white/30 bg-white transition-colors duration-1000 shadow-2xl"
                    style={{ transform: 'rotateY(180deg)' }}
                    >
                        <div className="flex flex-col items-center self-start z-10">
                             <div className="relative">
                                <span className="font-display font-bold text-lg sm:text-xl md:text-2xl leading-none transition-colors duration-1000 text-[#002FA7]">A</span>
                             </div>
                             <div className="relative mt-0.5">
                                <span className="text-[12px] sm:text-[15px] md:text-[18px] transition-colors duration-1000 text-[#002FA7]">♠</span>
                             </div>
                        </div>

                        {/* Central Spade - Flat Look */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                            <div className={`relative transition-all duration-1000 ${viewState !== ViewState.INTRO ? 'scale-100' : 'scale-75'}`}>
                                <span className="text-4xl sm:text-5xl md:text-6xl transition-all duration-1000 text-[#002FA7]">
                                    ♠
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center self-end transform rotate-180 z-10">
                             <div className="relative">
                                <span className="font-display font-bold text-lg sm:text-xl md:text-2xl leading-none transition-colors duration-1000 text-[#002FA7]">A</span>
                             </div>
                             <div className="relative mt-0.5">
                                <span className="text-[12px] sm:text-[15px] md:text-[18px] transition-colors duration-1000 text-[#002FA7]">♠</span>
                             </div>
                        </div>
                    </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};