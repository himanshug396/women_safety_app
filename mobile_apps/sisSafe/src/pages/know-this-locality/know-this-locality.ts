import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Loading} from 'ionic-angular';
// import { ShesafeBackendProvider } from '../../providers/shesafe-backend/shesafe-backend';
// import { Storage } from '@ionic/storage';
import { LocalityDetailPage } from '../locality-detail/locality-detail';
import { HomePage } from '../home/home';
/**
 * Generated class for the KnowThisLocalityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-know-this-locality',
  templateUrl: 'know-this-locality.html',
})
export class KnowThisLocalityPage {
  location: any;
  areas:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
    let location;
    if (navParams.get('location')) {
      location = navParams.get('location');
    }
    else {
      location = (navCtrl as any).rootParams['location'];
    }

    let location_id;
    if (navParams.get('location_id')) {
      location_id = navParams.get('location_id');
    } else {
      location_id = (navCtrl as any).rootParams['location_id'];
    }

    console.log(12345);
    console.log(location);
    console.log(location_id);
    this.location = location;

    let areas;
    if (navParams.get('location_id'))
      areas = navParams.get('areas');
    this.areas = areas; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KnowThisLocalityPage');
  }
  backToHome() {
    this.navCtrl.pop();
  }
  openlocalityDetial(id,name,latitude,longitude,well_lit,transport,crowded) {
    this.navCtrl.push(LocalityDetailPage,{
      'id' :id,
      'latitude': latitude,
      'longitude': longitude,
      'well_lit':well_lit,
      'transport' : transport,
      'crowded' :crowded,
      'name':name
    });
  }

}
