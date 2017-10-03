import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


/**
 * Generated class for the AlertButtonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-alert-button',
  templateUrl: 'alert-button.html',
})
export class AlertButtonPage {

  lat:any;
  long:any;
  location_link:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private geolocation: Geolocation) {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat=  resp.coords.latitude;
      this.long = resp.coords.longitude;
      this.location_link = 'https://www.google.com/maps/?q=' + this.lat + ',' + this.long;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertButtonPage');
  }

}
