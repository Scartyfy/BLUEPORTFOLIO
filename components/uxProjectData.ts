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
    headerDesc: { fr: string; en: string };
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
      fr: "Maquette App UI",
      en: "UI App Prototype"
    },
    subtitle: {
      fr: "Expérience Visiteur & Enquête In Situ",
      en: "Visitor Experience & On-Site Study"
    },
    headerDesc: {
      fr: "Musée d'Orsay & Quai Branly",
      en: "Musée d'Orsay & Quai Branly"
    },
    heroImage: "https://images.unsplash.com/photo-1581291518196-7bb18ef77a28?auto=format&fit=crop&q=80&w=1600",
    intro: {
      fr: "Conception d'une maquette d'application mobile d'accompagnement muséal. Le projet s'appuie sur une enquête terrain menée au Musée d'Orsay et au Musée du Quai Branly à Paris, combinant observations spontanées, 23 entretiens in situ, cartographie du parcours et prototypage d'interface.",
      en: "Design of a museum companion mobile application. Grounded in field research at Musée d'Orsay and Musée du Quai Branly in Paris, blending spontaneous observations, 23 on-site interviews, user journey mapping, and prototype design."
    }
  },

  fieldResearch: {
    title: {
      fr: "Analyse Terrain & Entretiens In Situ",
      en: "Field Research & On-Site Interviews"
    },
    subtitle: {
      fr: "Immersion au Musée d'Orsay et au Musée du Quai Branly (Paris)",
      en: "Field study at Musée d'Orsay & Musée du Quai Branly (Paris)"
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
        name: "Musée du Quai Branly — Jacques Chirac",
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
        fr: "Entretiens réalisés directement sur le lieu pendant le parcours de la visite, de manière informelle lors des pauses de repos (bancs, salons, mezzanines).",
        en: "Interviews conducted directly on-site during the museum visit, informally during resting breaks (benches, lounges, rest areas)."
      },
      collectionFormat: {
        fr: "Démarche non intrusive, aucun enregistrement audio pour favoriser la spontanéité totale et mettre les visiteurs à l'aise.",
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
          fr: "Présents pour leur travail ou leurs études. Ils examinent les détails techniques, le style, les cartels et ont besoin d'informations pointues.",
          en: "Visiting for work or academic studies. Examining technical details, styles, plaques, and seeking precise context."
        }
      },
      {
        id: "p-social",
        name: {
          fr: "Visite Sociale",
          en: "Social Visit"
        },
        tag: {
          fr: "Divertissement & Partage",
          en: "Entertainment & Sharing"
        },
        desc: {
          fr: "Visite à deux, entre amis ou en famille. L'accent est mis sur le plaisir d'être ensemble, le partage d'émotions en direct et l'échange oral.",
          en: "Visiting in pairs, friends or family. Focused on togetherness, live impressions, and conversational exchange."
        }
      },
      {
        id: "p-habits",
        name: {
          fr: "Les Habitués",
          en: "Frequent Visitors"
        },
        tag: {
          fr: "Enrichissement Personnel",
          en: "Personal Enrichment"
        },
        desc: {
          fr: "Fréquentent régulièrement les musées par passion. Ils apprécient la contemplation, découvrent de nouvelles salles et approfondissent leur culture personnelle.",
          en: "Regular museum goers motivated by passion. Enjoy contemplation, wandering into new galleries, and personal culture."
        }
      },
      {
        id: "p-tourists",
        name: {
          fr: "Les Touristes",
          en: "Tourists"
        },
        tag: {
          fr: "Curiosité & Découverte",
          en: "Curiosity & Discovery"
        },
        desc: {
          fr: "Présents par curiosité pour voir les œuvres majeures de Paris. Rythme plus rapide, recherche d'un repérage simple sans surcharge d'informations.",
          en: "Visiting out of curiosity for major highlights. Faster pace, seeking intuitive navigation without information overload."
        }
      }
    ],
    // =========================================================================
    // QUESTIONS & VERBATIMS RECUEILLIS SUR LE TERRAIN
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
          en: "Do you read the wall labels?"
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
          fr: "Mécanismes de rétention et souvenirs post-visite",
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
  // 2. USER JOURNEY
  // =========================================================================
  userJourney: {
    title: {
      fr: "User Journey",
      en: "User Journey"
    },
    subtitle: {
      fr: "Cartographie du parcours — Avant, Pendant & Après la visite",
      en: "Journey mapping — Before, During & After the Visit"
    },
    intro: {
      fr: "Identification des étapes clés, des points de contact et des moments de rupture vécus par les visiteurs sur le terrain.",
      en: "Mapping key milestones, touchpoints, and friction moments experienced by visitors on-site."
    },
    images: [
      {
        id: "uj-1",
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1400",
        caption: {
          fr: "User Journey 01 — Cartographie chronologique",
          en: "User Journey 01 — Chronological mapping"
        }
      },
      {
        id: "uj-2",
        image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=1400",
        caption: {
          fr: "User Journey 02 — Courbe d'engagement & Décrochages",
          en: "User Journey 02 — Engagement curve & Drop-offs"
        }
      },
      {
        id: "uj-3",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1400",
        caption: {
          fr: "User Journey 03 — Opportunités de conception",
          en: "User Journey 03 — Design opportunities"
        }
      }
    ]
  },

  // =========================================================================
  // 3. INSPIRATIONS
  // =========================================================================
  inspirations: {
    title: {
      fr: "Inspirations",
      en: "Inspirations"
    },
    subtitle: {
      fr: "Moodboard visuel, architecture muséale & typographie",
      en: "Visual moodboard, museum architecture & typography"
    },
    intro: {
      fr: "Recherche iconographique et références graphiques : sobriété typographique, mise en valeur de l'œuvre et discrétion de l'interface.",
      en: "Iconographic research and graphic benchmarks: typographic restraint, artwork prominence, and interface discretion."
    },
    images: [
      {
        id: "insp-1",
        image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=1200",
        caption: {
          fr: "Inspiration 01 — Scénographie & Espace",
          en: "Inspiration 01 — Scenography & Space"
        }
      },
      {
        id: "insp-2",
        image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&q=80&w=1200",
        caption: {
          fr: "Inspiration 02 — Typographie & Hiérarchie",
          en: "Inspiration 02 — Typography & Hierarchy"
        }
      },
      {
        id: "insp-3",
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=1200",
        caption: {
          fr: "Inspiration 03 — Matières & Textures",
          en: "Inspiration 03 — Materials & Textures"
        }
      },
      {
        id: "insp-4",
        image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=1200",
        caption: {
          fr: "Inspiration 04 — Micro-interactions discrètes",
          en: "Inspiration 04 — Subtle micro-interactions"
        }
      }
    ]
  },

  // =========================================================================
  // 4. LA MAQUETTE DE NOTRE APPLICATION
  // =========================================================================
  appPrototype: {
    title: {
      fr: "La Maquette de l'Application",
      en: "Application Prototype"
    },
    subtitle: {
      fr: "Arborescence, sketchs, rendus UI, tests et scénario d'usage",
      en: "Site map, sketches, UI mockups, testing and usage scenario"
    },

    arborescence: {
      title: {
        fr: "Arborescence de l'Application",
        en: "Information Architecture"
      },
      desc: {
        fr: "Structure épurée articulée autour de la navigation in situ, de la capture rapide et du carnet personnel post-visite.",
        en: "Clean structure articulated around on-site navigation, quick capture, and personal post-visit log."
      },
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=1400"
    },

    sketches: {
      title: {
        fr: "Planches de Sketch",
        en: "Sketching Boards"
      },
      desc: {
        fr: "Recherches exploratoires sur papier : cadrage des flux, dispositions d'écrans et micro-interactions.",
        en: "Paper wireframes: exploring user flows, screen layouts, and gestures prior to Figma execution."
      },
      images: [
        {
          id: "sk-1",
          image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1200",
          caption: {
            fr: "Planche Sketch 01 — Wireframing de l'écran principal",
            en: "Sketch Board 01 — Main screen wireframing"
          }
        },
        {
          id: "sk-2",
          image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=1200",
          caption: {
            fr: "Planche Sketch 02 — Gestuelle de capture et zoom",
            en: "Sketch Board 02 — Capture gesture & zoom"
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
        fr: "Deux rendus illustrant l'application prise en main en conditions réelles dans les galeries du musée.",
        en: "Two high-fidelity mockups depicting the companion app held in real conditions across museum galleries."
      },
      images: [
        {
          id: "mk-1",
          image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1200",
          caption: {
            fr: "Rendu 01 — Prise en main in situ devant une œuvre",
            en: "Mockup 01 — Held in front of an artwork"
          }
        },
        {
          id: "mk-2",
          image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200",
          caption: {
            fr: "Rendu 02 — Consultation du carnet lors d'une pause",
            en: "Mockup 02 — Browsing the visit book during a break"
          }
        }
      ]
    },

    userTesting: {
      title: {
        fr: "Test Utilisateur",
        en: "User Testing"
      },
      desc: {
        fr: "Retours d'expérience et enseignements observés lors des tests du prototype interactif.",
        en: "Feedback and learnings observed during interactive prototype testing sessions."
      },
      takeaways: [
        {
          fr: "L'interface doit rester en retrait pendant la contemplation pour ne jamais s'interposer entre le regard et l'œuvre.",
          en: "The interface must stay discreet during contemplation so it never obstructs the eye from the artwork."
        },
        {
          fr: "L'enregistrement d'une œuvre doit se faire en une seule action pour ne pas alourdir la visite.",
          en: "Artwork saving must happen in a single fluid gesture to keep the visit completely seamless."
        },
        {
          fr: "La synthèse générée en fin de visite redonne de la valeur aux œuvres vues sans imposer une lecture immédiate.",
          en: "Post-visit summary brings real value to seen artworks without forcing immediate label reading."
        }
      ]
    },

    usageScenario: {
      title: {
        fr: "Scénario d'Usage Illustré",
        en: "Illustrated Usage Scenario"
      },
      desc: {
        fr: "Déroulement de l'expérience d'un visiteur, de son arrivée dans les galeries jusqu'à la redécouverte chez lui.",
        en: "Step-by-step visitor journey, from museum entry through gallery browsing to post-visit discovery at home."
      },
      steps: [
        {
          stepNumber: "01",
          title: {
            fr: "Arrivée & Mode Discret",
            en: "Arrival & Ambient Mode"
          },
          desc: {
            fr: "Le visiteur entre dans le musée. L'application s'adapte sans configuration et passe en mode discret.",
            en: "Visitor enters the museum wing. The app detects the room seamlessly and switches into ambient mode."
          },
          image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=1000"
        },
        {
          stepNumber: "02",
          title: {
            fr: "Approche de l'Œuvre",
            en: "Artwork Approach"
          },
          desc: {
            fr: "Face à une œuvre, une simple levée de l'appareil affiche le titre et l'auteur sans masquer la vue.",
            en: "Facing an artwork, lifting the phone gently previews the title and artist without blocking vision."
          },
          image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&q=80&w=1000"
        },
        {
          stepNumber: "03",
          title: {
            fr: "Capture en 1 Geste",
            en: "1-Tap Capture"
          },
          desc: {
            fr: "D'un geste simple, l'œuvre est mémorisée dans le carnet personnel avec son cartel vérifié.",
            en: "One single tap saves the piece into the personal visit book along with verified curatorial context."
          },
          image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=1000"
        },
        {
          stepNumber: "04",
          title: {
            fr: "Post-Visite & Mémoire",
            en: "Post-Visit & Memory"
          },
          desc: {
            fr: "Chez soi ou lors d'une pause, le parcours se consulte comme un carnet de visite clair et partagé.",
            en: "At home or during a coffee break, the visit crystallizes into an organized visual story."
          },
          image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000"
        }
      ]
    }
  }
};

