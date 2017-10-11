import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MapsNearbyPage } from '../pages/maps-nearby/maps-nearby';
import { MapsNearbyBankPage } from '../pages/maps-nearby-bank/maps-nearby-bank';
import { MapsNearbyMedicalPage } from '../pages/maps-nearby-medical/maps-nearby-medical';
import { MapsNearbyTaxiPage } from '../pages/maps-nearby-taxi/maps-nearby-taxi';
import { MapsNearbyStationPage } from '../pages/maps-nearby-station/maps-nearby-station';

import { ListNearbyPage } from '../pages/list-nearby/list-nearby';
import { HomeNearbyBankPage } from '../pages/home-nearby-bank/home-nearby-bank';
import { HomeNearbyPage } from '../pages/home-nearby/home-nearby';
import { HomeNearbyMedicalPage } from '../pages/home-nearby-medical/home-nearby-medical';
import { HomeNearbyStationPage } from '../pages/home-nearby-station/home-nearby-station';
import { HomeNearbyTaxiPage} from '../pages/home-nearby-taxi/home-nearby-taxi';

import {AlertButtonPage} from '../pages/alert-button/alert-button';
import {DangerButtonPage} from '../pages/danger-button/danger-button';
import {KnowThisLocalityPage} from '../pages/know-this-locality/know-this-locality';
import {NearestWhatPage} from '../pages/nearest-what/nearest-what';
import {LocalityDetailPage} from '../pages/locality-detail/locality-detail';
import { ConnectivityProvider } from '../providers/connectivity/connectivity';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';


import { LocationsProvider } from '../providers/locations/locations';
import { ClickAndUploadPage } from '../pages/click-and-upload/click-and-upload';
import { ClickUploadPage } from '../pages/click-upload/click-upload';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { LoginPage} from '../pages/login/login';
import { VerifyOtpPage} from '../pages/verify-otp/verify-otp';
import {AddContactsPage} from '../pages/add-contacts/add-contacts';
import {AddContacts2Page} from '../pages/add-contacts2/add-contacts2';
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';

import { HttpModule } from '@angular/http';

import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { Contacts} from '@ionic-native/contacts';

import { HomePopOverPage} from '../pages/home-pop-over/home-pop-over';
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
    LocalityDetailPage,
    ClickAndUploadPage,
    TutorialPage,
    LoginPage,
    VerifyOtpPage,
    AddContactsPage,
    HomeNearbyBankPage,
    HomeNearbyMedicalPage,
    HomeNearbyStationPage,
    HomeNearbyTaxiPage,
    MapsNearbyBankPage,
    MapsNearbyMedicalPage,
    MapsNearbyStationPage,
    MapsNearbyTaxiPage,
    AddContacts2Page,
    HomePopOverPage,
    ClickUploadPage
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
    LocalityDetailPage,
    ClickAndUploadPage,
    TutorialPage,
    LoginPage,
    VerifyOtpPage,
    AddContactsPage,
    HomeNearbyBankPage,
    HomeNearbyMedicalPage,
    HomeNearbyStationPage,
    HomeNearbyTaxiPage,
    MapsNearbyBankPage,
    MapsNearbyMedicalPage,
    MapsNearbyStationPage,
    MapsNearbyTaxiPage,
    AddContacts2Page,
    HomePopOverPage,
    ClickUploadPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConnectivityProvider,
    GoogleMapsProvider,
    LocationsProvider,
    Network,
    Geolocation,
    File,
    Transfer,
    FilePath,
    Camera,
    Contacts
  ]
})
export class AppModule {}
