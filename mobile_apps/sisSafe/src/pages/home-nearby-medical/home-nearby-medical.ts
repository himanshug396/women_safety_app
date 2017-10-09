import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MapsNearbyMedicalPage } from '../maps-nearby-medical/maps-nearby-medical';
import { ListNearbyPage } from '../list-nearby/list-nearby';
/**
 * Generated class for the HomeNearbyMedicalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-nearby-medical',
  templateUrl: 'home-nearby-medical.html',
})
export class HomeNearbyMedicalPage {
  tab1Root: any = MapsNearbyMedicalPage;
  tab2Root: any = ListNearbyPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeNearbyMedicalPage');
  }

}
