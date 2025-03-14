import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { StackItem } from '../../interfaces/Stack.interface';
import { NavService } from '../../services/nav.service';

@Component({
  standalone: true,
  imports: [
    AvatarModule,
    ButtonModule,
    CardModule,
    AccordionModule,
    DividerModule,
    TagModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  @ViewChild('projects') projectsElement!: ElementRef;
  @ViewChild('stack') stackElement!: ElementRef;


  private navService = inject(NavService);

  public programingLanguages: StackItem[] = [
    {
      name: 'C',
      image: 'C.png'
    },
    {
      name: 'C++',
      image: 'C++.png'
    },
    {
      name: 'Python',
      image: 'Python.png'
    },
    {
      name: 'TypeScript',
      image: 'TypeScript.png'
    },
    {
      name: 'JavaScript',
      image: 'JavaScript.png'
    },
    {
      name: 'Haskell',
      image: 'Haskell.png'
    },
    {
      name: 'Assembly',
      image: 'Assembly.png'
    },
    {
      name: 'Java',
      image: 'Java.png'
    }
  ];

  frontend: StackItem[] = [
    {
      name: 'Angular',
      image: 'Angular.ico'
    },
    {
      name: 'Next.js',
      image: 'Nextjs.png'
    },
    {
      name: 'HTML',
      image: 'HTML5.png'
    },
    {
      name: 'CSS',
      image: 'CSS.png'
    },
    {
      name: 'TypeScript',
      image: 'TypeScript.png'
    },
    {
      name: 'JavaScript',
      image: 'JavaScript.png'
    }
  ];

  backend: StackItem[] = [
    {
      name: 'Node.js',
      image: 'Nodejs.png'
    },
    {
      name: 'Express.js',
      image: 'Expressjs.png'
    },
    {
      name: 'Next.js',
      image: 'Nextjs.png'
    },
    {
      name: 'Python',
      image: 'Python.png'
    },
    {
      name: 'Java',
      image: 'Java.png'
    }
  ];

  others: StackItem[] = [
    {
      name: 'Git',
      image: 'Git.png'
    },
    {
      name: 'Docker',
      image: 'Docker.png'
    },
    {
      name: 'Linux',
      image: 'Linux.png'
    }
  ];

  ngOnInit(): void {
      this.navService.scrollToIdEvent.subscribe((id: string) => {
        if (id === 'home')
          window.scrollTo({ top: 0, behavior: 'smooth' });
        else if (id === 'projects')
          this.projectsElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
        else if (id === 'stack')
          this.stackElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
      });
  }

}
