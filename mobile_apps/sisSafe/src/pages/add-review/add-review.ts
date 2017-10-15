import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Loading,LoadingController } from 'ionic-angular';
import { ShesafeBackendProvider} from '../../providers/shesafe-backend/shesafe-backend';


/**
 * Generated class for the AddReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-review',
  templateUrl: 'add-review.html',
})
export class AddReviewPage {
  transport_val;
  well_lit_val;
  crowded_val;
  comment_val:string="";
  button_val:any='BACK';
  area_id;name;
  loading:Loading;
  constructor(public navCtrl: NavController, public navParams: NavParams,private shesafeBackend:ShesafeBackendProvider,private loadingCtrl:LoadingController) {
    let name = navParams.get('name');
    let area_id = navParams.get('area_id');
    this.name = name;
    this.area_id = area_id;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddReviewPage');
  }
  well_lit(ev){
    console.log(this.well_lit_val);

  }
  transport(ev){
    console.log(this.transport_val);

  }
  crowded(ev){
    console.log(this.crowded_val);
  }
  comment(){
    console.log(this.comment_val)
    if(this.well_lit_val>0 && this.transport_val>0 && this.crowded_val>0)
      this.button_val = 'DONE';
  }
  done(){
    if(this.well_lit_val>0 && this.transport_val>0 && this.crowded_val>0){
      this.showLoading();
      this.shesafeBackend.addReview(this.area_id,this.well_lit_val,this.transport_val,this.crowded_val,this.comment_val).subscribe(data => {
        this.loading.dismiss();
        if (data.success) {
          alert(data.message);
          this.navCtrl.pop();
        } else {
          alert('Please Rate to continue')
        }
      },
      error => {
        this.loading.dismiss();
        console.log(error)
        alert('Check your connection and try again.')
      });
    }
  else{
    this.navCtrl.pop();
  } 
}

showLoading() {
  this.loading = this.loadingCtrl.create({
    content: 'Please wait...',
    dismissOnPageChange: true
  });
  this.loading.present();
}

}
