import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MapsNearbyPage } from '../maps-nearby/maps-nearby';
import { ListNearbyPage } from '../list-nearby/list-nearby';
/**
 * Generated class for the HomeNearbyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home-nearby',
  templateUrl: 'home-nearby.html',
})
export class HomeNearbyPage {
  tab1Root: any = MapsNearbyPage;
  tab2Root: any = ListNearbyPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeNearbyPage');
  }

}
