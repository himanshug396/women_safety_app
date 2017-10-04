import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { NearestWhatPage} from '../nearest-what/nearest-what';
import {AlertButtonPage} from '../alert-button/alert-button';
import {DangerButtonPage} from '../danger-button/danger-button';
import {KnowThisLocalityPage} from '../know-this-locality/know-this-locality';

import { ClickAndUploadPage } from '../click-and-upload/click-and-upload';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lastImage: string = null;
  constructor(public navCtrl: NavController,) {
  }
  nearbyPlaces(){
    this.navCtrl.push(NearestWhatPage);
  }
  dangerbutton(){
    this.navCtrl.push(DangerButtonPage);
  }
  alertbutton(){
    this.navCtrl.push(AlertButtonPage);
    
  }
  knowthislocality(){
    this.navCtrl.push(KnowThisLocalityPage);
  }
  ClickAndUpload(){
    this.navCtrl.push(ClickAndUploadPage);
  }
}
