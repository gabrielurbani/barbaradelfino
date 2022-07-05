import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavSocialComponent } from './components/nav-social/nav-social.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { TeatroComponent } from './components/teatro/teatro.component';
import { CardLinkComponent } from './components/card-link/card-link.component';
import { FooterComponent } from './components/footer/footer.component';
import { RedesComponent } from './components/redes/redes.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavSocialComponent,
    HomeComponent,
    ProjectsComponent,
    NavbarComponent,
    HeaderComponent,
    SliderComponent,
    TeatroComponent,
    CardLinkComponent,
    FooterComponent,
    RedesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
