import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Loading,ToastController} from 'ionic-angular';
import { VerifyOtpPage} from '../verify-otp/verify-otp';
import { ShesafeBackendProvider} from '../../providers/shesafe-backend/shesafe-backend';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  name:any;
  loading: Loading;
  phone:any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private shesafeBackend:ShesafeBackendProvider, 
              private toastCtrl:ToastController,
              private loadingCtrl:LoadingController,
              private alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  public login() {
    this.showLoading()
    this.shesafeBackend.login(this.phone).subscribe(data => {
      if (data.success) {
        this.navCtrl.push(VerifyOtpPage, {
          "name":this.name,
          "phone":this.phone,
          "user_id":data.user_id,
        });
        let toast = this.toastCtrl.create({
          message: 'OTP has been requested. Please wait.',
          duration: 3000,
          position: 'middle'
        });

        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });

        toast.present();
      
      } else {
        this.showError(data.error);
      }
    },
      error => {
        this.showError('Check your connection and try again.');
      });
  }

  showLoading() {
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
