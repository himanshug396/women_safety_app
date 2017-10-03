import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomeNearbyPage} from '../home-nearby/home-nearby';

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
  type = ['police','hospital','public_place','atm_bank']; 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NearestWhatPage');
  }
  nearbyPolice(){
    this.navCtrl.push(HomeNearbyPage,{
      'type':this.type[0]
    })
  }
  nearbyHospital(){
    this.navCtrl.push(HomeNearbyPage,{
      'type':this.type[1]
    })
  
  }
  nearbyPublic(){
    this.navCtrl.push(HomeNearbyPage,{
      'type':this.type[2]
    })
  
  }
  nearbyBank(){
    this.navCtrl.push(HomeNearbyPage,{
      'type':this.type[3]
    })
  
  }

}
