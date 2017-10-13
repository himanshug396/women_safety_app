import { Component } from '@angular/core';
import { Platform, Loading, LoadingController, AlertController, ToastController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';
// import { HomePage } from '../pages/home/home';
// import { TutorialPage } from '../pages/tutorial/tutorial';

import { ShesafeBackendProvider } from '../providers/shesafe-backend/shesafe-backend';
import { NetworkErrorPage } from '../pages/network-error/network-error';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { LocationPage } from '../pages/location/location';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  rootParams:any;
  loggedIn:Boolean;
  location_ekey;
  loading:Loading;
  loading_var:Boolean=false;
  
  constructor(
    private alertCtrl: AlertController, private loadingCtrl: LoadingController,private toastCtrl: ToastController,
    platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private storage: Storage, private shesafeBackend: ShesafeBackendProvider) {
      this.showLoading();
      platform.ready().then(() => {
        this.shesafeBackend.checkLoginState().subscribe(
          (data)=>{
            this.storage.get('location_ekey').then((location_ekey)=>{
              this.location_ekey = location_ekey;
              return this.storage.get('location');
            }).then((location)=>{
              this.rootParams = {"location_ekey":this.location_ekey, 'location':location};
              this.rootPage = HomePage;
              statusBar.styleDefault();
              splashScreen.hide();
              if(this.loading_var == true)
              {
                this.loading.dismiss();
              }
            }).catch((err)=>{
              this.rootPage = LocationPage;
                if(this.loading_var == true)
              {
                this.loading.dismiss();
              }
            });
          },
          (err)=>{
              if(this.loading_var == true)
              {
                this.loading.dismiss();
              }
            console.log(err);
            if(err.status==0){
              this.rootPage = LoginPage;
              statusBar.styleDefault();
              splashScreen.hide();
            }else{
              this.rootPage = NetworkErrorPage;
              statusBar.styleDefault();
              splashScreen.hide();
            }
          }
        )
      });
    }
    showLoading() {
      this.loading_var = true;
      this.loading = this.loadingCtrl.create({
        content: 'Please wait...',
        dismissOnPageChange: true
      });
      this.loading.present();
    }
  
    showError(text) {
      this.loading.dismiss();
  
      let alert = this.alertCtrl.create({
        title: 'Fail',
        subTitle: text,
        buttons: ['OK']
      });
      alert.present(prompt);
    }
  }