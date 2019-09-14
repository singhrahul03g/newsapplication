import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { MenuComponent } from './pages/menu/menu.component';
import { FooterComponent } from './pages/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { CatnewsComponent } from './pages/catnews/catnews.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchComponent } from './pages/search/search.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { BusinessComponent } from './pages/business/business.component';
import { SportsComponent } from './pages/sports/sports.component';
import { TechnologyComponent } from './pages/technology/technology.component';
import { EntertainmentComponent } from './pages/entertainment/entertainment.component';
import { HealthComponent } from './pages/health/health.component';
import { ScienceComponent } from './pages/science/science.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    MainComponent,
    CatnewsComponent,
    SidebarComponent,
    AboutComponent,
    ContactComponent,
    SearchComponent,
    BusinessComponent,
    SportsComponent,
    TechnologyComponent,
    EntertainmentComponent,
    HealthComponent,
    ScienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    NgxPaginationModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
