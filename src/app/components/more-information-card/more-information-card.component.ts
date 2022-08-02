import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SiteThemeService } from '../../services/site-theme.service';

@Component({
  selector: 'app-more-information-card',
  templateUrl: './more-information-card.component.html',
  styleUrls: ['./more-information-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoreInformationCardComponent {
  @Input() listItems?: string[];

  constructor(public siteTheme: SiteThemeService) {}
}
