import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Loading,LoadingController ,AlertController,ToastController} from 'ionic-angular';
import { ShesafeBackendProvider } from '../../providers/shesafe-backend/shesafe-backend';
// import { Storage } from '@ionic/storage';
/**
 * Generated class for the ContactUsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {
  emailId:any;
  message:any;
  subject:any;
  loading:Loading;
  location:any;
  location_ekey:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              public shesafeBackend:ShesafeBackendProvider,
              // public storage:Storage,
              public alertCtrl:AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactUsPage');
  }

  backToHome(){
    this.navCtrl.pop();
  }

  public submitContactForm() {
    this.showLoading()
    this.shesafeBackend.contact(this.emailId,this.subject,this.message).subscribe(data => {
      if (data.success) {
        // this.location = this.storage.get('location');
        // this.location_ekey = this.storage.get('location_ekey')
        // this.navCtrl.setRoot(HomePage,{
        //   'location':this.location.__zone_symbol__value,
        //   'location_ekey':this.location_ekey.__zone_symbol__value,
        // });
        this.loading.dismiss();
        let toast = this.toastCtrl.create({
                message: 'Thankyou For contacting SheSafe. We will connect to you soon.',
                duration: 5000,
                position:"middle",
              });
              this.emailId="";
              this.subject="";
              this.message="";
              toast.present();

      } else {
        this.showError(data.error);
      }
    },
      error => {
        this.showError(error);
      });
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
