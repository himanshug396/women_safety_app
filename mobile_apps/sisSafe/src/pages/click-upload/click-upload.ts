import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
// import * as firebase from 'firebase';
import { Camera, CameraOptions } from '@ionic-native/camera';
import firebase from 'firebase';
/**
 * Generated class for the ClickUploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-click-upload',
  templateUrl: 'click-upload.html',
})
export class ClickUploadPage {
  captureDataUrl: string;
  downloadUrl:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public platform: Platform,
    private camera: Camera, ) {
    this.captureDataUrl = this.navParams.get('captureDataUrl');
    this.upload();
}
  upload() {
    let storageRef = firebase.storage().ref();
    console.log(storageRef);
    // Create a timestamp as filename
    const filename = Math.floor(Date.now() / 1000);

    // Create a reference to 'images/todays-date.jpg'
    const imageRef = storageRef.child(`images/${filename}.jpg`);

    imageRef.putString(this.captureDataUrl, firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
     // Do something here when the data is succesfully uploaded!
     alert('Successfully uploaded');
     imageRef.getDownloadURL().then((url) =>{
        console.log(url);
        this.downloadUrl = url;
    });
    }).catch((err)=>{
      alert(err + '     ' + err.message)
    });
  }
}
