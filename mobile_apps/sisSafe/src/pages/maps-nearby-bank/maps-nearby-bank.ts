import { Component, ElementRef, ViewChild } from '@angular/core';
import { LocationsProvider } from '../../providers/locations/locations';
import { GoogleMapsProvider } from '../../providers/google-maps/google-maps';
import { NavController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the MapsNearbyBankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-maps-nearby-bank',
  templateUrl: 'maps-nearby-bank.html',
})
export class MapsNearbyBankPage {

  lat:any;
  long:any;
  root_params_data:any=[];
    
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;
 
  constructor(public navCtrl: NavController, public maps: GoogleMapsProvider, public platform: Platform, public locations: LocationsProvider,private geolocation:Geolocation) {
    
  }

  ionViewDidLoad() {
    location.reload();
    console.log('ionViewDidLoad MapsNearbyBankPage')
    this.platform.ready().then(() => {
      this.geolocation.getCurrentPosition().then((resp) => {
        this.lat=  resp.coords.latitude;
        this.long = resp.coords.longitude;
        console.log(this.lat,this.long)
          
        let mapLoaded_bank = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement);
        let locationsLoaded_bank = this.locations.load(this.lat,this.long,'bank');

        Promise.all([
          mapLoaded_bank,
          locationsLoaded_bank
        ]).then((result) => {

          let locations = result[1];
          // console.log(locations)
          for (let location of locations) {
            this.maps.addMarker(location.geometry.location.lat,location.geometry.location.lng);
          }

        });

      });

      }).catch((error) => {
         console.log('Error getting location', error);
      });
   
  }

}
 