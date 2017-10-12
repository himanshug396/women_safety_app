import { Component } from '@angular/core';
import { Platform ,Loading,LoadingController,AlertController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';
// import { HomePage } from '../pages/home/home';
// import { TutorialPage } from '../pages/tutorial/tutorial';

import { ShesafeBackendProvider } from '../providers/shesafe-backend/shesafe-backend';
import { NetworkErrorPage } from '../pages/network-error/network-error';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  rootParams:any;
  loggedIn:Boolean;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen ,
    private storage:Storage, private shesafeBackend: ShesafeBackendProvider) {
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.rootPage = HomePage;
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  // platform.ready().then(() => {
  //   this.shesafeBackend.checkLoginState().subscribe(
  //       (data)=>{
  //           console.log(data);
  //           this.rootPage = HomePage;
  //           statusBar.styleDefault();
  //           splashScreen.hide();
  //         })
  //       },(err)=>{
  //         console.log(err);
  //         console.log(err.status)
  //         if(err.status==401){
  //           this.rootPage = LoginPage;
  //           statusBar.styleDefault();
  //           splashScreen.hide();
  //         }else{
  //           this.rootPage = NetworkErrorPage;
  //           statusBar.styleDefault();
  //           splashScreen.hide();
  //         }
  //       }
  //   )
  // }
}

