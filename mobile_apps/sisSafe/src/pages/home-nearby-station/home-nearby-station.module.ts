import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeNearbyStationPage } from './home-nearby-station';

@NgModule({
  declarations: [
    HomeNearbyStationPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeNearbyStationPage),
  ],
})
export class HomeNearbyStationPageModule {}
