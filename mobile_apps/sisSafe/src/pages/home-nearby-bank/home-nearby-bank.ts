import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MapsNearbyBankPage } from '../maps-nearby-bank/maps-nearby-bank';
import { ListNearbyPage } from '../list-nearby/list-nearby';
/**
 * Generated class for the HomeNearbyBankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-nearby-bank',
  templateUrl: 'home-nearby-bank.html',
})
export class HomeNearbyBankPage {
  tab1Root: any = MapsNearbyBankPage;
  tab2Root: any = ListNearbyPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeNearbyBankPage');
  }

  home(){
    location.reload();
  }
}
