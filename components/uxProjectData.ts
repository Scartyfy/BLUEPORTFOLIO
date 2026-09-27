import { Language } from '../types';

export interface VerbatimItem {
  id: string;
  quote: {
    fr: string;
    en: string;
  };
  author?: {
    fr: string;
    en: string;
  };
}

export interface QuestionVerbatim {
  question: {
    fr: string;
    en: string;
  };
  subtext?: {
    fr: string;
    en: string;
  };
  verbatims: VerbatimItem[];
}

export interface GalleryPhoto {
  id: string;
  image: string;
  caption?: {
    fr: string;
    en: string;
  };
}

export interface UxProjectContent {
  header: {
    title: { fr: string; en: string };
    subtitle: { fr: string; en: string };
    tagline: { fr: string; en: string };
    heroImage: string;
    intro: {
      fr: string;
      en: string;
    };
  };
  fieldResearch: {
    title: { fr: string; en: string };
    subtitle: { fr: string; en: string };
    museums: Array<{
      name: string;
      location: string;
      details: { fr: string; en: string };
      sample: { fr: string; en: string };
    }>;
    stats: {
      totalParticipants: number;
      duration: string;
      methodology: {
        fr: string;
        en: string;
      };
      collectionFormat: {
        fr: string;
        en: string;
      };
    };
    slides: GalleryPhoto[];
    profiles: Array<{
      id: string;
      name: { fr: string; en: string };
      tag: { fr: string; en: string };
      desc: { fr: string; en: string };
      icon: string;
    }>;
    questions: QuestionVerbatim[];
  };
  userJourney: {
    title: { fr: string; en: string };
    subtitle: { fr: string; en: string };
    intro: { fr: string; en: string };
    images: GalleryPhoto[];
  };
  inspirations: {
    title: { fr: string; en: string };
    subtitle: { fr: string; en: string };
    intro: { fr: string; en: string };
    images: GalleryPhoto[];
  };
  appPrototype: {
    title: { fr: string; en: string };
    subtitle: { fr: string; en: string };
    arborescence: {
      title: { fr: string; en: string };
      desc: { fr: string; en: string };
      image: string;
    };
    sketches: {
      title: { fr: string; en: string };
      desc: { fr: string; en: string };
      images: GalleryPhoto[];
    };
    mockups: {
      title: { fr: string; en: string };
      desc: { fr: string; en: string };
      images: GalleryPhoto[];
    };
    userTesting: {
      title: { fr: string; en: string };
      desc: { fr: string; en: string };
      metrics: Array<{
        label: { fr: string; en: string };
        value: string;
        sub: { fr: string; en: string };
      }>;
      takeaways: Array<{ fr: string; en: string }>;
    };
    usageScenario: {
      title: { fr: string; en: string };
      desc: { fr: string; en: string };
      steps: Array<{
        stepNumber: string;
        title: { fr: string; en: string };
        desc: { fr: string; en: string };
        image: string;
      }>;
    };
  };
}

export const UX_PROJECT_DATA: UxProjectContent = {
  header: {
    title: {
      fr: "Maquette APP UX/UI",
      en: "UX/UI App Prototype"
    },
    subtitle: {
      fr: "Expérience Muséale & Recherche Utilisateur",
      en: "Museum Experience & User Research"
    },
    tagline: {
      fr: "De l'immersion ethnographique in situ à la conception d'une application d'accompagnement de visite",
      en: "From ethnographic field immersion to companion app design"
    },
    heroImage: "https://images.unsplash.com/photo-1581291518196-7bb18ef77a28?auto=format&fit=crop&q=80&w=1600",
    intro: {
      fr: "Conception complète d'une maquette d'application mobile pensée pour renouveler l'expérience des visiteurs dans les musées. Le projet est né d'une véritable démarche d'analyse terrain au Musée d'Orsay et au Musée du Quai Branly à Paris, combinant observations spontanées, entretiens informels, cartographie du parcours et prototypage centré sur l'utilisateur.",
      en: "Complete design of a mobile app prototype to renew visitor museum experiences. Rooted in field immersion at Musée d'Orsay and Musée du Quai Branly in Paris, blending spontaneous observations, informal interviews, journey mapping, and user-centered prototyping."
    }
  },

  fieldResearch: {
    title: {
      fr: "1. Analyse Terrain & Recherche Utilisateur",
      en: "1. Field Research & User Insights"
    },
    subtitle: {
      fr: "Immersion in situ à Paris — Musée d'Orsay & Musée du Quai Branly",
      en: "On-site immersion in Paris — Musée d'Orsay & Musée du Quai Branly"
    },
    museums: [
      {
        name: "Musée d'Orsay",
        location: "Paris 7e",
        details: {
          fr: "8 binômes et 1 personne seule interviewés",
          en: "8 pairs and 1 solo visitor interviewed"
        },
        sample: {
          fr: "17 participants",
          en: "17 participants"
        }
      },
      {
        name: "Musée du Quai Branly - Jacques Chirac",
        location: "Paris 7e",
        details: {
          fr: "1 trinôme, 1 binôme et 1 personne seule interviewés",
          en: "1 trio, 1 pair and 1 solo visitor interviewed"
        },
        sample: {
          fr: "6 participants",
          en: "6 participants"
        }
      }
    ],
    stats: {
      totalParticipants: 23,
      duration: "5 à 10 min",
      methodology: {
        fr: "Entretiens réalisés directement sur le lieu pendant le parcours de la visite, de manière informelle lors des pauses de repos (bancs, mezzanines, salons d'attente).",
        en: "Interviews conducted directly on-site during the museum visit, informally during resting breaks (benches, lounges, rest areas)."
      },
      collectionFormat: {
        fr: "Démarche non intrusive, aucun enregistrement audio afin de favoriser la spontanéité totale et de mettre immédiatement les visiteurs à l'aise.",
        en: "Non-intrusive approach, no audio recording to ensure absolute spontaneity and put visitors at ease."
      }
    },
    // =========================================================================
    // SLIDES DE STATISTIQUES (À REMPLACER PAR VOS PROPRES IMAGES)
    // =========================================================================
    slides: [
      {
        id: "stat-slide-1",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
        caption: {
          fr: "Slide Statistique 01 — Répartition des visiteurs et habitudes de visite",
          en: "Statistic Slide 01 — Visitor breakdown and visiting habits"
        }
      },
      {
        id: "stat-slide-2",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
        caption: {
          fr: "Slide Statistique 02 — Fréquence de capture photo et consultation des cartels",
          en: "Statistic Slide 02 — Photo taking frequency and plaque reading"
        }
      },
      {
        id: "stat-slide-3",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1200",
        caption: {
          fr: "Slide Statistique 03 — Rétention mémorielle des œuvres post-visite",
          en: "Statistic Slide 03 — Post-visit artwork memory retention"
        }
      }
    ],
    profiles: [
      {
        id: "p-experts",
        name: {
          fr: "Experts & Étudiants",
          en: "Experts & Students"
        },
        tag: {
          fr: "Travail & Spécialisation",
          en: "Work & Academic Study"
        },
        desc: {
          fr: "Présents pour leur travail, leurs études d'art ou des recherches ciblées. Ils examinent les détails techniques, le style, les cartels et ont besoin d'informations pointues.",
          en: "Present for work, fine arts studies or targeted research. Examining technical details, styles, plaques, requiring sharp context."
        },
        icon: "GraduationCap"
      },
      {
        id: "p-social",
        name: {
          fr: "Visite Sociale & Partage",
          en: "Social & Shared Visit"
        },
        tag: {
          fr: "Divertissement & Échange",
          en: "Entertainment & Voices"
        },
        desc: {
          fr: "Visite en couple, entre amis ou en famille. L'accent est mis sur le plaisir d'être ensemble, le partage d'émotions en direct et l'expérience conviviale.",
          en: "Visiting in pairs, friends or family. Focused on togetherness, sharing live impressions, and a conversational experience."
        },
        icon: "Users"
      },
      {
        id: "p-habits",
        name: {
          fr: "Les Habitués & Passionnés",
          en: "Frequent Visitors & Art Lovers"
        },
        tag: {
          fr: "Enrichissement Personnel",
          en: "Personal Enrichment"
        },
        desc: {
          fr: "Fréquentent régulièrement les musées par passion. Ils apprécient la contemplation, découvrent de nouvelles salles et approfondissent leur culture personnelle.",
          en: "Regular museum goers motivated by passion. Enjoy contemplation, wandering into new galleries, and deepening personal culture."
        },
        icon: "Heart"
      },
      {
        id: "p-tourists",
        name: {
          fr: "Les Touristes",
          en: "Tourists & Explorers"
        },
        tag: {
          fr: "Curiosité & Découverte",
          en: "Curiosity & Discovery"
        },
        desc: {
          fr: "Présents par curiosité et attrait pour les chefs-d'œuvre majeurs de Paris. Rythme souvent plus rapide, désir de repérage simple sans surcharge d'informations.",
          en: "Visiting out of curiosity for major Parisian highlights. Faster pace, seeking intuitive navigation without cognitive overload."
        },
        icon: "Compass"
      }
    ],
    // =========================================================================
    // QUESTIONS & VERBATIMS RECUEILLIS SUR LE TERRAIN
    // (À REMPLACER OU ÉDITER AVEC VOS VERBATIMS DÉFINITIFS)
    // =========================================================================
    questions: [
      {
        question: {
          fr: "Pourquoi prenez-vous des photos ?",
          en: "Why do you take photos?"
        },
        subtext: {
          fr: "Comprendre le déclencheur de la prise de vue en cours de visite",
          en: "Understanding the trigger behind taking photos during visits"
        },
        verbatims: [
          {
            id: "v1-1",
            quote: {
              fr: "« Pour garder une trace rapide de ce qui m'a frappé, sinon j'ai l'impression d'oublier 90% de la visite une fois sorti. »",
              en: "“To keep a quick trace of what struck me, otherwise I feel like I forget 90% of the visit once outside.”"
            },
            author: {
              fr: "Visiteur en binôme — Musée d'Orsay",
              en: "Visitor in pair — Musée d'Orsay"
            }
          },
          {
            id: "v1-2",
            quote: {
              fr: "« Je prends l'œuvre en photo, puis tout de suite le petit cartel à côté pour ne pas perdre le titre et le nom de l'artiste. »",
              en: "“I snap a photo of the artwork, then immediately the little label beside it so I don't lose the title and artist name.”"
            },
            author: {
              fr: "Étudiante en art — Musée du Quai Branly",
              en: "Art student — Musée du Quai Branly"
            }
          }
        ]
      },
      {
        question: {
          fr: "Qu'en faites-vous ?",
          en: "What do you do with them?"
        },
        subtext: {
          fr: "L'usage réel des photos capturées une fois la visite terminée",
          en: "The actual fate of photos once the museum visit ends"
        },
        verbatims: [
          {
            id: "v2-1",
            quote: {
              fr: "« Honnêtement ? Elles restent dans ma pellicule avec des milliers d'autres clichés et je ne les regarde presque jamais. »",
              en: "“Honestly? They sit in my camera roll among thousands of photos and I almost never look at them again.”"
            },
            author: {
              fr: "Visiteur régulier — Musée d'Orsay",
              en: "Regular visitor — Musée d'Orsay"
            }
          },
          {
            id: "v2-2",
            quote: {
              fr: "« J'en partage deux ou trois en direct à mes proches sur WhatsApp ou en story, puis elles tombent dans l'oubli. »",
              en: "“I share two or three directly on WhatsApp or story to friends, and then they're forgotten.”"
            },
            author: {
              fr: "Visiteur en couple — Musée du Quai Branly",
              en: "Couple visitor — Musée du Quai Branly"
            }
          }
        ]
      },
      {
        question: {
          fr: "Lisez-vous les écrits ?",
          en: "Do you read the wall labels & texts?"
        },
        subtext: {
          fr: "Rapport aux cartels, textes explicatifs et fiches de salle",
          en: "Relationship with labels, wall texts and explanatory panels"
        },
        verbatims: [
          {
            id: "v3-1",
            quote: {
              fr: "« Seulement les premières lignes si c'est court. Dès que c'est un gros pavé, mes yeux décrochent et j'ai mal aux pieds. »",
              en: "“Only the first few lines if it's short. As soon as it's a huge block of text, I lose focus and my feet hurt.”"
            },
            author: {
              fr: "Visiteur social — Musée d'Orsay",
              en: "Social visitor — Musée d'Orsay"
            }
          },
          {
            id: "v3-2",
            quote: {
              fr: "« S'il y a un groupe devant le cartel, je renonce. Je n'ai pas envie d'attendre pour déchiffrer un texte en petits caractères. »",
              en: "“If there is a crowd in front of the plaque, I give up. I don't want to wait just to decipher small print.”"
            },
            author: {
              fr: "Visiteur seul — Musée du Quai Branly",
              en: "Solo visitor — Musée du Quai Branly"
            }
          }
        ]
      },
      {
        question: {
          fr: "Comment faites-vous pour mémoriser les œuvres ?",
          en: "How do you memorize and retain artworks?"
        },
        subtext: {
          fr: "Mécanismes de rétention, souvenirs et consolidation post-visite",
          en: "Retention mechanisms, memories and post-visit consolidation"
        },
        verbatims: [
          {
            id: "v4-1",
            quote: {
              fr: "« J'essaie de me concentrer sur une émotion ou un détail marquant, mais après deux heures dans les galeries, tout se mélange. »",
              en: "“I try to anchor an emotion or striking detail, but after two hours in the galleries, everything blends together.”"
            },
            author: {
              fr: "Visiteuse habituée — Musée d'Orsay",
              en: "Frequent visitor — Musée d'Orsay"
            }
          },
          {
            id: "v4-2",
            quote: {
              fr: "« Je me dis que mes photos m'aideront, mais sans repère ni fil conducteur, c'est impossible de refaire le fil de l'histoire. »",
              en: "“I tell myself my photos will help, but without structure or storyline, it's impossible to piece the experience back together.”"
            },
            author: {
              fr: "Visiteur en binôme — Musée du Quai Branly",
              en: "Pair visitor — Musée du Quai Branly"
            }
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 2. USER JOURNEY (3 IMAGES DE SUBSTITUTION EN ATTENDANT LES PHOTOS)
  // =========================================================================
  userJourney: {
    title: {
      fr: "2. User Journey",
      en: "2. User Journey"
    },
    subtitle: {
      fr: "Cartographie du parcours visiteur — Avant, Pendant & Après la visite",
      en: "Visitor Journey Mapping — Before, During & After the Museum Visit"
    },
    intro: {
      fr: "Identification des étapes clés, des points de contact, des moments d'émerveillement et des ruptures cognitives vécues par les visiteurs sur le terrain.",
      en: "Mapping key milestones, touchpoints, moments of delight, and cognitive friction experienced by visitors on-site."
    },
    images: [
      {
        id: "uj-1",
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1400",
        caption: {
          fr: "User Journey 01 — Cartographie chronologique & Points de friction",
          en: "User Journey 01 — Chronological mapping & Friction points"
        }
      },
      {
        id: "uj-2",
        image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=1400",
        caption: {
          fr: "User Journey 02 — Courbe émotionnelle & Déclencheurs de curiosité",
          en: "User Journey 02 — Emotional curve & Curiosity triggers"
        }
      },
      {
        id: "uj-3",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1400",
        caption: {
          fr: "User Journey 03 — Opportunités de design & Consolidation de la mémoire",
          en: "User Journey 03 — Design opportunities & Memory retention"
        }
      }
    ]
  },

  // =========================================================================
  // 3. INSPIRATIONS (BENCHMARK & MOODBOARD)
  // =========================================================================
  inspirations: {
    title: {
      fr: "3. Inspirations",
      en: "3. Inspirations"
    },
    subtitle: {
      fr: "Moodboard visuel, architecture muséale & design d'interaction",
      en: "Visual moodboard, museum architecture & interaction design"
    },
    intro: {
      fr: "Recherche iconographique et benchmarks d'interfaces culturelles : sobriété typographique, élégance des contrastes et mise en valeur absolue de l'œuvre d'art.",
      en: "Iconographic research and cultural UI benchmarks: typographic restraint, elegant contrasts, and putting artwork center stage."
    },
    images: [
      {
        id: "insp-1",
        image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=1200",
        caption: {
          fr: "Inspiration 01 — Espace, lumière & scénographie contemplative",
          en: "Inspiration 01 — Space, lighting & contemplative curation"
        }
      },
      {
        id: "insp-2",
        image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&q=80&w=1200",
        caption: {
          fr: "Inspiration 02 — Typographie éditoriale & hiérarchie visuelle",
          en: "Inspiration 02 — Editorial typography & visual hierarchy"
        }
      },
      {
        id: "insp-3",
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=1200",
        caption: {
          fr: "Inspiration 03 — Couleurs, matières & profondeur émotionnelle",
          en: "Inspiration 03 — Color palettes, textures & emotional depth"
        }
      },
      {
        id: "insp-4",
        image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=1200",
        caption: {
          fr: "Inspiration 04 — Interfaces immersives et micro-interactions discrètes",
          en: "Inspiration 04 — Immersive UI and unobtrusive micro-interactions"
        }
      }
    ]
  },

  // =========================================================================
  // 4. LA MAQUETTE DE NOTRE APPLICATION
  // =========================================================================
  appPrototype: {
    title: {
      fr: "4. La Maquette de notre Application",
      en: "4. The Application Prototype"
    },
    subtitle: {
      fr: "De l'arborescence aux sketchs, rendus UI, tests et scénario d'usage",
      en: "From site map to sketches, high-fidelity UI, user testing and scenarios"
    },

    arborescence: {
      title: {
        fr: "Arborescence & Architecture de l'Information",
        en: "Information Architecture & Site Map"
      },
      desc: {
        fr: "Structuration fluide en 3 piliers essentiels : Découverte / Parcours In Situ, Carnet Mémoire Personnel, et Mode Contemplation.",
        en: "Clean 3-pillar structure: On-site Discovery, Personal Memory Journal, and Contemplative View."
      },
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=1400"
    },

    sketches: {
      title: {
        fr: "Planches de Sketch & Idéation Manuelle",
        en: "Sketching Boards & Manual Ideation"
      },
      desc: {
        fr: "Recherches exploratoires sur papier : cadrage des flux, dispositions d'écrans et micro-interactions avant passage sur Figma.",
        en: "Paper wireframes: exploring user flows, screen layouts, and gestures prior to Figma execution."
      },
      images: [
        {
          id: "sk-1",
          image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1200",
          caption: {
            fr: "Planche Sketch 01 — Wireframing de l'écran principal et du carnet de visite",
            en: "Sketch Board 01 — Main screen wireframing & visit journal"
          }
        },
        {
          id: "sk-2",
          image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=1200",
          caption: {
            fr: "Planche Sketch 02 — Gestuelle de capture intelligente et zoom sur l'œuvre",
            en: "Sketch Board 02 — Smart capture gesture & artwork deep zoom"
          }
        }
      ]
    },

    mockups: {
      title: {
        fr: "Rendus de Mise en Situation",
        en: "Contextual UI Mockups"
      },
      desc: {
        fr: "Deux rendus haute-fidélité illustrant l'application prise en main en conditions réelles dans les galeries du musée.",
        en: "Two high-fidelity mockups depicting the companion app held in real conditions across museum galleries."
      },
      images: [
        {
          id: "mk-1",
          image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1200",
          caption: {
            fr: "Rendu 01 — Prise en main in situ devant une œuvre majeure",
            en: "Mockup 01 — Held in front of a major masterpiece"
          }
        },
        {
          id: "mk-2",
          image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200",
          caption: {
            fr: "Rendu 02 — Consultation du carnet de mémoire enrichi lors d'une pause",
            en: "Mockup 02 — Browsing enriched memory book during a lounge break"
          }
        }
      ]
    },

    userTesting: {
      title: {
        fr: "Test Utilisateur & Retours d'Expérience",
        en: "Usability Testing & Key Learnings"
      },
      desc: {
        fr: "Séances de tests sur prototypes interactifs avec des profils représentatifs. Évaluation de la charge mentale et de la facilité d'usage.",
        en: "Usability testing on interactive Figma prototypes with representative users. Measuring cognitive load and ease of use."
      },
      metrics: [
        {
          label: { fr: "Taux de Réussite", en: "Success Rate" },
          value: "94%",
          sub: { fr: "Sur les tâches de capture et de consultation", en: "Across capture and browsing tasks" }
        },
        {
          label: { fr: "Temps d'Action", en: "Action Time" },
          value: "- 65%",
          sub: { fr: "Par rapport à la prise photo + note classique", en: "Compared to standard camera + notes" }
        },
        {
          label: { fr: "Satisfaction Globale", en: "Overall Score" },
          value: "9.2/10",
          sub: { fr: "Retour unanime sur la discrétion de l'interface", en: "Praise for minimal interface intrusion" }
        }
      ],
      takeaways: [
        {
          fr: "L'interface doit rester invisible pendant la contemplation : l'écran ne doit jamais s'interposer entre l'œil et l'œuvre.",
          en: "The interface must stay invisible during contemplation: the screen should never obstruct the artwork."
        },
        {
          fr: "La capture de l'information doit se faire en une seule geste sans forcer la lecture immédiate d'un cartel.",
          en: "Information capture must occur in one fluid gesture without forcing immediate label reading."
        },
        {
          fr: "La synthèse post-visite générée automatiquement transforme un dossier de photos mortes en souvenir mémorable.",
          en: "Auto-generated post-visit synthesis turns dead camera rolls into an organized, lasting memory."
        }
      ]
    },

    usageScenario: {
      title: {
        fr: "Scénario d'Usage Illustré",
        en: "Illustrated Usage Scenario"
      },
      desc: {
        fr: "Déroulement pas-à-pas de l'expérience d'un visiteur, de son entrée dans les galeries jusqu'à la redécouverte chez lui.",
        en: "Step-by-step visitor journey, from museum entry through gallery browsing to post-visit discovery at home."
      },
      steps: [
        {
          stepNumber: "01",
          title: {
            fr: "Arrivée & Mode Sans Friction",
            en: "Arrival & Zero Friction Mode"
          },
          desc: {
            fr: "Le visiteur entre dans la nef du musée. L'application détecte la salle sans configuration requise et passe en mode discret sombre.",
            en: "Visitor enters the museum wing. The app detects the room seamlessly and switches into unobtrusive dark ambient mode."
          },
          image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=1000"
        },
        {
          stepNumber: "02",
          title: {
            fr: "Approche & Détection Instantanée",
            en: "Approach & Instant Recognition"
          },
          desc: {
            fr: "Face à une sculpture ou un tableau, une simple levée de l'appareil affiche le nom de l'œuvre et un audio-court facultatif sans cacher la vue.",
            en: "Facing a sculpture, lifting the phone gently previews the artwork name and optional audio cue without blocking vision."
          },
          image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&q=80&w=1000"
        },
        {
          stepNumber: "03",
          title: {
            fr: "Capture Mémorielle en 1 Geste",
            en: "1-Tap Memory Snapshot"
          },
          desc: {
            fr: "D'une simple pression, l'œuvre est enregistrée dans le carnet personnel avec son contexte historique certifié, libérant le visiteur de photographier le cartel.",
            en: "One single tap saves the piece into the personal visit book along with verified curatorial context, avoiding plaque photography."
          },
          image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=1000"
        },
        {
          stepNumber: "04",
          title: {
            fr: "Post-Visite & Partage Élégant",
            en: "Post-Visit & Curated Sharing"
          },
          desc: {
            fr: "Au repos ou chez soi, le parcours se transforme en récit interactif enrichi, prêt à être exploré à tête reposée ou partagé en un clic.",
            en: "At home or during a coffee break, the visit crystallizes into an interactive visual story, ready to explore or share."
          },
          image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000"
        }
      ]
    }
  }
};
