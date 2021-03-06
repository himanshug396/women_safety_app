import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import { ShesafeBackendProvider } from '../../providers/shesafe-backend/shesafe-backend';
import { AddContactsPage} from '../add-contacts/add-contacts';
import { LoginPage} from '../login/login';
import {TermsAndConditionsPage} from '../terms-and-conditions/terms-and-conditions';
import { ContactUsPage} from '../contact-us/contact-us';
/**
 * Generated class for the HomePopOverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-pop-over',
  templateUrl: 'home-pop-over.html',
})
export class HomePopOverPage {
  contacts;
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage,private shesafeBackend:ShesafeBackendProvider,private alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePopOverPage');
  }
  logout(event){
    this.storage.set('authToken',undefined);
    this.navCtrl.pop();
    this.navCtrl.setRoot(LoginPage);
  }

  openContactUs(){
    this.navCtrl.push(ContactUsPage);
  }
  openTermsConditions(){
    this.navCtrl.push(TermsAndConditionsPage);
  }
  addContacts(){
    this.shesafeBackend.listContacts().subscribe(
      data => {
        this.contacts = data;
        console.log(data)
        this.navCtrl.push(AddContactsPage,{
          'contacts':data
        })
      },
      err => {
        console.error(err);
        let alert = this.alertCtrl.create({
          title: 'Fail',
          subTitle: 'Error while getting location.Please check your connection and try again.',
          buttons: ['OK']
        });
        alert.present(prompt);

      }
    )
  }
  
}
