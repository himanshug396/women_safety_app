import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MapsNearbyPage } from '../pages/maps-nearby/maps-nearby';
import { ListNearbyPage } from '../pages/list-nearby/list-nearby';
import { HomeNearbyPage } from '../pages/home-nearby/home-nearby';
import {AlertButtonPage} from '../pages/alert-button/alert-button';
import {DangerButtonPage} from '../pages/danger-button/danger-button';
import {KnowThisLocalityPage} from '../pages/know-this-locality/know-this-locality';
import {NearestWhatPage} from '../pages/nearest-what/nearest-what';
import {LocalityDetailPage} from '../pages/locality-detail/locality-detail';
import { ConnectivityProvider } from '../providers/connectivity/connectivity';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { LocationsProvider } from '../providers/locations/locations';

import { Network } from '@ionic-native/network';
import { Geolocation,GeolocationOptions,Geoposition } from '@ionic-native/geolocation';

import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HomeNearbyPage,
    MapsNearbyPage,
    ListNearbyPage,
    AlertButtonPage,
    DangerButtonPage,
    KnowThisLocalityPage,
    NearestWhatPage,
    LocalityDetailPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HomeNearbyPage,
    MapsNearbyPage,
    ListNearbyPage,
    AlertButtonPage,
    DangerButtonPage,
    KnowThisLocalityPage,
    NearestWhatPage,
    LocalityDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConnectivityProvider,
    GoogleMapsProvider,
    LocationsProvider,
    Network,
    Geolocation
  ]
})
export class AppModule {}
