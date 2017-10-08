import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AddContactsPage} from '../add-contacts/add-contacts';
import { LoginPage} from '../login/login';
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
  name:string = "";
  phone:string = "";
  otp:string = "";
  timer;
  private otp_token:String;

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl:ToastController) {
    let name = navParams.get('name');
    let phone = navParams.get('phone');
    let otp_token = navParams.get('otp_token');
    //Validate you got correct phone over here...
    this.name = name;
    this.phone = phone;
    this.otp_token = otp_token;
    for(var i=60;i>=0;i--){
      this.timer = i;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifyOtpPage');
  }
  otpverify(){
    this.navCtrl.push(AddContactsPage)
  }
  otp_resend(){
    let toast = this.toastCtrl.create({
      message: 'OTP has been requested.Please wait.',
      duration: 3000,
      position: 'bottom'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  
  }
  openLoginPageBack(){
    this.navCtrl.popTo(LoginPage);
  }
  

}
