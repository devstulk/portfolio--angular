import { NgClass } from '@angular/common';
import { AfterViewInit, Component, Input } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [NgClass],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements AfterViewInit {
  @Input() public card: boolean = false;
  @Input() public icon!: string;
  @Input() public tooltipText: string = '';

  ngAfterViewInit() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(tooltipTriggerEl => {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }
}
