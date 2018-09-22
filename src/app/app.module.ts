import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes} from '@angular/router';
import { AboutHomeComponent } from './components/about-home/about-home.component';
import { VisionHomeComponent } from './components/vision-home/vision-home.component';
import { MissionHomeComponent } from './components/mission-home/mission-home.component';
import { OurObjectsHomeComponent } from './components/our-objects-home/our-objects-home.component';

import { VisionComponent } from './components/vision/vision.component';
import { MissionComponent } from './components/mission/mission.component';
import { InitiativesComponent } from './components/initiatives/initiatives.component';
import { FoundersComponent } from './components/founders/founders.component';
import { AdvisoryBoardComponent } from './components/advisory-board/advisory-board.component';
import { DonateComponent } from './components/donate/donate.component';
import { GetInvolvedComponent } from './components/get-involved/get-involved.component';


const appRoutes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contacts', component:ContactsComponent},
  {path: 'vision', component:VisionComponent},
  {path: 'mission', component:MissionComponent},
  {path: 'initiatives', component:InitiativesComponent},
  {path: 'founders', component:FoundersComponent},
  {path: 'advisory-board', component:AdvisoryBoardComponent},
  {path: 'donate', component:DonateComponent},
  {path: 'get-involved', component:GetInvolvedComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: '**', redirectTo: '/home', pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    SliderComponent,
    ContactsComponent,
    AboutHomeComponent,
    VisionHomeComponent,
    VisionComponent,
    MissionHomeComponent,
    FoundersComponent,
    OurObjectsHomeComponent,
    MissionComponent,
    InitiativesComponent,
    AdvisoryBoardComponent,
    DonateComponent,
    GetInvolvedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, HomeComponent, AboutComponent, AboutHomeComponent, VisionHomeComponent,
  VisionComponent, MissionHomeComponent,
  OurObjectsHomeComponent,
  MissionComponent,
  FoundersComponent,
  InitiativesComponent,
  AdvisoryBoardComponent,
  DonateComponent,
  GetInvolvedComponent, ContactsComponent, FooterComponent]
})
export class AppModule { }
