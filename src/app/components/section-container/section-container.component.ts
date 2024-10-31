import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-container',
  standalone: true,
  imports: [],
  templateUrl: './section-container.component.html',
  styleUrl: './section-container.component.scss'
})
export class SectionContainerComponent {
  @Input() public bgColorClass: string = 'bg-c-secondary';
}
