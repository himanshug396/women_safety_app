import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeNearbyPage} from '../home-nearby/home-nearby';

import { NearestWhatPage} from '../nearest-what/nearest-what';
import {AlertButtonPage} from '../alert-button/alert-button';
import {DangerButtonPage} from '../danger-button/danger-button';
import {KnowThisLocalityPage} from '../know-this-locality/know-this-locality';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

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
}
