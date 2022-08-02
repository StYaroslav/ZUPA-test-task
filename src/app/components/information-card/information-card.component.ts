import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LinearGradientInterface } from '../../interfaces/linear-gradient.interface';

@Component({
  selector: 'app-information-card',
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationCardComponent {
  @Input() background?: string;
  @Input() gradient?: LinearGradientInterface;
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() customTemplate? = false;

  get backgroundColor(): string {
    if (this.background) return this.background;
    else if (this.gradient) {
      return `linear-gradient(${this.gradient.firstColor},${this.gradient.secondColor})`;
    } else return 'white';
  }
}
