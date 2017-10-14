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
  location;
  location_id;
  count:any = 0;
  val:any = 'SKIP';
  constructor(public navCtrl: NavController, public navParams: NavParams,) {
    let location = navParams.get('location');
    let location_id = navParams.get('location_id');
    this.location = location;
    this.location_id = location_id;
    if(this.count!=0)
      this.val = 'Go To Home';
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddContactsPage');
  }
  skip(){
    this.navCtrl.setRoot(HomePage,{ 'location_id': this.location_id, 'location': this.location });
  }

  addcontact(){
    this.navCtrl.push(AddContacts2Page)
  }
}
