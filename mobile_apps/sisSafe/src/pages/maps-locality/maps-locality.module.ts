import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapsLocalityPage } from './maps-locality';

@NgModule({
  declarations: [
    MapsLocalityPage,
  ],
  imports: [
    IonicPageModule.forChild(MapsLocalityPage),
  ],
})
export class MapsLocalityPageModule {}
