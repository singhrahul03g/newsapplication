import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { CatnewsComponent } from './pages/catnews/catnews.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SearchComponent } from './pages/search/search.component';
import { BusinessComponent } from './pages/business/business.component';
import { SportsComponent } from './pages/sports/sports.component';
import { TechnologyComponent } from './pages/technology/technology.component';
import { EntertainmentComponent } from './pages/entertainment/entertainment.component';
import { HealthComponent } from './pages/health/health.component';
import { ScienceComponent } from './pages/science/science.component';


const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'sports',component:SportsComponent},
  {path:'business',component:BusinessComponent},
  {path:'entertainment',component:EntertainmentComponent},
  {path:'health',component:HealthComponent},
  {path:'science',component:ScienceComponent},
  {path:'technology',component:TechnologyComponent},
  {path:'about-us',component:AboutComponent},
  {path:'contact-us',component:ContactComponent},
  {path:'search/:ser',component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
