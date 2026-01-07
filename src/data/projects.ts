import { Project, Playlist } from '../types';


export const projects: Project[] = [
  {
    id: '1',
    title: 'Redesign E-commerce Mobile',
    category: 'UI/UX Design',
    cover: './assets/projets/danniel-wellington.png',
    images: [
      'https://images.unsplash.com/photo-1742836531239-1fe146bf7e3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBtb2JpbGUlMjBkZXNpZ258ZW58MXx8fHwxNzY1OTYxODY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1758526213756-9aecbea6bcfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzaG9wcGluZyUyMGFwcHxlbnwxfHx8fDE3NjU5NjE4Njh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1726137569872-28e3f796d4a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwYXltZW50JTIwY2hlY2tvdXR8ZW58MXx8fHwxNzY1OTUzNDcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1758520387659-9956c4516891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcmV0YWlsJTIwbW9iaWxlfGVufDF8fHx8MTc2NTk2MTg2OHww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    role: 'Lead UX/UI Designer',
    tools: ['Figma', 'Principle', 'Adobe XD'],
    description: 'Refonte complète de l\'expérience mobile pour une plateforme e-commerce de mode, avec focus sur la conversion et l\'engagement utilisateur.',
    problem: 'Le taux de conversion mobile était 40% inférieur au desktop. Les utilisateurs abandonnaient leur panier pendant le processus de checkout.',
    process: 'Audit UX complet, interviews utilisateurs (15 personnes), tests A/B, prototypage itératif, tests utilisateurs avec 30 participants.',
    result: 'Augmentation de 65% du taux de conversion mobile, réduction de 50% du taux d\'abandon panier, score SUS passé de 68 à 87.',
    color: '#1DB954'
  },
  {
    id: '2',
    title: 'Dashboard Analytics SaaS',
    category: 'Web Development',
    cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBjaGFydHxlbnwxfHx8fDE3NjU4OTQ4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1584291527908-033f4d6542c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMHNjcmVlbnxlbnwxfHx8fDE3NjU5NDM3MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1ldHJpY3MlMjBncmFwaHxlbnwxfHx8fDE3NjU5NjE4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwcGxhdGZvcm0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY1OTYwNDY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    role: 'Full Stack Developer',
    tools: ['React', 'Node.js', 'D3.js', 'PostgreSQL'],
    description: 'Développement d\'un dashboard analytics temps réel pour une plateforme SaaS B2B avec visualisations de données complexes.',
    problem: 'Les clients n\'avaient pas de vision claire de leurs métriques business en temps réel. Les rapports étaient générés manuellement chaque semaine.',
    process: 'Architecture micro-services, design system React, intégration WebSocket pour le temps réel, optimisation des requêtes SQL.',
    result: 'Dashboard utilisé quotidiennement par 85% des clients, réduction de 90% du temps de génération de rapports, satisfaction client +45%.',
    color: '#9333EA'
  },
  {
    id: '3',
    title: 'Brand Motion Identity',
    category: 'Motion Design',
    cover: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1764258560286-b3aa856c8ff0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBncmFwaGljcyUyMGRlc2lnbnxlbnwxfHx8fDE3NjU5NTgxMTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1764601841403-5c43713923c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwYW5pbWF0aW9ufGVufDF8fHx8MTc2NTk2MTg3MHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1758726064228-c669ce0966a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpbyUyMGJyYW5kaW5nfGVufDF8fHx8MTc2NTk2MTg3MXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1639701386739-449a0e789367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY1OTUwODc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    role: 'Motion Designer',
    tools: ['After Effects', 'Cinema 4D', 'Premiere Pro'],
    description: 'Création d\'une identité visuelle animée complète pour une startup tech, incluant logo animé, transitions et templates.',
    problem: 'La marque manquait de dynamisme et de modernité. Pas de cohérence visuelle sur les supports digitaux.',
    process: 'Direction artistique, storyboarding, animation 2D/3D, création de guidelines motion, templates réutilisables.',
    result: 'Identité déployée sur tous les canaux digitaux, engagement social media +120%, reconnaissance de marque améliorée de 80%.',
    color: '#F59E0B'
  },
  {
    id: '4',
    title: 'Application Fitness & Wellbeing',
    category: 'UI/UX Design',
    cover: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1748280621226-91f9530fc329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwJTIwd29ya291dHxlbnwxfHx8fDE3NjU5NjExNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1633613287441-3f72304088ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjB0cmFja2luZyUyMG1vYmlsZXxlbnwxfHx8fDE3NjU5NjE4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1765728617805-b9f22d64e5b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVyY2lzZSUyMHRyYWluaW5nJTIwZ3ltfGVufDF8fHx8MTc2NTk2MTg3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1643064723677-e0c0ab9d9e54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMGxpZmVzdHlsZSUyMGFwcHxlbnwxfHx8fDE3NjU5NjE4NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    role: 'Product Designer',
    tools: ['Figma', 'Protopie', 'Maze'],
    description: 'Design d\'une application mobile de coaching fitness personnalisé avec suivi de progression et gamification.',
    problem: 'Les utilisateurs manquent de motivation pour maintenir une routine fitness. Taux de rétention faible après 30 jours.',
    process: 'Research utilisateur, persona mapping, user journey, wireframing, prototypage haute fidélité, tests utilisateurs.',
    result: 'Rétention à 30 jours passée de 22% à 68%, sessions quotidiennes moyennes multipliées par 3, rating App Store 4.8/5.',
    color: '#EC4899'
  },
  {
    id: '5',
    title: 'Site Web Portfolio 3D',
    category: '3D & Web',
    cover: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1667674557680-57d5001715b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHdlYiUyMGRlc2lnbnxlbnwxfHx8fDE3NjU5NjE4NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1746292506315-e346cba2af48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJnbCUyMGludGVyYWN0aXZlJTIwZXhwZXJpZW5jZXxlbnwxfHx8fDE3NjU5NjE4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1641098872650-beaa1c8589fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHJlbmRlcmluZyUyMHBvcnRmb2xpb3xlbnwxfHx8fDE3NjU5NjE4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1603201667246-3c45012c6d17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHdlYnNpdGV8ZW58MXx8fHwxNzY1OTYxODc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    role: '3D Artist & Developer',
    tools: ['Three.js', 'Blender', 'React', 'GSAP'],
    description: 'Portfolio immersif en 3D avec expérience interactive et animations WebGL pour un studio de création.',
    problem: 'Le portfolio précédent ne reflétait pas le niveau d\'expertise technique et créative du studio.',
    process: 'Modélisation 3D, optimisation WebGL, animation interactive, progressive enhancement, optimisation performance.',
    result: 'Temps passé sur le site +250%, taux de rebond réduit de 45%, génération de 12 leads qualifiés en 2 mois.',
    color: '#06B6D4'
  },
  {
    id: '6',
    title: 'Design System Enterprise',
    category: 'UI/UX Design',
    cover: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1698440050363-1697e5f0277c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc2NTg3MTU1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1602221527282-dabc4778535b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGtpdCUyMGxpYnJhcnl8ZW58MXx8fHwxNzY1OTYxODc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1605606582336-96bec3c882e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwc29mdHdhcmUlMjBkZXNpZ258ZW58MXx8fHwxNzY1OTYxODc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1642261366979-704a073bef4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0b2tlbnMlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY1OTYxODc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    role: 'Design System Lead',
    tools: ['Figma', 'Storybook', 'Zeroheight'],
    description: 'Création et maintenance d\'un design system complet pour une entreprise de 500+ employés avec 12 produits.',
    problem: 'Incohérence visuelle entre les produits, duplication du travail de design, dette technique UX croissante.',
    process: 'Audit design, tokenisation, création de composants atomiques, documentation, formation des équipes.',
    result: 'Temps de design réduit de 60%, cohérence visuelle sur 100% des produits, velocity des équipes dev +40%.',
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