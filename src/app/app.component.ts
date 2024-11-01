import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component'
import { SectionContainerComponent } from './components/section-container/section-container.component';
import { LinkCtaComponent } from './components/link-cta/link-cta.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SectionContainerComponent,
    LinkCtaComponent,
    ThumbnailComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  protected showThumbnail: boolean = true;

  constructor() {
    this.showThumbnail = window.innerWidth > 575;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.showThumbnail = window.innerWidth > 575;
  }

}
