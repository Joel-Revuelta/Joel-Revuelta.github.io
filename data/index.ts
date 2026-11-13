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
    techIcons: [{ image: '/Angular.ico', alt: 'Angular' }],
    link: 'https://joel-revuelta.github.io/CityMatcher'
  },
  {
    title: 'AREA',
    subtitle: 'Epitech team project — Fullstack Developer.',
    description: 'An IFTTT-style automation platform built as a five-person team project. Connect services through OAuth2, then link Actions to REActions in a visual editor to automate workflows. FastAPI microservices with PostgreSQL handle the backend, a Next.js web client provides the dashboard, and a React Native app brings it to Android — all orchestrated with Docker Compose.',
    image: '/Area.svg',
    techIcons: [
      { image: '/Nextjs.png', alt: 'Next.js' },
      { image: '/fastapi.svg', alt: 'FastAPI' },
      { image: '/Docker.png', alt: 'Docker' }
    ],
    link: 'https://github.com/Joel-Revuelta/area'
  },
  {
    title: 'RayTracer',
    description: 'A C++20 path tracer with a plugin architecture: primitives, materials, lights, GUI backends and renderers all load at runtime. It ships with a multithreaded CPU renderer and a CUDA GPU renderer with full feature parity, plus interactive SFML and OpenGL previewers. BVH acceleration, OBJ/MTL meshes, textures, environment lighting, depth of field and area lights power the 34 included scenes, rendered up to 8K.',
    image: '/RayTracer.webp',
    techIcons: [{ image: '/C++.png', alt: 'C++' }],
    link: 'https://github.com/Joel-Revuelta/ray-tracer'
  },
  {
    title: 'Syscall Sandbox',
    description: 'A Linux syscall sandbox combining an eBPF monitor, a kernel module, and ptrace to observe, track, and block system calls across entire process trees. Hooks the raw_syscalls and sched_process_fork tracepoints and exposes control through /proc/syscall_sandbox.',
    image: '/Linux-kernel.png',
    techIcons: [{ image: '/C.png', alt: 'C' }],
    link: 'https://github.com/Joel-Revuelta/syscall-sandbox'
  },
  {
    title: 'Torch',
    description: 'Developed a neural network-based chessboard analyzer that generates, trains, and predicts game states from chess positions using FEN notation.',
    image: '/neural.avif',
    techIcons: [{ image: '/Python.png', alt: 'Python' }],
    link: 'https://github.com/Joel-Revuelta/Torch'
  }
];
