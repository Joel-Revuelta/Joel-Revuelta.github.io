import { StackGroup, Project } from '../types';

export const stackGroups: StackGroup[] = [
  {
    title: 'Languages',
    items: [
      { name: 'C', image: '/C.png' },
      { name: 'C++', image: '/C++.png' },
      { name: 'Python', image: '/Python.png' },
      { name: 'TypeScript', image: '/TypeScript.png' },
      { name: 'JavaScript', image: '/JavaScript.png' },
      { name: 'Java', image: '/Java.png' },
      { name: 'Go', image: '/Go.png' },
      { name: 'Haskell', image: '/Haskell.png' }
    ]
  },
  {
    title: 'Frameworks',
    items: [
      { name: 'Angular', image: '/Angular.ico' },
      { name: 'Next.js', image: '/Nextjs.png' },
      { name: 'NestJS', image: '/nestjs.svg' },
      { name: 'Node.js', image: '/Nodejs.png' },
      { name: 'Express.js', image: '/Expressjs.png' },
      { name: 'FastAPI', image: '/fastapi.svg' },
      { name: 'Spring Boot', image: '/spring.png' },
      { name: 'Gin', image: '/gin.png' }
    ]
  },
  {
    title: 'Tools & infrastructure',
    items: [
      { name: 'Docker', image: '/Docker.png' },
      { name: 'Git', image: '/Git.png' },
      { name: 'GitHub Actions', image: '/icons/githubactions.svg' },
      { name: 'Linux', image: '/Linux.png' },
      { name: 'CMake', image: '/icons/cmake.svg' },
      { name: 'Conan', image: '/icons/conan.svg' },
      { name: 'CUDA', image: '/icons/nvidia.svg' },
      { name: 'SFML', image: '/icons/sfml.svg' },
      { name: 'AI integration', image: '/icons/ai.svg' }
    ]
  },
  {
    title: 'Databases',
    items: [
      { name: 'PostgreSQL', image: '/icons/postgresql.svg' },
      { name: 'MongoDB', image: '/icons/mongodb.svg' },
      { name: 'SQL', image: '/icons/sql.svg' }
    ]
  }
];

export const projects: Project[] = [
  {
    title: 'RayTracer',
    description: 'A C++20 path tracer with a plugin architecture: primitives, materials, lights, GUI backends and renderers all load at runtime. It ships with a multithreaded CPU renderer and a CUDA GPU renderer with full feature parity, plus interactive SFML and OpenGL previewers. BVH acceleration, OBJ/MTL meshes, textures, environment lighting, depth of field and area lights power the 34 included scenes, rendered up to 8K.',
    image: '/RayTracer.webp',
    imageWidth: 1920,
    imageHeight: 1080,
    techIcons: [{ image: '/C++.png', alt: 'C++' }],
    link: 'https://github.com/Joel-Revuelta/ray-tracer'
  },
  {
    title: 'FAS',
    subtitle: 'AI contract generation for freelancers and small agencies in Spain.',
    description: 'FAS turns client video calls into contract drafts. It joins the call, transcribes the conversation and uses AI to extract the agreed terms into a structured service agreement both sides can review before signing. Built with Go, PostgreSQL and Next.js.',
    image: '/FAS.webp',
    imageWidth: 1600,
    imageHeight: 1000,
    techIcons: [
      { image: '/Go.png', alt: 'Go' },
      { image: '/icons/postgresql.svg', alt: 'PostgreSQL' },
      { image: '/Nextjs.png', alt: 'Next.js' },
      { image: '/icons/ai.svg', alt: 'AI' }
    ],
    link: 'https://fas-ai.net'
  },
  {
    title: 'AREA',
    subtitle: 'EPITECH team project — Full-stack developer.',
    description: 'An IFTTT-style automation platform built as a five-person team project. Connect services through OAuth2, then link Actions to REActions in a visual editor to automate workflows. FastAPI microservices with PostgreSQL handle the backend, a Next.js web client provides the dashboard, and a React Native app brings it to Android — all orchestrated with Docker Compose.',
    image: '/Area.svg',
    imageWidth: 1600,
    imageHeight: 900,
    techIcons: [
      { image: '/Nextjs.png', alt: 'Next.js' },
      { image: '/fastapi.svg', alt: 'FastAPI' },
      { image: '/Docker.png', alt: 'Docker' }
    ],
    link: 'https://github.com/Joel-Revuelta/area'
  },
  {
    title: 'Syscall Sandbox',
    description: 'A Linux syscall sandbox combining an eBPF monitor, a kernel module, and ptrace to observe, track, and block system calls across entire process trees. Hooks the raw_syscalls and sched_process_fork tracepoints and exposes control through /proc/syscall_sandbox.',
    image: '/Linux-kernel.webp',
    imageWidth: 1200,
    imageHeight: 550,
    techIcons: [{ image: '/C.png', alt: 'C' }],
    link: 'https://github.com/Joel-Revuelta/syscall-sandbox'
  },
  {
    title: 'Torch',
    description: 'Developed a neural network-based chessboard analyzer that generates, trains, and predicts game states from chess positions using FEN notation.',
    image: '/neural.avif',
    imageWidth: 906,
    imageHeight: 581,
    techIcons: [{ image: '/Python.png', alt: 'Python' }],
    link: 'https://github.com/Joel-Revuelta/Torch'
  },
  {
    title: 'City Matcher',
    subtitle: 'Winner of the 2024 Extia Hackathon. Rebuilt as a production-grade relocation decision engine.',
    description: 'City Matcher ranks 42 European cities against a personal brief covering budget, climate, safety, healthcare, work and walkability. The matching engine is deterministic and versioned: climate comes from Open-Meteo, country context from the World Bank and costs from a transparent model. It includes a searchable city index, side-by-side comparison, climate charts, city sheets and an anonymous local shortlist. Built with Next.js, React, TypeScript and Tailwind CSS; optional AI parses natural language but never invents a city score.',
    image: '/CityMatcher.webp',
    imageWidth: 1623,
    imageHeight: 937,
    techIcons: [
      { image: '/Nextjs.png', alt: 'Next.js' },
      { image: '/TypeScript.png', alt: 'TypeScript' },
      { image: '/icons/ai.svg', alt: 'AI integration' }
    ],
    link: 'https://city-matcher-sigma.vercel.app'
  }
];
