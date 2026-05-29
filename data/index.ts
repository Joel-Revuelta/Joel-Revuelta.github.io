import { StackItem, DockItem, Project } from '../types';

export const programmingLanguages: StackItem[] = [
  { name: 'C', image: '/C.png' },
  { name: 'C++', image: '/C++.png' },
  { name: 'Python', image: '/Python.png' },
  { name: 'TypeScript', image: '/TypeScript.png' },
  { name: 'JavaScript', image: '/JavaScript.png' },
  { name: 'Java', image: '/Java.png' },
  { name: 'Go', image: '/Go.png' },
  { name: 'Haskell', image: '/Haskell.png' }
];

export const frontend: StackItem[] = [
  { name: 'Angular', image: '/Angular.ico' },
  { name: 'Next.js', image: '/Nextjs.png' },
  { name: 'HTML', image: '/HTML5.png' },
  { name: 'CSS', image: '/CSS.png' },
  { name: 'TypeScript', image: '/TypeScript.png' },
  { name: 'JavaScript', image: '/JavaScript.png' }
];

export const backend: StackItem[] = [
  { name: 'Node.js', image: '/Nodejs.png' },
  { name: 'NestJS', image: '/nestjs.svg' },
  { name: 'Express.js', image: '/Expressjs.png' },
  { name: 'FastAPI (Python)', image: '/fastapi.svg' },
  { name: 'Spring Boot (Java)', image: '/spring.png' },
  { name: 'Gin (Go)', image: '/gin.png' }
];

export const others: StackItem[] = [
  { name: 'Git', image: '/Git.png' },
  { name: 'Docker', image: '/Docker.png' },
  { name: 'Linux', image: '/Linux.png' }
];

export const dockItems: DockItem[] = [
  { label: 'Home', icon: '/user.svg', href: '#home' },
  { label: 'Projects', icon: '/code.svg', href: '#projects' },
  { label: 'Stack', icon: '/stack.svg', href: '#stack' }
];


export const projects: Project[] = [
  {
    title: 'City Matcher',
    subtitle: 'Winner project of the 2024 Extia Hackathon.',
    description: 'Developed an Angular-based web application that uses AI to match users with their ideal city based on personalized criteria such as cost of living, weather, job opportunities, and lifestyle preferences.',
    image: '/CityMatcher.png',
    techIcon: '/Angular.ico',
    techAlt: 'Angular',
    link: 'https://joel-revuelta.github.io/CityMatcher'
  },
  {
    title: 'RayTracer',
    description: 'A 3D rendering engine that simulates light behavior to generate photorealistic images. It traces rays from a virtual camera and computes their interactions with scene objects, materials, and lights to determine color and shading.',
    image: '/RayTracer.png',
    techIcon: '/C++.png',
    techAlt: 'C++',
    link: 'https://github.com/Joel-Revuelta/ray-tracer'
  },
  {
    title: 'Torch',
    description: 'Developed a neural network-based chessboard analyzer that generates, trains, and predicts game states from chess positions using FEN notation.',
    image: '/neural.avif',
    techIcon: '/Python.png',
    techAlt: 'Python',
    link: 'https://github.com/Joel-Revuelta/Torch'
  }
];
