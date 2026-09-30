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
      image?: string;
      takeaways: Array<{ fr: string; en: string }>;
    };
    usageScenario: {
      title: { fr: string; en: string };
      desc: { fr: string; en: string };
      overviewImage?: string;
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
    heroImage: "./placeholder-fil-rouge.svg",
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
    // SLIDES DE RECHERCHE TERRAIN & STATISTIQUES
    // =========================================================================
    slides: [
      {
        id: "stat-slide-1",
        image: "./placeholder-fil-rouge.svg",
        caption: {
          fr: "Observations In Situ — Musée d'Orsay & Musée du Quai Branly",
          en: "On-Site Observations — Musée d'Orsay & Musée du Quai Branly"
        }
      },
      {
        id: "stat-slide-2",
        image: "./placeholder-fil-rouge.svg",
        caption: {
          fr: "Étude In Situ — Donut d'attention devant « Juan Prim » (Henri Regnault)",
          en: "Field Study — Attention donut facing “Juan Prim” (Henri Regnault)"
        }
      },
      {
        id: "stat-slide-3",
        image: "./placeholder-fil-rouge.svg",
        caption: {
          fr: "Étude In Situ — Donut d'observation devant « Victor Navlet » (Vue de Paris)",
          en: "Field Study — Observation donut facing “Victor Navlet” (Paris view)"
        }
      },
      {
        id: "stat-slide-4",
        image: "./placeholder-fil-rouge.svg",
        caption: {
          fr: "Interviews In Situ — « Pourquoi prenez-vous des photos ? » (37.7% Si belle, 37.7% Partage, 24.6% Étude)",
          en: "On-Site Interviews — “Why do you take photos?” (37.7% Aesthetic, 37.7% Share, 24.6% Study)"
        }
      },
      {
        id: "stat-slide-5",
        image: "./placeholder-fil-rouge.svg",
        caption: {
          fr: "Interviews In Situ — « Qu'en faites-vous ? » (62.3% Partage, 24.6% Travail, 13.2% Archive)",
          en: "On-Site Interviews — “What do you do with them?” (62.3% Share, 24.6% Work, 13.2% Archive)"
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
      fr: "Identification des étapes clés, des points de contact, des courbes émotionnelles et des opportunités identifiées sur le terrain.",
      en: "Mapping key milestones, touchpoints, emotional curves, and opportunities observed on-site."
    },
    images: [
      {
        id: "uj-1",
        image: "./placeholder-fil-rouge.svg",
        caption: {
          fr: "User Journey Phase 1 — Avant la visite (Idée de visite & Organisation)",
          en: "User Journey Phase 1 — Before Visit (Idea & Organization)"
        }
      },
      {
        id: "uj-2",
        image: "./placeholder-fil-rouge.svg",
        caption: {
          fr: "User Journey Phase 2 — Pendant la visite (Arrivée, Déambulation & Fatigue)",
          en: "User Journey Phase 2 — During Visit (Arrival, Browsing & Fatigue)"
        }
      },
      {
        id: "uj-3",
        image: "./placeholder-fil-rouge.svg",
        caption: {
          fr: "User Journey Phase 3 — Après la visite (Notification déclic & Rétention mémorielle)",
          en: "User Journey Phase 3 — Post-Visit (Trigger notification & Memory retention)"
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
      fr: "Recherche iconographique et références graphiques : mécaniques de grattage ludique (FDJ), partage instantané (BeReal/Locket), gamification (DuoLingo) et sobriété suisse.",
      en: "Iconographic research and graphic benchmarks: scratch-off mechanics (FDJ), instant sharing (BeReal/Locket), gamification (DuoLingo), and Swiss typographic restraint."
    },
    images: [
      {
        id: "insp-1",
        image: "./placeholder-fil-rouge.svg",
        caption: {
          fr: "Inspirations — Moodboard de références (FDJ Grattage, BeReal & DuoLingo)",
          en: "Inspirations — Reference Moodboard (FDJ Scratch, BeReal & DuoLingo)"
        }
      },
      {
        id: "insp-2",
        image: "./placeholder-fil-rouge.svg",
        caption: {
          fr: "Inspirations — Gamification & Streaks de visite 🔥",
          en: "Inspirations — Gamification & Visit Streaks 🔥"
        }
      },
      {
        id: "insp-3",
        image: "./placeholder-fil-rouge.svg",
        caption: {
          fr: "Inspirations — Scénographie & Silence visuel muséal",
          en: "Inspirations — Scenography & Museum Visual Restraint"
        }
      },
      {
        id: "insp-4",
        image: "./placeholder-fil-rouge.svg",
        caption: {
          fr: "Inspirations — Typographie Suisse & Cartels épurés",
          en: "Inspirations — Swiss Typography & Minimal Wall Labels"
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
        fr: "Structure épurée articulée autour de 5 piliers : Accueil (carte à gratter & QCM), Ma galerie, Studio de jeux, Ajout d'amis et Compte.",
        en: "Clean structure articulated around 5 pillars: Home (scratch card & quiz), My gallery, Game studio, Friend add, and Account."
      },
      image: "./placeholder-fil-rouge.svg"
    },

    sketches: {
      title: {
        fr: "Planches de Sketch",
        en: "Sketching Boards"
      },
      desc: {
        fr: "Recherches exploratoires sur papier : cadrage des flux, ergonomie du pouce (one-thumb reach) et interactions de grattage tactile.",
        en: "Paper wireframes: exploring user flows, one-thumb ergonomic reach, and tactile scratch gestures prior to Figma execution."
      },
      images: [
        {
          id: "sk-1",
          image: "./placeholder-fil-rouge.svg",
          caption: {
            fr: "Planche Sketch 01 — Idéation papier & ergonomie one-thumb",
            en: "Sketch Board 01 — Paper wireframing & one-thumb ergonomics"
          }
        },
        {
          id: "sk-2",
          image: "./placeholder-fil-rouge.svg",
          caption: {
            fr: "Planche Sketch 02 — Gestuelles de grattage & mécaniques de jeux",
            en: "Sketch Board 02 — Tactile scratch gestures & mini-game mechanics"
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
        fr: "Deux planches de rendus haute-fidélité illustrant l'application en conditions réelles et les différents modes de jeux.",
        en: "Two high-fidelity mockup boards depicting the companion app held in real conditions and game studio modes."
      },
      images: [
        {
          id: "mk-1",
          image: "./placeholder-fil-rouge.svg",
          caption: {
            fr: "Rendu 01 — Écrans principaux (Accueil 3🔥, Ma Galerie, Ajout d'amis, Compte)",
            en: "Mockup 01 — Main screens (Home 3🔥, My Gallery, Friends, Account)"
          }
        },
        {
          id: "mk-2",
          image: "./placeholder-fil-rouge.svg",
          caption: {
            fr: "Rendu 02 — Studio de Jeux (Rat de Musée, Gartic Master, IA ou Vrai ?)",
            en: "Mockup 02 — Game Studio (Museum Rat, Gartic Master, AI or Real?)"
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
        fr: "Expérimentations in situ dans les galeries du musée avec la mascotte peluche Rat de Musée, protocole de questions et axes d'amélioration.",
        en: "On-site testing across museum galleries with the Museum Rat mascot, task protocol, and design iterations."
      },
      image: "./placeholder-fil-rouge.svg",
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
        fr: "Déroulement pas-à-pas de l'expérience d'un visiteur, de son arrivée dans les galeries jusqu'à l'ancrage mémoriel chez lui 3 jours plus tard.",
        en: "Step-by-step visitor journey, from museum entry through gallery browsing to memory consolidation at home 3 days later."
      },
      overviewImage: "./placeholder-fil-rouge.svg",
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
          image: "./placeholder-fil-rouge.svg"
        },
        {
          stepNumber: "02",
          title: {
            fr: "Approche & Prise de Photo",
            en: "Artwork Approach & 1-Tap Save"
          },
          desc: {
            fr: "Face à une œuvre, une photo rapide en 1 geste sauvegarde le tableau et son cartel vérifié.",
            en: "Facing an artwork, 1 single tap saves the piece into the visit book along with verified context."
          },
          image: "./placeholder-fil-rouge.svg"
        },
        {
          stepNumber: "03",
          title: {
            fr: "Notification Déclic",
            en: "Trigger Notification"
          },
          desc: {
            fr: "3 jours plus tard à 12h50, notification pop-up : votre tableau du jour est prêt à être gratté !",
            en: "3 days later at 12:50 PM, notification: your artwork of the day is ready to be revealed!"
          },
          image: "./placeholder-fil-rouge.svg"
        },
        {
          stepNumber: "04",
          title: {
            fr: "Grattage & Ancrage Mémoriel",
            en: "Scratch & Memory Anchoring"
          },
          desc: {
            fr: "Le visiteur gratte la carte, mémorise le cartel et l'œuvre s'inscrit durablement dans ses souvenirs.",
            en: "Visitor scratches the card, answers the quick quiz, and the memory crystallizes forever."
          },
          image: "./placeholder-fil-rouge.svg"
        }
      ]
    }
  }
};

