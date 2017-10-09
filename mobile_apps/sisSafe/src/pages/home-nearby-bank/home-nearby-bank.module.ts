import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeNearbyBankPage } from './home-nearby-bank';

@NgModule({
  declarations: [
    HomeNearbyBankPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeNearbyBankPage),
  ],
})
export class HomeNearbyBankPageModule {}
