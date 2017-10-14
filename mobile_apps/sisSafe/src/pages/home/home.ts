import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Loading, Platform, PopoverController} from 'ionic-angular';
import { ShesafeBackendProvider } from '../../providers/shesafe-backend/shesafe-backend';
import { NearestWhatPage} from '../nearest-what/nearest-what';
import {KnowThisLocalityPage} from '../know-this-locality/know-this-locality';
import { ClickUploadPage } from '../click-upload/click-upload';
import {LoginPage} from '../login/login';
import { AddContactsPage} from '../add-contacts/add-contacts';
import { HomePopOverPage} from '../home-pop-over/home-pop-over';
import { Storage} from '@ionic/storage';
import { LocationPage} from '../location/location';
import { Camera, CameraOptions } from '@ionic-native/camera';
import firebase from 'firebase';

import { Geolocation } from '@ionic-native/geolocation';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lastImage: string = null;
  
  location:string;
  lat:any;
  long:any;
  captureDataUrl: string;
  rootParams:any[];
  location_id;
  areaChoices:any=[];
  location_link:any;
  
  constructor(public navParams:NavParams,
              public navCtrl: NavController, 
              public popoverCtrl:PopoverController,
              private storage: Storage,
              public platform: Platform,
              private alertCtrl: AlertController, private loadingCtrl: LoadingController, 
              private shesafeBackend: ShesafeBackendProvider,
              private camera: Camera,
              private geolocation: Geolocation) {
      let location;
      let rootParams = [];
      let location_id;
      this.rootParams = rootParams;
      if(navParams.get('location_id')){ 
        location = navParams.get('location');  
        location_id = navParams.get('location_id');
      }
      // else if((navCtrl as any).rootParams['location']){
      //   location = (navCtrl as any).rootParams['location'];
      //   location_id = (navCtrl as any).rootParams['location_id'];
      // }
      else(
        this.storage.get('location_id').then((location_id)=>{
        this.location_id = location_id;
        return this.storage.get('location');
      }).then((location)=>{
        this.location = location;
      }).catch(()=>{
            if(!location_id){
              this.navCtrl.push(LocationPage);
          }
      })
    )
      console.log(this.location);
      console.log(this.location_id);
      this.location = location;
      this.location_id = location_id;
      console.log(12345);
      const config = {
        apiKey: "AIzaSyA7rRR0AuyFE8avuHgZkFWW7THWkO2UzWk",
        authDomain: "shesafe-1507014992380.firebaseapp.com",
        databaseURL: "https://shesafe-1507014992380.firebaseio.com/",
        storageBucket: "gs://shesafe-1507014992380.appspot.com",
        messagingSenderId: "644783142839"
      };
      !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
      
      // firebase.initializeApp(config);
  }

  popOverPresent(event) {
    console.log("helllo");
    let popover = this.popoverCtrl.create(HomePopOverPage);
    popover.present({
      ev:event
    });
  }
  getmyLocation(){
    
    this.navCtrl.push(LocationPage);
    // this.geolocation.getCurrentPosition().then((resp) => {
    //   this.lat=  resp.coords.latitude;
    //   this.long = resp.coords.longitude;
    //   console.log(this.lat,this.long)
    //   // http://maps.googleapis.com/maps/api/geocode/json?latlng=29.871384499999998,77.8953413&sensor=true
    //  }).catch((error) => {
    //    console.log('Error getting location', error);
    //  });
  }
  nearbyPlaces(){
    this.navCtrl.push(NearestWhatPage);
  }

  sendAlert(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat=  resp.coords.latitude;
      this.long = resp.coords.longitude;
      this.location_link = 'https://www.google.com/maps/?q=' + this.lat + ',' + this.long;
      let confirm = this.alertCtrl.create({
        title: 'Send Message?',
        message: 'I am in a trouble. Please track me or stay in contact.' +  '<br>' +' My location : ' + '<a>' + this.location_link + '</a>',
        buttons: [
          {
            text: 'Cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Send',
            handler: () => {
              console.log('Send clicked');
              this.shesafeBackend.alertContacts(this.location_link).subscribe(data => {
                if (data.success) {
                  alert(data.message)
                } else {
                  alert("Failed. Check your connection and try again.");
                }
              },
                error => {
                  alert("Some Error Occured. Please check your network and try again.");
                });
            }
          }
        ]
      });
      confirm.present();
    
     }).catch((error) => {
       console.log('Error getting location', error);
     });
    }
  
  knowthislocality(){
    this.shesafeBackend.areaChoices(this.location_id).subscribe(
      data => {
        this.areaChoices = data;
        console.log(data)
        this.navCtrl.push(KnowThisLocalityPage,{
          'location':this.location,
          'location_id':this.location_id,
          'areas':this.areaChoices
        });
      },
      err => {
        console.error(err);
        let alert = this.alertCtrl.create({
          title: 'Fail',
          subTitle: 'Please check your connection and try again.',
          buttons: ['OK']
        });
        alert.present(prompt);

      }
    )
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
