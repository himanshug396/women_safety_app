import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import {LocalityDetailPage} from '../locality-detail/locality-detail';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage) {
  let location = this.storage.get('location').then(()=>{
    this.location = location;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KnowThisLocalityPage');
  }
  openlocalityDetial(){
    this.navCtrl.push(LocalityDetailPage);
  }

}
