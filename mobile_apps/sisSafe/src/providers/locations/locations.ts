import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as CONSTANTS from '../../assets/data/CONSTANTS';
// import * as gapi from '../../assets/data/gapi';
/*
  Generated class for the LocationsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LocationsProvider {

  data: any;
  lat:any;
  long:any;
  apiKey:any = CONSTANTS.APIKEY;
  constructor(public http: Http) {
  }

  load(lat,long,what) {
    this.lat = lat;
    this.long = long;
     return new Promise(resolve => {
      console.log(lat,long)
       this.http.get('https://maps.googleapis.com/maps/api/place/search/json?location=' + String(lat) + ',' + String(long) + '&rankby=distance&types=' + 'police' + '&sensor=false&key=' + String(this.apiKey)
        ).map(res => res.json()).subscribe(data => {
        console.log(data);
        this.data = this.applyHaversine(data.results);
        this.data.sort((locationA, locationB) => {
          return locationA.distance - locationB.distance;
        });

        resolve(this.data);
      });

    });

  }

  applyHaversine(locations) {

    let usersLocation = {
      lat: this.lat,
      lng: this.long
    };

    locations.map((location) => {
      console.log(location.geometry.location.lat,location.geometry.location.lng)
      let placeLocation = {
        lat: location.geometry.location.lat,
        lng: location.geometry.location.lng
      };
      console.log(location)
      location.distance = this.getDistanceBetweenPoints(
        usersLocation,
        placeLocation,
        'km'
      ).toFixed(2);
      console.log(location)
      
    });

    return locations;
  }

  getDistanceBetweenPoints(start, end, units) {

    let earthRadius = {
      miles: 3958.8,
      km: 6371
    };

    let R = earthRadius[units || 'miles'];
    let lat1 = start.lat;
    let lon1 = start.lng;
    let lat2 = end.lat;
    let lon2 = end.lng;

    let dLat = this.toRad((lat2 - lat1));
    let dLon = this.toRad((lon2 - lon1));
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;

    return d;

  }

  toRad(x) {
    return x * Math.PI / 180;
  }
}
