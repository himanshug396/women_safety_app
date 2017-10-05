import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VerifyOtpPage} from '../verify-otp/verify-otp';
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
  phone:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    this.navCtrl.push(VerifyOtpPage);
  }
  otpPage(){
    this.navCtrl.push(VerifyOtpPage,{
      'name':this.name,
      'phone':this.phone
    })
  }
}
