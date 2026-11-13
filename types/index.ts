export interface StackItem {
  name: string;
  image: string;
}

export interface StackGroup {
  title: string;
  items: StackItem[];
}

export interface TechIcon {
  image: string;
  alt: string;
}

export interface Project {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  techIcons: TechIcon[];
  link: string;
}
