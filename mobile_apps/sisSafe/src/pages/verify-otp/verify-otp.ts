import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Loading,ToastController} from 'ionic-angular';
import { AddContactsPage} from '../add-contacts/add-contacts';
import { LoginPage} from '../login/login';
import { LocationPage} from '../location/location';

import { ShesafeBackendProvider} from '../../providers/shesafe-backend/shesafe-backend';
/**
 * Generated class for the VerifyOtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verify-otp',
  templateUrl: 'verify-otp.html',
})
export class VerifyOtpPage {
  loading: Loading;
  name:string = "";
  phone:string = "";
  otp:string = "";
  timer;
  private user_id:String;

  constructor(public navCtrl: NavController, private navParams: NavParams, 
    private alertCtrl: AlertController, private loadingCtrl: LoadingController, 
    private shesafeBackend:ShesafeBackendProvider,private toastCtrl: ToastController) {
    let name = navParams.get('name');
    let phone = navParams.get('phone');
    let user_id = navParams.get('user_id');
    //Validate you got correct phone over here...
    this.name = name;
    this.phone = phone;
    this.user_id = user_id;
    for(var i=60;i>=0;i--){
      this.timer = i;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifyOtpPage');
  }
  public verify() {
    this.showLoading()
    this.shesafeBackend.verify(this.name,this.phone, this.otp, this.user_id).subscribe(data => {
      if (data.success) {
        this.navCtrl.setRoot(LocationPage);
      } else {
        this.showError("OTP verification failed");
      }
    },
      error => {
           this.showError("Some Error Occured. Please check your network and try again.");
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

  openLoginPageBack(){
    this.navCtrl.pop();
  }
  otp_resend(){
    this.shesafeBackend.login(this.phone).subscribe(data => {
      if (data.success) {
        let toast = this.toastCtrl.create({
          message: 'OTP has been requested again. Please wait...',
          duration: 3000,
          position: 'bottom'
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
        this.showError("Some Error Occured. Please check your network and try again.");
      });
  }

}
