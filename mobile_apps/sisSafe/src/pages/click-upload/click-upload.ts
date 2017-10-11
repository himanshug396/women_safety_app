import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import * as firebase from 'firebase';
import { Camera } from '@ionic-native/camera';
/**
 * Generated class for the ClickUploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var window: any;
@IonicPage()
@Component({
  selector: 'page-click-upload',
  templateUrl: 'click-upload.html',
})
export class ClickUploadPage {

  assetCollection;
  userAuth: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public platform: Platform,
    private zone: NgZone,
    private camera: Camera, ) {

    var config = {
      apiKey: "AIzaSyA7rRR0AuyFE8avuHgZkFWW7THWkO2UzWk",
      authDomain: "shesafe-1507014992380.firebaseapp.com",
      databaseURL: "https://shesafe-1507014992380.firebaseio.com/",
      storageBucket: "gs://shesafe-1507014992380.appspot.com",
      messagingSenderId: "644783142839"
    };
    firebase.initializeApp(config);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ClickUploadPage');
    this.ngOnInit();
  }

  trackByFunction(index, item) {
    return item.id
  }

  ngOnInit() {
    firebase.auth().signInWithEmailAndPassword('himanshugupta.396@gmail.com', '*LOVE4lyf*')
      .then((_auth) => {
        // when authenticated... alert the user
        console.log('login success');
        this.userAuth = _auth;
        this.zone.run(() => {
          this.loadData();
        });
      })
      .catch((error: Error) => {
        // Handle Errors here.
        var errorMessage = error.message;
        alert(errorMessage);
        console.log(errorMessage)
      });
  }
  loadData() {
    var result = [];
    // load data from firebase...
    firebase.database().ref('assets').orderByKey().once('value', (_snapshot: any) => {

      _snapshot.forEach((_childSnapshot) => {
        // get the key/id and the data for display
        var element = _childSnapshot.val();
        element.id = _childSnapshot.key;
        console.log(element);
        result.push(element);
      });
      console.log(result);
      this.assetCollection = result;

    });
  }


  doGetPicture() {
    // TODO:
    // get picture from camera
    
    // this.camera.getPicture({
    //   destinationType: this.camera.DestinationType.FILE_URI,
    //   sourceType: this.camera.PictureSourceType.CAMERA,
    //   targetHeight: 640,
    //   correctOrientation: true
    // }).then((_imagePath) => {
    //   alert('got image path ' + _imagePath);
    //   // convert picture to blob
    //   return this.makeFileIntoBlob(_imagePath);
    // }).then((_imageBlob) => {
    //   alert('got image blob ' + _imageBlob);

    //   // upload the blob
    //   return this.uploadToFirebase(_imageBlob);
    // }).then((_uploadSnapshot: any) => {
    //   alert('file uploaded successfully  ' + _uploadSnapshot.downloadURL);

    //   // store reference to storage in database
    //   return this.saveToDatabaseAssetList(_uploadSnapshot);

    // }).then((_uploadSnapshot: any) => {
    //   alert('file saved to asset catalog successfully  ');
    // }, (_error) => {
    //   alert('Error ' + _error.message);
    // });
  }

  
  makeFileIntoBlob(_imagePath) {

    // INSTALL PLUGIN - cordova plugin add cordova-plugin-file
    if (this.platform.is('android')) {
      return new Promise((resolve, reject) => {
        window.resolveLocalFileSystemURL(_imagePath, (fileEntry) => {

          fileEntry.file((resFile) => {

            var reader = new FileReader();
            reader.onloadend = (evt: any) => {
              var imgBlob: any = new Blob([evt.target.result], { type: 'image/jpeg' });
              imgBlob.name = 'sample.jpg';
              resolve(imgBlob);
            };

            reader.onerror = (e) => {
              console.log('Failed file read: ' + e.toString());
              reject(e);
            };

            reader.readAsArrayBuffer(resFile);
          });
        });
      });
    } else {
      return fetch(_imagePath).then((_response) => {
        return _response.blob();
      }).then((_blob) => {
        return _blob;
      }).catch((_error) => {
        alert(JSON.stringify(_error.message));
      });
    }
  }
  uploadToFirebase(_imageBlob) {
    var fileName = 'sample-' + new Date().getTime() + '.jpg';
  
    return new Promise((resolve, reject) => {
      var fileRef = firebase.storage().ref('images/' + fileName);
  
      var uploadTask = fileRef.put(_imageBlob);
  
      uploadTask.on('state_changed', (_snapshot) => {
        console.log('snapshot progess ' + _snapshot);
      }, (_error) => {
        reject(_error);
      }, () => {
        // completion...
        resolve(uploadTask.snapshot);
      });
    });
  }
  
  saveToDatabaseAssetList(_uploadSnapshot) {
    var ref = firebase.database().ref('assets');
  
    return new Promise((resolve, reject) => {
  
      // we will save meta data of image in database
      var dataToSave = {
        'URL': _uploadSnapshot.downloadURL, // url to access file
        'name': _uploadSnapshot.metadata.name, // name of the file
        'owner': firebase.auth().currentUser.uid,
        'email': firebase.auth().currentUser.email,
        'lastUpdated': new Date().getTime(),
      };
      
      ref.push(dataToSave, (_response) => {
        resolve(_response);
      })
    });
  
  }
}
