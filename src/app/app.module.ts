import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ServiceDetailComponent } from './components/service-detail/service-detail.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ElektroanlagenGewerbeComponent } from './components/elektroanlagen-gewerbe/elektroanlagen-gewerbe.component';
import { SolarComponent } from './components/solar/solar.component';
import { PhotovolticComponent } from './components/photovoltic/photovoltic.component';
import { ElektromobilComponent } from './components/elektromobil/elektromobil.component';
import { InformationenAnfordernComponent } from './components/informationen-anfordern/informationen-anfordern.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ServiceDetailComponent,
    ProjectsComponent,
    ContactUsComponent,
    NavbarComponent,
    BreadcrumbComponent,
    ElektroanlagenGewerbeComponent,
    SolarComponent,
    PhotovolticComponent,
    ElektromobilComponent,
    InformationenAnfordernComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
