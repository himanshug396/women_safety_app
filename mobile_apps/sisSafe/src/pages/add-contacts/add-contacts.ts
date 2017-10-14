import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import { ShesafeBackendProvider } from '../../providers/shesafe-backend/shesafe-backend';
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
  contacts;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,private shesafeBackend:ShesafeBackendProvider) {
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
    let contacts;
    if(navParams.get('contacts'))
      contacts = navParams.get('contacts');
    
    this.contacts = contacts;
    if(this.contacts.length !=0 )
      this.val = 'BACK'
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
    let prompt = this.alertCtrl.create({
      title: 'Add Contact',
      message: "Enter the mobile number of the contact",
      inputs: [
        {
          name:'number',
          placeholder: '9999999999',
          min:10,
          max:10,
          type:'tel'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
            console.log(data)
            let contact = [];
            contact.push(data.number)
            console.log(contact);
            this.shesafeBackend.addContacts(contact).subscribe(
              data => {
                console.log(data)
                alert(data.message);
                this.shesafeBackend.listContacts().subscribe(
                  resp => {
                    this.contacts = resp;
                    console.log(resp)
                  },
                  err => {
                    console.error(err);
                    let alert = this.alertCtrl.create({
                      title: 'Fail',
                      subTitle: 'Please check your connection and try again.',
                      buttons: ['OK']
                    });
                    alert.present(prompt);
            
                  }
                )
              },
              err => {
                console.error(err);
                let alert = this.alertCtrl.create({
                  title: 'Fail',
                  subTitle: 'Some Error occured. Please check your connection and try again.',
                  buttons: ['OK']
                });
                alert.present(prompt);
        
              }
            )
          }
        } 
      ]
    });
    prompt.present();
  }
  
}
