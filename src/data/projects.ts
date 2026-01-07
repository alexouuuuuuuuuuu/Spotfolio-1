import { Project, Playlist } from '../types';


export const projects: Project[] = [
  {
    id: '1', 
    title: 'Refonte du site web d\'une cave à vin',
    category: 'UI/UX Design',
    cover: './assets/projets/fiefdesvins.png',
    images: [
      'https://images.unsplash.com/photo-1742836531239-1fe146bf7e3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBtb2JpbGUlMjBkZXNpZ258ZW58MXx8fHwxNzY1OTYxODY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    role: 'Lead UX/UI Designer',
    tools: ['Figma', 'WordPress'],
    description: 'Refaire son site web en intégrant une partie retreinte pour les professionnels, pour qu\'ils puissent passer commande pour leurs évènements',
    problem: 'Le site web existant ne répondait plus aux besoins du client, notamment l\'absence d\'un espace professionnel dédié permettant aux restaurateurs et organisateurs d\'événements de passer commande facilement. L\'interface n\'était pas optimisée pour le responsive design et l\'expérience utilisateur était peu intuitive.',
    process: 'Analyse des besoins du client chez Phénix Studio, conception des maquettes UI sur Figma en respectant l\'identité visuelle de la cave, développement d\'un espace client professionnel sécurisé, intégration sur WordPress avec attention portée au responsive design et à l\'accessibilité, tests utilisateurs et ajustements.',
    color: '#1DB954'
  },
  {
    id: '2',
    title: 'Livre de cuisine',
    category: 'Web Development',
    cover: './assets/projets/livre-recette.png',
    images: [
      'https://images.unsplash.com/photo-1495521821757-a1efb6729352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNpcGUlMjBjb29raW5nJTIwYm9va3xlbnwxfHx8fDE3NjU5NjExNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1495520821757-a1efb6729352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWlzaW5lJTIwZm9vZCUyMGFwcHxlbnwxfHx8fDE3NjU5NjE4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    role: 'Full Stack Developer',
    tools: ['Indesign'],
    description: 'Création d\'un livre de recettes.',
    problem: 'Besoin de créer un livre de cuisine attractif et structuré pour valoriser une collection de recettes. La mise en page devait être claire, esthétique et faciliter la lecture des étapes de préparation.',
    process: 'Définition de la structure éditoriale et du concept graphique, création d\'une charte graphique cohérente sur InDesign, mise en page des recettes avec hiérarchie visuelle, sélection et intégration des visuels, optimisation pour l\'impression.',
    color: '#9333EA'
  },
  {
    id: '3',
    title: 'Produire du contenu multimédia',
    category: 'Motion Design',
    cover: './assets/projets/subway-surfer.png',
    images: [
      'https://images.unsplash.com/photo-1764258560286-b3aa856c8ff0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBncmFwaGljcyUyMGRlc2lnbnxlbnwxfHx8fDE3NjU5NTgxMTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1764601841403-5c43713923c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwYW5pbWF0aW9ufGVufDF8fHx8MTc2NTk2MTg3MHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1758726064228-c669ce0966a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpbyUyMGJyYW5kaW5nfGVufDF8fHx8MTc2NTk2MTg3MXww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    role: '',
    tools: ['After Effects', 'Premiere Pro','WordPress', 'Figma', 'Blender'],
    description: 'Il nous a été demandé de créer, développer et promouvoir un site web e-commerce inspiré des plateformes comme Le Bon Coin, Vinted, … adapté à l\'univers d\'un jeu vidéo emblématique de votre choix (par exemple : Mario, Zelda, etc.).',
    problem: '',
    process: '',
    color: '#F59E0B'
  },
  {
    id: '4',
    title: 'Nuit du Code',
    category: 'UI/UX Design',
    cover: './assets/projets/nuitcode.png',
    images: [
      'https://images.unsplash.com/photo-1748280621226-91f9530fc329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwJTIwd29ya291dHxlbnwxfHx8fDE3NjU5NjExNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1633613287441-3f72304088ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjB0cmFja2luZyUyMG1vYmlsZXxlbnwxfHx8fDE3NjU5NjE4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1765728617805-b9f22d64e5b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVyY2lzZSUyMHRyYWluaW5nJTIwZ3ltfGVufDF8fHx8MTc2NTk2MTg3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    role: 'Product Designer',
    tools: ['Figma', 'GSAP', 'HTML', 'CSS', 'JAVASCRIPT'],
    description: 'Design d\'une application mobile de coaching fitness personnalisé avec suivi de progression et gamification.',
    problem: '',
    process: '',
    color: '#EC4899'
  },
  {
    id: '5',
    title: 'Créer un site WordPress de type \'click & collect\'',
    category: 'UI/UX Design',
    cover: './assets/projets/danniel-wellington.png',
    images: [
      'https://images.unsplash.com/photo-1667674557680-57d5001715b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHdlYiUyMGRlc2lnbnxlbnwxfHx8fDE3NjU5NjE4NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1746292506315-e346cba2af48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJnbCUyMGludGVyYWN0aXZlJTIwZXhwZXJpZW5jZXxlbnwxfHx8fDE3NjU5NjE4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1641098872650-beaa1c8589fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHJlbmRlcmluZyUyMHBvcnRmb2xpb3xlbnwxfHx8fDE3NjU5NjE4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1603201667246-3c45012c6d17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHdlYnNpdGV8ZW58MXx8fHwxNzY1OTYxODc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    role: 'UI/UX Designer & Developer',
    tools: ['Figma', 'WordPress'],
    description: 'Il nous a été demandé par binômes de concevoir et de développer des parcours utilisateurs au sein d\'un système d\'information, en combinant le développement web, le design d\'expérience et la gestion de projet. Nous devions créer un site WordPress de type "click & collect" pour une enseigne choisie en gardant la même charte graphique.',
    problem: '',
    process: '',
    color: '#06B6D4'
  },
  {
    id: '6',
    title: 'Créer pour une campagne de communication visuelle',
    category: 'UI/UX Design',
    cover: './assets/projets/lebarbare.png',
    images: [
      'https://images.unsplash.com/photo-1698440050363-1697e5f0277c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc2NTg3MTU1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1602221527282-dabc4778535b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGtpdCUyMGxpYnJhcnl8ZW58MXx8fHwxNzY1OTYxODc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1605606582336-96bec3c882e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwc29mdHdhcmUlMjBkZXNpZ258ZW58MXx8fHwxNzY1OTYxODc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1642261366979-704a073bef4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0b2tlbnMlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY1OTYxODc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    role: 'UI/UX Designer',
    tools: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
    description: 'Il nous a été demandé de créer et de mettre en place une campagne de communication visuelle pour la création d\'un \'Bar à thème\'. Le thème du bar et la ville m\'ont été imposés : Bar médiéval à Anvers en Belgique.',
    problem: '',
    process: '',
    color: '#8B5CF6'
  }
];

export const playlists: Playlist[] = [
  {
    id: 'top-france',
    name: 'Top France',
    icon: 'trophy',
    projects: ['1', '2', '3', '4', '5', '6']
  },
  {
    id: 'ui-ux',
    name: 'UX/UI Design',
    icon: 'palette',
    projects: ['1', '4', '6']
  },
  {
    id: 'web',
    name: 'Web',
    icon: 'code',
    projects: ['2', '5']
  },
  {
    id: 'motion',
    name: 'Motion & 3D',
    icon: 'film',
    projects: ['3', '5']
  }
];