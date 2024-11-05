import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  standalone: true,
  imports: [NgClass],
  templateUrl: './thumbnail.component.html',
  styleUrl: './thumbnail.component.scss'
})
export class ThumbnailComponent {
  @Input() public thumbnail: string = 'img/thumbnail.jpg';
  @Input() public width: number = 40;
  @Input() public height: number = 40;
  @Input() public hasShadow: boolean = false;
  @Input() public circle: boolean = false;
}
