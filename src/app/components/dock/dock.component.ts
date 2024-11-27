import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DockModule } from 'primeng/dock';
import { MenuItem } from 'primeng/api';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-dock',
  standalone: true,
  imports: [
    CommonModule,
    DockModule,
  ],
  templateUrl: './dock.component.html',
  styleUrl: './dock.component.scss'
})
export class DockComponent {

  public showDock: boolean = true;
  private lastScrollTop: number = 0;

  private navService = inject(NavService);

  public items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'user.svg',
      command: () => {
        this.navService.scrollToId('home');
      }
    },
    {
        label: 'Projects',
        icon: 'code.svg',
        // routerLink: ['/home/#projects'],
        command: () => {
          this.navService.scrollToId('projects');
        }
    },
    {
        label: 'Stack',
        icon: 'stack.svg',
        command: () => {
          this.navService.scrollToId('stack');
        }
    }
  ];

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    let st = window.scrollY || document.documentElement.scrollTop;
    if (st > this.lastScrollTop) {
      this.showDock = false;
    } else {
      this.showDock = true;
    }
    this.lastScrollTop = st <= 0 ? 0 : st;
  }

}
