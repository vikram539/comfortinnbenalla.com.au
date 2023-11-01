import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RoomsPageComponent } from './pages/rooms-page/rooms-page.component';
import { RoomsServicesComponent } from './pages/rooms-services/rooms-services.component';
import { RoomsFacilitiesComponent } from './pages/rooms-facilities/rooms-facilities.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { AttractionPageComponent } from './pages/attraction-page/attraction-page.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { NavigationComponent } from './includes/navigation/navigation.component';
import { CarouselComponent } from './includes/carousel/carousel.component';
import { RoomSectionComponent } from './includes/room-section/room-section.component';
import { HomeRoomServicesSectionComponent } from './includes/home-room-services-section/home-room-services-section.component';
import { HomeGallerySectionComponent } from './includes/home-gallery-section/home-gallery-section.component';
import { HomeAttractionSectionComponent } from './includes/home-attraction-section/home-attraction-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RoomsPageComponent,
    RoomsServicesComponent,
    RoomsFacilitiesComponent,
    ContactUsComponent,
    GalleryPageComponent,
    AttractionPageComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    CarouselComponent,
    RoomSectionComponent,
    HomeRoomServicesSectionComponent,
    HomeGallerySectionComponent,
    HomeAttractionSectionComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
