import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapsNearbyMedicalPage } from './maps-nearby-medical';

@NgModule({
  declarations: [
    MapsNearbyMedicalPage,
  ],
  imports: [
    IonicPageModule.forChild(MapsNearbyMedicalPage),
  ],
})
export class MapsNearbyMedicalPageModule {}
