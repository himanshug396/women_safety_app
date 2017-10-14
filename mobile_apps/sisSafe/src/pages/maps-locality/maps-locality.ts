import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MapsPage} from '../maps/maps';
/**
 * Generated class for the MapsLocalityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maps-locality',
  templateUrl: 'maps-locality.html',
})
export class MapsLocalityPage {

  tab1Root: any = MapsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapsLocalityPage');
  }

}
