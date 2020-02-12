import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { AboutModule } from './components/about/about.module';
import { ContactModule } from './components/contact/contact.module';
import { CopyrightModule } from './components/copyright/copyright.module';
import { FooterModule } from './components/footer/footer.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { PortfolioModule } from './components/portfolio/portfolio.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    AboutModule,
    ContactModule,
    CopyrightModule,
    FooterModule,
    NavbarModule,
    PortfolioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
