import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapsNearbyStationPage } from './maps-nearby-station';

@NgModule({
  declarations: [
    MapsNearbyStationPage,
  ],
  imports: [
    IonicPageModule.forChild(MapsNearbyStationPage),
  ],
})
export class MapsNearbyStationPageModule {}
