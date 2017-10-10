import { Component } from '@angular/core';
import { NavController, PopoverController} from 'ionic-angular';

import { NearestWhatPage} from '../nearest-what/nearest-what';
import {AlertButtonPage} from '../alert-button/alert-button';
import {DangerButtonPage} from '../danger-button/danger-button';
import {KnowThisLocalityPage} from '../know-this-locality/know-this-locality';

import { ClickAndUploadPage } from '../click-and-upload/click-and-upload';
import {LoginPage} from '../login/login';
import { AddContactsPage} from '../add-contacts/add-contacts';
import { HomePopOverPage} from '../home-pop-over/home-pop-over';

import { Geolocation } from '@ionic-native/geolocation';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lastImage: string = null;
  location = 'Roorkee,Uttrakhand'
  lat:any;
  long:any;
  constructor(public navCtrl: NavController, public popoverCtrl:PopoverController,private geolocation: Geolocation) {
  }

  popOverPresent(event) {
    console.log("helllo");
    let popover = this.popoverCtrl.create(HomePopOverPage);
    popover.present({
      ev:event
    });
  }
  getmyLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat=  resp.coords.latitude;
      this.long = resp.coords.longitude;
      console.log(this.lat,this.long)
      // http://maps.googleapis.com/maps/api/geocode/json?latlng=29.871384499999998,77.8953413&sensor=true
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
  nearbyPlaces(){
    this.navCtrl.push(NearestWhatPage);
  }
  dangerbutton(){
    this.navCtrl.push(DangerButtonPage);
  }
  alertbutton(){
    this.navCtrl.push(AlertButtonPage);
    
  }
  knowthislocality(){
    this.navCtrl.push(KnowThisLocalityPage);
  }
  ClickAndUpload(){
    this.navCtrl.push(ClickAndUploadPage);
  }
  login(){
    this.navCtrl.push(LoginPage);
  }
  add_contacts(){
    this.navCtrl.push(AddContactsPage)
  }
}
