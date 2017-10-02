import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LocationsProvider } from '../../providers/locations/locations';

/**
 * Generated class for the ListNearbyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-list-nearby',
  templateUrl: 'list-nearby.html',
})
export class ListNearbyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public locations: LocationsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListNearbyPage');
  }

}
