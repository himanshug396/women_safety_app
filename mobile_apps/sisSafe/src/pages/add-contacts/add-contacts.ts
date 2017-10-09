import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
// import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

import {AddContacts2Page} from '../add-contacts2/add-contacts2';
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
  selectedContacts = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    // private contacts: Contacts
  ) {
  }

  // selectContact(){
  //   navigator.contacts.pickContact(function(contact){
  //       console.log('The following contact has been selected:' + JSON.stringify(contact));
  //   },function(err){
  //       console.log('Error: ' + err);
  //   });
  // }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddContactsPage');
  }
  skip(){
    this.navCtrl.setRoot(HomePage);
  }

  addcontact(){
    this.navCtrl.push(AddContacts2Page)
  }
}
