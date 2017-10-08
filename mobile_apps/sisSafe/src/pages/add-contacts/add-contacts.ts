import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
// import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
/**
 * Generated class for the AddContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-contacts',
  templateUrl: 'add-contacts.html',
})
export class AddContactsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddContactsPage');
  }
  skip(){
    this.navCtrl.setRoot(HomePage);
  }
  addcontact(){
  }
}
