import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  public caca = false;

  cacaF() {
    console.log('caca');
  }

}
