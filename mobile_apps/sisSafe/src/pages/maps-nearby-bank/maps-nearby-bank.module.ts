import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapsNearbyBankPage } from './maps-nearby-bank';

@NgModule({
  declarations: [
    MapsNearbyBankPage,
  ],
  imports: [
    IonicPageModule.forChild(MapsNearbyBankPage),
  ],
})
export class MapsNearbyBankPageModule {}
