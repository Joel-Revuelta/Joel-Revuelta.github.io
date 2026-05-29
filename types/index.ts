export interface StackItem {
  name: string;
  image: string;
}

export interface DockItem {
  label: string;
  icon: string;
  href: string;
}

export interface Project {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  techIcon: string;
  techAlt: string;
  link: string;
}

