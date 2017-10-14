import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import { ShesafeBackendProvider } from '../../providers/shesafe-backend/shesafe-backend';
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
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl:AlertController,private shesafeBackend:ShesafeBackendProvider) {
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

  this.shesafeBackend.listReview(this.area_id).subscribe(
    data => {
      this.reviews = data;
      console.log(data)
    },
    err => {
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
}
