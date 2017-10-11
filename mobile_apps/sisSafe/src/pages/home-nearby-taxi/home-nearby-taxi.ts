import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MapsNearbyTaxiPage } from '../maps-nearby-taxi/maps-nearby-taxi';
import { ListNearbyPage } from '../list-nearby/list-nearby';
/**
 * Generated class for the HomeNearbyTaxiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-nearby-taxi',
  templateUrl: 'home-nearby-taxi.html',
})
export class HomeNearbyTaxiPage {
  tab1Root: any = MapsNearbyTaxiPage;
  tab2Root: any = ListNearbyPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeNearbyTaxiPage');
  }

  home(){
    location.reload();
  }
}
