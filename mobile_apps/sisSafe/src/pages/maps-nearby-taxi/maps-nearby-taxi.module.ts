import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapsNearbyTaxiPage } from './maps-nearby-taxi';

@NgModule({
  declarations: [
    MapsNearbyTaxiPage,
  ],
  imports: [
    IonicPageModule.forChild(MapsNearbyTaxiPage),
  ],
})
export class MapsNearbyTaxiPageModule {}
