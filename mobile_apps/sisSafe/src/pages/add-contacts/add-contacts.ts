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
  location:string;
  location_id:any;
  count:any = 0;
  val:any = 'SKIP';
  constructor(public navCtrl: NavController, public navParams: NavParams,) {
    let location;
    let location_id
    if(navParams.get('location'))
      location = navParams.get('location');
    if(navParams.get('location_id'))
      location_id = navParams.get('location_id');

    this.location = location;
    this.location_id = location_id;
    console.log(location, location_id)
    if(this.count!=0)
      this.val = 'Go To Home';
    // this.storage.get('location_id').then((location_id)=>{
      //   this.location_id = location_id;
      //   return this.storage.get('location');
      // }).then((location)=>{
      //   this.location = location;
      // }).catch(()=>{
      //       if(!location_id){
      //         this.navCtrl.push(LocationPage);
      //     }
      // })
      
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddContactsPage');
  }
  skip(){
    this.navCtrl.setRoot(HomePage,{
      'location':this.location,
      'location_id':this.location_id
    });
  }
  addcontact(){
    this.navCtrl.push(AddContacts2Page)
  }
}
