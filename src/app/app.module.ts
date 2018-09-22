import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DictaatComponent } from './dictaat.component';
import { DictaatEntryComponent } from './dictaat-entry.component';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes} from '@angular/router';
import { AboutHomeComponent } from './about-home/about-home.component';
import { VisionHomeComponent } from './vision-home/vision-home.component';
import { MissionHomeComponent } from './mission-home/mission-home.component';
import { OurObjectsHomeComponent } from './our-objects-home/our-objects-home.component';

import { VisionComponent } from './vision/vision.component';
import { MissionComponent } from './mission/mission.component';
import { InitiativesComponent } from './initiatives/initiatives.component';
import { FoundersComponent } from './founders/founders.component';
import { AdvisoryBoardComponent } from './advisory-board/advisory-board.component';
import { DonateComponent } from './donate/donate.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';


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
    GetInvolvedComponent,
    DictaatComponent, 
    DictaatEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [DictaatComponent, DictaatEntryComponent]
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
