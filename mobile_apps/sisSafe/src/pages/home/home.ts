import { Component } from '@angular/core';
import { NavController, PopoverController, Platform} from 'ionic-angular';

import { NearestWhatPage} from '../nearest-what/nearest-what';
import {AlertButtonPage} from '../alert-button/alert-button';
import {DangerButtonPage} from '../danger-button/danger-button';
import {KnowThisLocalityPage} from '../know-this-locality/know-this-locality';
import { ClickUploadPage } from '../click-upload/click-upload';
import {LoginPage} from '../login/login';
import { AddContactsPage} from '../add-contacts/add-contacts';
import { HomePopOverPage} from '../home-pop-over/home-pop-over';

import { Geolocation } from '@ionic-native/geolocation';

import { Camera, CameraOptions } from '@ionic-native/camera';
import firebase from 'firebase';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lastImage: string = null;
  location = 'Roorkee,Uttrakhand'
  lat:any;
  long:any;
  captureDataUrl: string;
  
  constructor(public navCtrl: NavController, public popoverCtrl:PopoverController,private geolocation: Geolocation,public platform: Platform,
    private camera: Camera) {
      const config = {
        apiKey: "AIzaSyA7rRR0AuyFE8avuHgZkFWW7THWkO2UzWk",
        authDomain: "shesafe-1507014992380.firebaseapp.com",
        databaseURL: "https://shesafe-1507014992380.firebaseio.com/",
        storageBucket: "gs://shesafe-1507014992380.appspot.com",
        messagingSenderId: "644783142839"
      };
      firebase.initializeApp(config);
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
  login(){
    this.navCtrl.push(LoginPage);
  }
  add_contacts(){
    this.navCtrl.push(AddContactsPage)
  }
  ClickUpload(){
      //setup camera options
      const cameraOptions: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
      };
  
      this.camera.getPicture(cameraOptions).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64:
        this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
        this.navCtrl.push(ClickUploadPage,{
          'captureDataUrl':this.captureDataUrl
        });
      }, (err) => {
        alert("Error while accessing Camera. Try again later.")
        // Handle error
      });
  }
  
}
