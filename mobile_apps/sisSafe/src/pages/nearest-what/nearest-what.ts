import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomeNearbyPage} from '../home-nearby/home-nearby';

import { HomeNearbyBankPage } from '../home-nearby-bank/home-nearby-bank';
import { HomeNearbyMedicalPage } from '../home-nearby-medical/home-nearby-medical';
import { HomeNearbyStationPage } from '../home-nearby-station/home-nearby-station';
import { HomeNearbyTaxiPage} from '../home-nearby-taxi/home-nearby-taxi';



/**
 * Generated class for the NearestWhatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-nearest-what',
  templateUrl: 'nearest-what.html',
})
export class NearestWhatPage {
  type = ['police','hospital','doctor','atm','bank','transit_station','taxi_stand']; 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
     
    console.log('ionViewDidLoad NearestWhatPage');
  }
  nearbyPolice(){
    this.navCtrl.push(HomeNearbyPage)
  }
  nearbyHospital(){
    this.navCtrl.push(HomeNearbyMedicalPage)
  
  }
  nearbyBank(){
    this.navCtrl.push(HomeNearbyBankPage)
  }
  nearbyTravel(){
    this.navCtrl.push(HomeNearbyStationPage)
  }
  nearbyTaxi(){
    this.navCtrl.push(HomeNearbyTaxiPage)
  }
  

}
