import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ElektroanlagenGewerbeComponent } from './components/elektroanlagen-gewerbe/elektroanlagen-gewerbe.component';
import { SolarComponent } from './components/solar/solar.component';
import { InformationenAnfordernComponent } from './components/informationen-anfordern/informationen-anfordern.component';
import { PhotovolticComponent } from './components/photovoltic/photovoltic.component';
import { ElektromobilComponent } from './components/elektromobil/elektromobil.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: ProjectsComponent },

  { path: 'services', component: ServicesComponent },
  {
    path: 'gewerbe', component: ElektroanlagenGewerbeComponent
  },

  {
    path: 'solar', component: SolarComponent
  },
  {
    path: 'information', component: InformationenAnfordernComponent
  },
  {
    path: 'photovotalic', component: PhotovolticComponent
  },
  {
    path: 'electromobilit', component: ElektromobilComponent
  },
  { path: 'contact', component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
