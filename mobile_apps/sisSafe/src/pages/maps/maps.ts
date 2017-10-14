import { Component ,OnInit } from '@angular/core';
import { IonicPage, NavController ,NavParams} from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
/**
 * Generated class for the MapsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

declare var google:any;

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})


export class MapsPage implements OnInit{
  google:any;
  map: any;
  latitude:any;
  longitude:any;
  markers = [];
  name;

  constructor(public navCtrl: NavController,public navParams : NavParams,private iab: InAppBrowser) {
    let latitude,longitude;
    if(navParams.get('latitude')){
      latitude = navParams.get('latitude');
      longitude = navParams.get('longitude');
    }
    else{
      latitude = (navCtrl as any).rootParams['latitude'];
      longitude = (navCtrl as any).rootParams['longitude'];
    }
    this.latitude = latitude;
    this.longitude = longitude;

    let name = navParams.get('name');
    this.name = name;

  }
  ngOnInit() {
    const browser = this.iab.create('https://www.google.com/maps/?q=' + this.latitude + ',' + this.longitude,'_self',{location:'no'}); 
    
  }

  // private initMap() {
  //   var point = {lat: parseFloat(this.latitude), lng: parseFloat(this.longitude)};
  //   let divMap = (<HTMLInputElement>document.getElementById('map'));
  //   this.map = new google.maps.Map(divMap, {
  //   center: point,
  //   zoom: 15,
  //   disableDefaultUI: true,
  //   draggable: true,
  //   zoomControl: true
  //   });

  //   this.createMapMarker(point);
  //   }

  //   private createMapMarker(place:any):void {
  //   var marker = new google.maps.Marker({
  //   map: this.map,
  //   position: place
  //   });
  //   this.markers.push(marker);
  //   }
}
