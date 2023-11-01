import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RoomsServicesComponent } from './pages/rooms-services/rooms-services.component';
import { RoomsFacilitiesComponent } from './pages/rooms-facilities/rooms-facilities.component';
import { RoomsPageComponent } from './pages/rooms-page/rooms-page.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'rooms', component: RoomsPageComponent},
  {path: 'facilities', component: RoomsFacilitiesComponent},
  {path: 'room-services', component: RoomsServicesComponent},
  {path: 'contact', component: ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
