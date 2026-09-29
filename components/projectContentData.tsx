import React from 'react';
import { Database, LayoutDashboard, Palette, Briefcase, Settings, Target, Layers, Code, PenTool, Type, Zap, Scissors, Cog, Map, Monitor, Ruler, Shield, Heart, CheckCircle } from "lucide-react";
import { Language } from "../types";

export const getProjectData = (id: string, lang: Language) => {
  const data: any = {
    'p1': {
      subtitle: "",
      title: "That's My Jam",
      headerDesc: "Création d'entreprise",
      contextTitle: "La Problématique & Le Défi",
      contextText: "À côté de mes études, avec deux amis, nous avons monté une start-up qui nous permet d'appliquer toutes les compétences apprises à l'école dans un projet concret. Cela me permet d'aller encore plus loin et de monter en compétence sur de nombreux sujets qui touchent à l'entrepreneuriat.",
      concept: {
        title: lang === 'fr' ? "Le Concept & Fonctionnement" : "The Concept & How It Works",
        text: lang === 'fr'
          ? "That's My Jam est né d'une ambition simple : briser le mur invisible entre la scène et la fosse pour transformer les spectateurs en véritables acteurs de l'événement.\n\nConcrètement, le public est invité à voter en temps réel en scannant un QR code affiché dans la salle ou projeté sur scène, directement depuis son smartphone et sans aucune application à installer. Le groupe ou le DJ met à disposition l'ensemble des sons et des morceaux pouvant être joués durant la soirée. Sur scène, les artistes reçoivent en direct les votes et les tendances du public, ce qui leur permet d'adapter l'ambiance de la salle instantanément, d'ajuster leur setlist en direct et de répondre au mieux aux attentes et à l'énergie de la foule."
          : "That's My Jam was born from a simple ambition: breaking the invisible wall between the stage and the crowd to turn spectators into active participants in the live experience.\n\nIn practice, the audience is invited to vote in real time simply by scanning a QR code displayed across the venue or projected on stage, directly from their smartphone without installing any app. The band or DJ uploads all the tracks and sounds that can be played during the performance. On stage, artists receive live incoming votes and trends from the room, enabling them to instantly modulate the atmosphere, adapt their setlist dynamically, and respond perfectly to the crowd's energy and expectations.",
        image: "https://drive.google.com/thumbnail?id=1FHJs5vCDogyqyLkG-C4bg9UHaSMu4lYn&sz=w2000"
      },
      techTitle: lang === 'fr' ? "Compétences Appliquées" : "Applied Skills",
      skills: true,
      skillsList: [
        {
          label: "Relational Database",
          text: lang === 'fr' ? "Modélisation et requêtes via base de données relationnelle" : "Relational database modeling and queries",
          details: lang === 'fr'
            ? "Mise en pratique de l'ingénierie apprise à l'école avec la création d'une base de données relationnelle robuste pour gérer les salles, les utilisateurs et les votes en temps réel."
            : "Practical application of software engineering with a robust relational database managing live venues, users, and real-time votes.",
          image: "https://drive.google.com/thumbnail?id=1EoFttAcjlnFPrtDQDddkxs54gTrCPSP-&sz=w1000"
        },
        {
          label: "Interface UX/UI",
          text: lang === 'fr' ? "Clarté, accessibilité et compréhension immédiate" : "Clarity, accessibility, and immediate onboarding",
          details: lang === 'fr'
            ? "Création d'une interface ultra-accessible via scan de QR code, pensée pour un vote fluide en 3 secondes dans une salle de concert sombre et sans aucune friction de connexion."
            : "Creation of an ultra-accessible interface via QR code scan, designed for smooth 3-second voting in dark concert venues without login friction.",
          images: [
            { src: "https://drive.google.com/thumbnail?id=1ipGpwDlo4zdXIgsCYGKFpZoUefeTmQw9&sz=w1000", label: lang === 'fr' ? "Vue Public" : "Public View" },
            { src: [
                "https://drive.google.com/thumbnail?id=1DgjrZ3QifQYEQo_G4wJ2jDkKxYUg3nbK&sz=w1000",
                "https://drive.google.com/thumbnail?id=1RzPdPqclgXampDIvFUq4dv8LHGbhgqTO&sz=w1000"
              ], 
              label: lang === 'fr' ? "Vue Artiste" : "Artist View" 
            }
          ]
        },
        {
          label: "Design d'Expérience",
          text: lang === 'fr' ? "Créer un dialogue continu avec le public" : "Continuous dialogue with the live crowd",
          details: lang === 'fr'
            ? "Conception d'une boucle interactive en temps réel : le public vote via QR code, le groupe visualise en direct les tendances sur scène et module l'ambiance sonore pour une communion totale."
            : "Designing a real-time interactive loop: the crowd votes via QR code, the band visualizes live trends on stage and modulates sound atmosphere for total communion."
        }
      ],
      resultTitle: "Le Résultat & L'Apprentissage",
      resultText: "Cette expérience entrepreneuriale immersive m'a apporté une vision à 360° de la création d'un produit. Les retours actuels sur la boîte sont très prometteurs : le public comme les artistes saluent une interface intuitive qui révolutionne l'ambiance des événements sans en casser le rythme.",
      images: {
        heroBg: "https://drive.google.com/thumbnail?id=12Y1whGrGWg2l--aMALl6DM2Y_IJWkgoo&sz=w2000",
        context: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=1000",
        resultBg: "https://images.unsplash.com/photo-1540039155732-d68a91b4fa7b?auto=format&fit=crop&q=80&w=2000"
      }
    },
    'p2': {
      subtitle: "",
      title: "Projet SNCF",
      headerDesc: "Projet partenaire",
      contextTitle: "",
      contextText: "Réhumaniser le voyage TER à l'ère de l'hyperdigitalisation.",
      techTitle: "Observations & Recherches",
      skills: true,
      skillsList: [
        {
          label: "Interviews Terrain",
          text: "12 personnes interviewées & Agent TER Occitanie",
          details: "Impact du sous-effectif : manque de présence humaine et insécurité. L'uniforme est perçu comme une barrière. Aux arrêts isolés (PANG sans borne de validation), le contrôleur reste la seule ressource. La nécessité de privilégier les contacts humains a été confirmée.",
          quotes: [
            { text: "Je choisis les petites gares pour être sûre de trouver un humain au guichet.", author: "Voyageuse" },
            { text: "Sans ce TER, notre village serait complètement coupé du monde.", author: "Étudiant" },
            { text: "C'est l'uniforme qu'ils engueulent, pas la personne.", author: "Agent de bord" },
            { text: "La borne sur le quai était en panne, heureusement que le contrôleur m'a dépanné !", author: "Usager régulier" },
            { text: "On manque cruellement de présence humaine, on se sent seuls le soir.", author: "Voyageuse" },
            { text: "Seul pour gérer tout un train la nuit, le sentiment d'insécurité monte vite.", author: "Contrôleur" },
            { text: "Train en panne : en dix minutes, on s'était tous organisés pour covoiturer.", author: "Passager" },
            { text: "Ici, pas de touristes. Juste des travailleurs et des étudiants qui font le trajet tous les jours.", author: "Travailleur pendulaire" },
            { text: "Prendre son temps dans une gare historique, ça change tout.", author: "Voyageuse occasionnelle" },
            { text: "Le contrôleur, c'est bien plus qu'un simple vérificateur de billets.", author: "Habitué de la ligne" }
          ]
        },
        {
          label: "La Concurrence",
          text: "Veille concurrentielle & Offres alternatives",
          details: "La concurrence (e.g. Transdev) propose une offre doublée, un engagement strict sur la ponctualité, et des trains de dernière génération: plus de personnel à bord, sièges confortables, Wi-Fi, espaces vélos et sécurité renforcée, le tout axé sur l'accessibilité à tous."
        },
        {
          label: "La Sociologie",
          text: "The Social Life of Small Urban Spaces (William H. Whyte)",
          details: "Une place ne dépend pas de son esthétique mais de sa capacité à favoriser les intéractions sociales via : la Triangulation (quelque chose d'extérieur qui crée le lien), la Projection, et le Mouvement (l'humain aime regarder le mouvement).",
          image: "https://drive.google.com/thumbnail?id=10ZggtwEmj4Da76AQ2U30Go4n2Mn2fHH4&sz=w1000"
        }
      ],
      postResearchText: "Constat :\n\nCe sous-effectif étant inévitable, il fallait se concentrer sur le dernier humain présent dans les trains : l'agent TER, et faire passer l'agent d'une figure de contrôle isolée et répressive à un repère rassurant et accessible pour les voyageurs.",
      processTitle: "Solution",
      steps: [
        {
          title: "Concept Général",
          desc: "Un système de géolocalisation interne à bord du train permettant de localiser facilement le contrôleur.\n\nComment ça marche ? L'agent porte un émetteur qui envoie un signal en continu. Ce signal est capté par des récepteurs situés dans chaque wagon de la rame.",
        },
        {
          title: "Le Matériel : L'Émetteur",
          desc: "Un petit boîtier électronique (TAG) porté par l'agent qui émet un signal en continu. Composé d'une carte ESP32, d'une batterie Li-Po 5V et d'une LED, son design a été pensé pour l'ergonomie de l'agent.",
          image: "https://drive.google.com/thumbnail?id=1J5dudpctxl4QwO1UEGodEbrGOCSj_8Tp&sz=w1000",
          image2: "https://drive.google.com/thumbnail?id=1nIZ3cYLqpC4KCv_rWDGGWJtzRDgOhhqN&sz=w1000"
        },
        {
          title: "Les Récepteurs",
          desc: "Des petits récepteurs discrets (ancres) répartis au plafond dans chaque wagon du train. Ils captent le signal de l'émetteur porté par l'agent. Architecture intérieure des ancres. Composants embarqués sécurisés pour s'intégrer discrètement au plafond de chaque wagon.",
          image: "https://drive.google.com/thumbnail?id=1dV8PDpPb23biy6QHFpyOdrefsZftAgnY&sz=w1000",
          image2: "https://drive.google.com/thumbnail?id=1xfu-EW3-CtAnS1V-UoOvc_I0ubfxIRjy&sz=w1000"
        },
        {
          title: "L'Infrastructure Technique",
          desc: "Un système Plug & Play très facile à implémenter : les récepteurs se calent sur le réseau existant du train, évitant l'ajout de nouveaux câbles. Il traite les signaux et affiche en direct sur tous les écrans de la rame où se trouve exactement le contrôleur (ex. \"Votre agent est en voiture 4\").",
          image: "https://drive.google.com/thumbnail?id=1wV1HyHVQjdHoaCBJBrk15-HfKp7CcLMD&sz=w1000"
        },
        {
          title: "L'Expérience Humaine",
          blocks: [
            {
              title: "Pour l'Agent",
              text: "Le système pallie le sentiment de sous-effectif, l'agent \"occupe\" visuellement tout le train.\nLa dynamique s'inverse : ce n'est plus l'agent qui traque le client pour exiger un titre, c'est la technologie qui guide le client vers l'agent. Les conflits sont désamorcés."
            },
            {
              title: "Pour le Passager",
              text: "En cas de problème (borne en panne, besoin d'info), il ne stresse plus à sa place : il sait exactement où aller.\nSavoir l'agent présent (\"L'agent est en Voiture 2\") crée un filet de sécurité psychologique, même à distance."
            }
          ]
        },
        {
          image: "https://drive.google.com/thumbnail?id=12jVPNY-uvmuAwicHia_nnjDDRYxvrQf3&sz=w1000"
        },
        {
          title: "La Gestion de la Fraude",
          desc: "La position de l'agent étant affichée en direct, un passager sans billet a l'obligation stricte de se lever et de marcher dans sa direction.\n\nLa transparence totale justifie l'amende maximale pour les personnes de mauvaise foi, tout en préservant la bienveillance pour les voyageurs honnêtes.",
        },
        {
          title: "Preuve de Concept (LE POC)",
          desc: "Des tests de terrain et des interviews (9 participants) ont été réalisés dans les gares avec de faux flyers annonçant la fonctionnalité. \n\nRetours usagers : \"Ça cartonnerait chez les jeunes\", \"À son époque l'agent faisait un appel vocal pour dire où il était\", \"Good idea, it could have helped me during my trip\".",
          image: "https://drive.google.com/thumbnail?id=1lYWhBA1v2wQ7zI4Fsb34NRhBFjGqpnD1&sz=w1000"
        }
      ],
      resultTitle: "Le Résultat & L'Apprentissage",
      resultText: "Ce projet m'a permis de comprendre comment l'intégration de technologies simples et robustes peut avoir un impact significatif sur l'expérience utilisateur globale, en réhumanisant le contact et en apaisant les tensions dans un environnement contraint.",
      images: {
        heroBg: "https://drive.google.com/thumbnail?id=1lLITLZdFeR9_07zkoQxYjThbcnY7DTku&sz=w2000",
        context: "https://images.unsplash.com/photo-1540039155732-d68a91b4fa7b?auto=format&fit=crop&q=80&w=1000",
        resultBg: "https://images.unsplash.com/photo-1522780550166-284a0288c8dc?auto=format&fit=crop&q=80&w=2000"
      }
    },
    'p3': {
      subtitle: lang === 'fr' ? "Design automobile" : "Automotive Design",
      title: "Concept-car",
      headerDesc: lang === 'fr' ? "Design Automobile & Aérodynamique" : "Automotive Design & Aerodynamics",
      contextTitle: "Le Défi & La Vision",
      contextText: "Conception de concept cars explorant la convergence entre efficience aérodynamique, morphologie sculptée et ergonomie de l'habitacle. En tant qu'ingénieur-designer, l'enjeu était de créer une présence visuelle forte dictée par l'équilibre des volumes et la pureté des lignes.",
      concept: {
        title: "L'Aérodynamique comme Forme Pure",
        text: "Le concept Lobster Car explore une silhouette sculpturale inspirée des carapaces et des lignes de tension organiques. La carrosserie guide les flux d'air pour assurer la stabilité et l'efficience tout en proposant une identité visuelle radicale.",
        image: "./car1.jpg"
      },
      techTitle: "Recherches & Compétences Appliquées",
      skills: true,
      skillsList: [
        {
          label: "Aérodynamique & Forme Extérieure",
          text: "Optimisation de la silhouette et écoulement des flux",
          details: "Étude poussée des volumes et des écoulements d'air sur carrosserie sculpturale pour allier performance aérodynamique et présence esthétique.",
          images: [
            { src: "./car2.jpg", label: "Étude Aérodynamique & Profil" },
            { src: "./car1.jpg", label: "Affiche Principale" }
          ]
        },
        {
          label: "Cockpit & Ergonomie",
          text: "Interface conducteur et ergonomie du poste de pilotage",
          details: "Conception ergonomique du poste de conduite : commandes physiques intuitives et visibilité optimale pour une expérience de conduite pure.",
          images: [
            { src: "./car3.jpg", label: "Poste de Pilotage" }
          ]
        },
        {
          label: "Esquisses & Recherche Formelle",
          text: "Recherche stylistique et études préliminaires",
          details: "De la feuille de croquis aux rendus volumiques, le processus explore les lignes de tension et l'équilibre des masses.",
          images: [
            { src: "./car4.jpg", label: "Recherche Formelle & Croquis" }
          ]
        }
      ],
      postResearchText: "Constat :\n\nLe projet Lobster Car démontre la synergie entre vision formelle de designer et précision de conception. Une démarche épurée où chaque élément visuel trouve sa justification.",
      processTitle: "Architecture & Solutions Techniques",
      steps: [
        {
          title: "1. Affiche & Manifeste de Style",
          desc: "Présentation grand format définissant les intentions stylistiques et l'impact visuel du concept.",
          image: "./car1.jpg"
        },
        {
          title: "2. Recherche & Esquisses Préparatoires",
          desc: "Étude des proportions et des lignes de force avant toute phase de modélisation.",
          image: "./car4.jpg"
        },
        {
          title: "3. Visuels Photographiques",
          desc: "Rendus en situation révélant la silhouette, les détails de carrosserie et l'équilibre général.",
          image: "./car2.jpg"
        }
      ],
      resultTitle: "Bilan & Acquis Ingénieur-Designer",
      resultText: "Cette étude complète valide une méthodologie double : aborder l'objet automobile avec la sensibilité formelle du designer et la rigueur technique de l'ingénieur.",
      images: {
        heroBg: "./car1.jpg",
        context: "./car2.jpg",
        resultBg: "./car5.jpg"
      }
    },
    'p4': {
      subtitle: "",
      title: lang === 'fr' ? "Maquette APP UX/UI" : "UX/UI App Prototype",
      headerDesc: "",
      contextTitle: lang === 'fr' ? "Le Contexte & Le Défi" : "Context & Challenge",
      contextText: lang === 'fr'
        ? "Comment se souvenir de notre visite au musée de façon ludique et instructive ? Conception d'une application après-musée pour transformer l'ancrage mémoriel en expérience sociale et interactive à travers le grattage et le jeu."
        : "How to remember our museum visit in a fun and educational way? Designing a post-museum companion app to transform memory retention into an interactive, social experience through scratch mechanics and games.",
      techTitle: lang === 'fr' ? "Compétences & Outils" : "Skills & Tools",
      skills: {
        col1Label: lang === 'fr' ? "Outils" : "Tools",
        col1Text: "Figma, Illustrator, Miro",
        col2Label: "Design",
        col2Text: lang === 'fr' ? "Enquête terrain, User Journey, Wireframes" : "Field research, User Journey, Wireframes",
        col3Label: "UX/UI",
        col3Text: lang === 'fr' ? "Design System, Maquettage, Tests utilisateurs" : "Design System, Mockups, User testing"
      },
      images: {
        heroBg: "https://drive.google.com/thumbnail?id=1jJGwkYIGr3go1w2FGDS6b6XGvN1AarIy&sz=w2000",
      },
      slides: []
    },
    'p5': {
      subtitle: lang === 'fr' ? "FabLab & Prototypage Physique" : "FabLab & Physical Prototyping",
      title: lang === 'fr' ? "Matière & Maquette" : "Material & Making",
      headerDesc: lang === 'fr' ? "FabLab & Projets Personnels" : "FabLab & Personal Builds",
      contextTitle: lang === 'fr' ? "Introduction & Démarche" : "Introduction & Approach",
      contextText: lang === 'fr'
        ? "Dans le cadre de mes études, j'ai été amené à utiliser la matière et à créer dans un FabLab toutes sortes d'objets pour illustrer des projets et leur faire prendre vie. C'est également une pratique que je prolonge dans mes projets personnels : explorer les matériaux, façonner, imprimer en 3D, découper et assembler, pour montrer que je sais manier un peu tout et concrétiser chaque concept."
        : "Throughout my studies, I was led to work with physical materials and create in FabLabs all kinds of objects to illustrate projects and bring them to life. It is also an approach I pursue through personal projects: experimenting with diverse materials, shaping, 3D printing, laser cutting, and assembling, demonstrating versatility and the ability to turn any concept into reality.",
      galleryTitle: lang === 'fr' ? "Galerie d'Objets & Maquettes" : "Objects & Models Gallery",
      images: {
        heroBg: "https://drive.google.com/thumbnail?id=1z-ZZdWXI2DyLbJ_6nSgWxZaKrIDcejox&sz=w2000",
      },
      // =========================================================================
      // PHOTOS DU PROJET MAQUETTE (SANS AUCUN TEXTE AUTOUR) :
      // =========================================================================
      galleryImages: [
        {
          id: 'maquette-1',
          image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_3100.JPG`,
          title: lang === 'fr' ? "Recherche de Forme & Ébauche" : "Form Exploration & Rough Model"
        },
        {
          id: 'maquette-2',
          image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_3137.JPG`,
          title: lang === 'fr' ? "Découpe & Usinage Matériaux" : "Material Cutting & Shaping"
        },
        {
          id: 'maquette-3',
          image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_3142.JPG`,
          title: lang === 'fr' ? "Assemblage & Ajustements" : "Assembly & Adjustments"
        },
        {
          id: 'maquette-4',
          image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_3145.JPG`,
          title: lang === 'fr' ? "Maquette Physique FabLab" : "FabLab Physical Prototype"
        },
        {
          id: 'maquette-5',
          image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_3204.JPG`,
          title: lang === 'fr' ? "Usinage & Assemblage" : "Machining & Assembly"
        },
        {
          id: 'maquette-6',
          image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_3207.JPG`,
          title: lang === 'fr' ? "Détail Matière & Finitions" : "Material Details & Finishes"
        },
        {
          id: 'maquette-7',
          image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_6269.JPG`,
          title: lang === 'fr' ? "Prototype & Modélisation" : "Prototyping & Modeling"
        },
        {
          id: 'maquette-8',
          image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_6635.JPG`,
          title: lang === 'fr' ? "Atelier & Fabrication" : "Workshop & Fabrication"
        },
        {
          id: 'maquette-9',
          image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_6641.JPG`,
          title: lang === 'fr' ? "Expérimentation Matérielle" : "Material Experimentation"
        },
        {
          id: 'maquette-10',
          image: `${import.meta.env.BASE_URL}photo%20maquette/75DDE74F-4374-4036-B43F-48AA2F8026F4.JPG`,
          title: lang === 'fr' ? "Vue d'Ensemble & Volume" : "Volume & Spatial Overview"
        },
        {
          id: 'maquette-11',
          image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_6709.jpg`,
          title: lang === 'fr' ? "Composition & Relief" : "Composition & Relief"
        },
        {
          id: 'maquette-12',
          image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_9153.JPG`,
          title: lang === 'fr' ? "Façonnage & Précision" : "Shaping & Precision"
        },
        {
          id: 'maquette-13',
          image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_9156.JPG`,
          title: lang === 'fr' ? "Finition & Texture" : "Finishing & Texture"
        },
        {
          id: 'maquette-14',
          image: `${import.meta.env.BASE_URL}photo%20maquette/10.jpg`,
          title: lang === 'fr' ? "Étude de Modélisation & Volumes" : "Modeling & Volume Study"
        },
        {
          id: 'maquette-15',
          image: `${import.meta.env.BASE_URL}photo%20maquette/11.jpg`,
          title: lang === 'fr' ? "Rendu & Présentation Finale" : "Rendering & Final Showcase"
        }
      ]
    },
    'p6': {
      subtitle: "",
      title: lang === 'fr' ? "Création de Typo" : "Type Design",
      headerDesc: "",
      contextTitle: lang === 'fr' ? "Le Contexte & Le Défi" : "Context & Challenge",
      contextText: lang === 'fr'
        ? "La typographie est l'architecture invisible de tout bon design. Pour affiner mon œil et ma précision, je me suis lancé le défi de concevoir une police de caractère originale de A à Z."
        : "Typography is the invisible architecture of great design. To hone my eye and precision, I challenged myself to design an original typeface from scratch.",
      techTitle: lang === 'fr' ? "Compétences & Outils" : "Skills & Tools",
      skills: {
        col1Label: lang === 'fr' ? "Outils" : "Tools",
        col1Text: "Illustrator, Glyphs",
        col2Label: "Design",
        col2Text: lang === 'fr' ? "Dessin vectoriel, Typographie, Géométrie" : "Vector drawing, Typography, Geometry",
        col3Label: lang === 'fr' ? "Technique" : "Technical",
        col3Text: lang === 'fr' ? "Crénage (Kerning), Ajustements Optiques" : "Kerning, Optical Adjustments"
      },
      images: {
        heroBg: `${import.meta.env.BASE_URL}typo/slide_12.jpg`,
      },
      slides: [
        `${import.meta.env.BASE_URL}typo/slide_01.jpg`,
        `${import.meta.env.BASE_URL}typo/slide_02.jpg`,
        `${import.meta.env.BASE_URL}typo/slide_03.jpg`,
        `${import.meta.env.BASE_URL}typo/slide_04.jpg`,
        `${import.meta.env.BASE_URL}typo/slide_05.jpg`,
        `${import.meta.env.BASE_URL}typo/slide_06.jpg`,
        `${import.meta.env.BASE_URL}typo/slide_07.jpg`,
        `${import.meta.env.BASE_URL}typo/slide_08.jpg`,
        `${import.meta.env.BASE_URL}typo/slide_09.jpg`,
        `${import.meta.env.BASE_URL}typo/slide_10.jpg`,
        `${import.meta.env.BASE_URL}typo/slide_11.jpg`,
        `${import.meta.env.BASE_URL}typo/slide_12.jpg`,
        `${import.meta.env.BASE_URL}typo/slide_13.jpg`,
        `${import.meta.env.BASE_URL}typo/slide_14.jpg`,
      ]
    }
  };
  
  return data[id] || data['p1'];
}
