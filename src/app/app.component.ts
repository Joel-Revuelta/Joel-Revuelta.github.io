import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DockComponent } from './components/dock/dock.component';
import { NavService } from './services/nav.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DockComponent
  ],
  providers: [
    NavService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'JoelRevuelta';
}
