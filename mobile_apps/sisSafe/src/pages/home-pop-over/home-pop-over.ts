import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AddContactsPage} from '../add-contacts/add-contacts';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePopOverPage');
  }
  logout(event){
    // this.storage.set('authToken',undefined);
    // this.navCtrl.pop();
    // this.navCtrl.setRoot(LoginPage);
  }

  openFAQs(){
    // this.pibitBackend.faqs().subscribe(data=>{
    //     this.navCtrl.push(FaqsPage,{
    //       'faqs':data
    //     });
    //     console.log(data);
    // },err=>{
    //   console.error(err);
    // });
  }
  openContactUs(){
    // this.navCtrl.push(ContactUsPage);
  }
  openTermsConditions(){
    // this.navCtrl.push(TermsAndConditionsPage);
  }
  openMaps(){
    // this.navCtrl.push(MapsPage);
  }
  addContacts(){
    this.navCtrl.push(AddContactsPage)
  }

}
