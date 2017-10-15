import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { MapsNearbyPage } from '../pages/maps-nearby/maps-nearby';
import { MapsNearbyBankPage } from '../pages/maps-nearby-bank/maps-nearby-bank';
import { MapsNearbyMedicalPage } from '../pages/maps-nearby-medical/maps-nearby-medical';
import { MapsNearbyTaxiPage } from '../pages/maps-nearby-taxi/maps-nearby-taxi';
import { MapsNearbyStationPage } from '../pages/maps-nearby-station/maps-nearby-station';
import {TermsAndConditionsPage} from '../pages/terms-and-conditions/terms-and-conditions';
import { ListNearbyPage } from '../pages/list-nearby/list-nearby';
import { HomeNearbyBankPage } from '../pages/home-nearby-bank/home-nearby-bank';
import { HomeNearbyPage } from '../pages/home-nearby/home-nearby';
import { HomeNearbyMedicalPage } from '../pages/home-nearby-medical/home-nearby-medical';
import { HomeNearbyStationPage } from '../pages/home-nearby-station/home-nearby-station';
import { HomeNearbyTaxiPage} from '../pages/home-nearby-taxi/home-nearby-taxi';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {KnowThisLocalityPage} from '../pages/know-this-locality/know-this-locality';
import {NearestWhatPage} from '../pages/nearest-what/nearest-what';
import {LocalityDetailPage} from '../pages/locality-detail/locality-detail';
import { ConnectivityProvider } from '../providers/connectivity/connectivity';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { LocationPage } from '../pages/location/location';

import { LocationsProvider } from '../providers/locations/locations';
import { ClickUploadPage } from '../pages/click-upload/click-upload';
import { LoginPage} from '../pages/login/login';
import { VerifyOtpPage} from '../pages/verify-otp/verify-otp';
import {AddContactsPage} from '../pages/add-contacts/add-contacts';
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';

import { HttpModule } from '@angular/http';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { Contacts} from '@ionic-native/contacts';

import { HomePopOverPage} from '../pages/home-pop-over/home-pop-over';
import { NetworkErrorPage} from '../pages/network-error/network-error';
import { ShesafeBackendProvider} from '../providers/shesafe-backend/shesafe-backend';
import { ContactUsPage} from '../pages/contact-us/contact-us';
import { AddReviewPage  } from '../pages/add-review/add-review';
import { ExpandableHeaderComponent } from '../components/expandable-header/expandable-header';
import { Ionic2RatingModule } from 'ionic2-rating';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HomeNearbyPage,
    MapsNearbyPage,
    ListNearbyPage,
    KnowThisLocalityPage,
    NearestWhatPage,
    LocalityDetailPage,
    ExpandableHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HomeNearbyPage,
    MapsNearbyPage,
    ListNearbyPage,
    KnowThisLocalityPage,
    NearestWhatPage,
    LocalityDetailPage,
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
    HomePopOverPage,
    ClickUploadPage,
    NetworkErrorPage,
    LocationPage,
    ContactUsPage,
    AddReviewPage,
    TermsAndConditionsPage,
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
    Contacts,
    ShesafeBackendProvider,
    InAppBrowser
  ],
  exports: [
    LocalityDetailPage,
    ]
})
export class AppModule {}
