import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeNearbyMedicalPage } from './home-nearby-medical';

@NgModule({
  declarations: [
    HomeNearbyMedicalPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeNearbyMedicalPage),
  ],
})
export class HomeNearbyMedicalPageModule {}
