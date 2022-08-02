import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';
import { SiteThemeService } from '../../services/site-theme.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainHeaderComponent implements OnInit {
  isMenuOpened = false;
  isDesktop!: boolean;

  constructor(public renderer: Renderer2, public siteTheme: SiteThemeService) {}

  ngOnInit(): void {
    this.isDesktop = window.innerWidth >= 768;
  }

  toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
    this.isMenuOpened
      ? this.renderer.addClass(document.body, 'lock')
      : this.renderer.removeClass(document.body, 'lock');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktop = event.target.innerWidth >= 768;
  }
}
