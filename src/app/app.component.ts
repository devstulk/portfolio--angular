import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component'
import { SectionContainerComponent } from './components/section-container/section-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SectionContainerComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}
