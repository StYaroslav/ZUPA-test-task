import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { AppRoutingModule } from './app-routing.module';
import { CaseItemComponent } from './components/case-item/case-item.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { InformationCardComponent } from './components/information-card/information-card.component';
import { DividerComponent } from './components/divider/divider.component';
import { MoreInformationCardComponent } from './components/more-information-card/more-information-card.component';
import { CaseComponent } from './components/case/case.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
    CaseItemComponent,
    HomepageComponent,
    InformationCardComponent,
    DividerComponent,
    MoreInformationCardComponent,
    CaseComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
