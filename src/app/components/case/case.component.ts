import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SiteThemeService } from '../../services/site-theme.service';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseComponent implements OnInit, OnDestroy {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private siteTheme: SiteThemeService
  ) {}

  ngOnInit(): void {
    this.document.body.classList.add('dark');
    this.document.body.style.backgroundColor = '#dc0a1b';
    this.siteTheme.isDarkMode = true;
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('dark');
    this.document.body.style.backgroundColor = '#f6f6f4';
    this.siteTheme.isDarkMode = false;
  }
}
