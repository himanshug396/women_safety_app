import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeNearbyTaxiPage } from './home-nearby-taxi';

@NgModule({
  declarations: [
    HomeNearbyTaxiPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeNearbyTaxiPage),
  ],
})
export class HomeNearbyTaxiPageModule {}
