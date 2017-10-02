import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeNearbyPage} from '../home-nearby/home-nearby';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  nearbyPlaces(){
    this.navCtrl.push(HomeNearbyPage);
  }
}
