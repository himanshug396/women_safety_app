import { Component } from '@angular/core';
import { NavController, NavParams,AlertController ,ModalController,Loading,LoadingController} from 'ionic-angular';
import { ShesafeBackendProvider } from '../../providers/shesafe-backend/shesafe-backend';
import { AddReviewPage} from '../add-review/add-review';
import { InAppBrowser } from '@ionic-native/in-app-browser';
// import { ExpandableHeaderComponent } from '../../components/expandable-header/expandable-header';
/**
 * Generated class for the LocalityDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-locality-detail',
  templateUrl: 'locality-detail.html',
})
export class LocalityDetailPage {
  area_id;name;latitude;longitude;well_lit;transport;crowded;
  reviews:any;
  loading:Loading;
  constructor(public modalCtrl: ModalController,public navCtrl: NavController, private iab: InAppBrowser,public navParams: NavParams,private alertCtrl:AlertController,
    private loadingCtrl:LoadingController,
    private shesafeBackend:ShesafeBackendProvider) {
  let area_id = navParams.get('id');
  let name = navParams.get('name');
  let latitude = navParams.get('latitude');
  let longitude = navParams.get('longitude');
  let well_lit = navParams.get('well_lit');
  let transport = navParams.get('transport');
  let crowded = navParams.get('crowded');
  this.latitude = latitude;
  this.longitude = longitude;
  this.well_lit = well_lit;
  this.transport = transport;
  this.crowded = crowded;
  this.name = name;
  this.area_id = area_id;
  this.showLoading();
  this.shesafeBackend.listReview(this.area_id).subscribe(
    data => {
      this.loading.dismiss();
      this.reviews = data;
      console.log(data)
    },
    err => {
      this.loading.dismiss();
      console.error(err);
      let alert = this.alertCtrl.create({
        title: 'Fail',
        subTitle: 'Error fetching reviews. Please check your connection and try again.',
        buttons: ['OK']
      });
      alert.present(prompt);

    }
  )

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalityDetailPage');
  }
  back(){
    this.navCtrl.pop();
  }
  addreview(){
    const profileModal = this.modalCtrl.create(AddReviewPage,{
      'area_id':this.area_id,
      'name':this.name
    });
    profileModal.present();
  }
  openMaps(){
    const browser = this.iab.create('https://www.google.com/maps/?q=' + this.latitude + ',' + this.longitude,'_blank',{location:'no'}); 
  }

  showLoading() {
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

}
