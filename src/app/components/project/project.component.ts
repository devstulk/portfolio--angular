import { Component, HostListener } from '@angular/core';
import { ThumbnailComponent } from '../thumbnail/thumbnail.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    ThumbnailComponent,
    CardComponent,
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  protected showThumbnail: boolean = true;

  constructor() {
    this.showThumbnail = window.innerWidth > 575;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.showThumbnail = window.innerWidth > 575;
  }
}
