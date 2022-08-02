import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LinearGradientInterface } from '../../interfaces/linear-gradient.interface';

@Component({
  selector: 'app-case-item',
  templateUrl: './case-item.component.html',
  styleUrls: ['./case-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseItemComponent {
  @Input() background?: string;
  @Input() gradient?: LinearGradientInterface;
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() isPreview = false;
  @Input() pathToImage: string = 'assets/images/boy.png';

  get backgroundColor(): string {
    if (this.background) return this.background;
    else if (this.gradient) {
      return `linear-gradient(${this.gradient.firstColor},${this.gradient.secondColor})`;
    } else return 'white';
  }
}
