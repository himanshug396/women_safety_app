import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MapsNearbyStationPage } from '../maps-nearby-station/maps-nearby-station';
import { ListNearbyPage } from '../list-nearby/list-nearby';
/**
 * Generated class for the HomeNearbyStationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-nearby-station',
  templateUrl: 'home-nearby-station.html',
})
export class HomeNearbyStationPage {
  tab1Root: any = MapsNearbyStationPage;
  tab2Root: any = ListNearbyPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeNearbyStationPage');
  }

  home(){
    location.reload();
  }
}
