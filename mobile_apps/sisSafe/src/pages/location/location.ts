import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Loading} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ShesafeBackendProvider } from '../../providers/shesafe-backend/shesafe-backend';
// import { HomePage } from '../home/home';
import { AddContactsPage} from '../add-contacts/add-contacts';
/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {

  selectedLocation: String;
  locationChoices: { 'id': String, '__str__': String }[];
  loading: Loading;
  loading_var: Boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private loadingCtrl: LoadingController, private storage: Storage, private shesafeBackend: ShesafeBackendProvider) {
    this.shesafeBackend.locationChoices().subscribe(
      data => {
        this.locationChoices = data;
        console.log(data)
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
    // this.navCtrl.push(HomePage)
  }
  locationSelected(location) {
    this.selectedLocation = location.__str__;
    this.storage.set('location', location.__str__);
    this.storage.set('location_id', location.id);
    this.navCtrl.setRoot(AddContactsPage, { 'location_id': location.id, 'location': location.__str__ });
  }

  showLoading() {
    this.loading_var = true;
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

  ionViewWillEnter() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
  }
}