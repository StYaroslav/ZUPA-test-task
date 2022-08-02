import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-divider',
  template:
    '<div [style.background-color]="color" [style.height.px]="height" class="spa-divider"></div>',
  styleUrls: ['./divider.component.scss'],
})
export class DividerComponent {
  @Input() height = 1;
  @Input() color = '#d1d0c8';
}
