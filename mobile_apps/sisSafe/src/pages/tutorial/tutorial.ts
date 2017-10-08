import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';

import { HomePage} from '../home/home';
/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {

  
  constructor(public navCtrl: NavController) {
  
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }

}
