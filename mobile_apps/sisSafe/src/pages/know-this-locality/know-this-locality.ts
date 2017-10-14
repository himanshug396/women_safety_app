import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// import { Storage } from '@ionic/storage';
import {LocalityDetailPage} from '../locality-detail/locality-detail';
import {HomePage} from '../home/home';
/**
 * Generated class for the KnowThisLocalityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-know-this-locality',
  templateUrl: 'know-this-locality.html',
})
export class KnowThisLocalityPage {
  location:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let location;
    if(navParams.get('location')){
      location = navParams.get('location');
    }
    else{
      location = (navCtrl as any).rootParams['location'];
    }
    
    let location_id;
    if(navParams.get('location_id')){
      location_id = navParams.get('location_id');
    }else{
      location_id = (navCtrl as any).rootParams['location_id'];
    }

    console.log(12345);
    console.log(location);
    console.log(location_id);
    this.location = location;
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KnowThisLocalityPage');
  }
  backToHome(){
    this.navCtrl.push(HomePage)
  }
  openlocalityDetial(){
    this.navCtrl.push(LocalityDetailPage);
  }

}
