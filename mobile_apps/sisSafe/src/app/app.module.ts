import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { MapsNearbyPage } from '../pages/maps-nearby/maps-nearby';
import { ListNearbyPage } from '../pages/list-nearby/list-nearby';

import { HomeNearbyPage } from '../pages/home-nearby/home-nearby';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {KnowThisLocalityPage} from '../pages/know-this-locality/know-this-locality';
import {NearestWhatPage} from '../pages/nearest-what/nearest-what';
import {LocalityDetailPage} from '../pages/locality-detail/locality-detail';
import { ConnectivityProvider } from '../providers/connectivity/connectivity';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';

import { LocationsProvider } from '../providers/locations/locations';
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';

import { HttpModule } from '@angular/http';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { Contacts} from '@ionic-native/contacts';

import { ShesafeBackendProvider} from '../providers/shesafe-backend/shesafe-backend';
import { ExpandableHeaderComponent } from '../components/expandable-header/expandable-header';
import { Ionic2RatingModule } from 'ionic2-rating';


import { LoginPageModule} from '../pages/login/login.module';
import { VerifyOtpPageModule} from '../pages/verify-otp/verify-otp.module';
import {AddContactsPageModule} from '../pages/add-contacts/add-contacts.module';
import {AddReviewPageModule} from '../pages/add-review/add-review.module';
import { HomeNearbyBankPageModule } from '../pages/home-nearby-bank/home-nearby-bank.module';
import { HomeNearbyMedicalPageModule } from '../pages/home-nearby-medical/home-nearby-medical.module';
import { HomeNearbyStationPageModule } from '../pages/home-nearby-station/home-nearby-station.module';
import { HomeNearbyTaxiPageModule} from '../pages/home-nearby-taxi/home-nearby-taxi.module';
import { ClickUploadPageModule } from '../pages/click-upload/click-upload.module';
import { ContactUsPageModule} from '../pages/contact-us/contact-us.module';
import { HomePopOverPageModule} from '../pages/home-pop-over/home-pop-over.module';
import { NetworkErrorPageModule} from '../pages/network-error/network-error.module';
import { LocationPageModule } from '../pages/location/location.module';
import { MapsNearbyBankPageModule } from '../pages/maps-nearby-bank/maps-nearby-bank.module';
import { MapsNearbyMedicalPageModule } from '../pages/maps-nearby-medical/maps-nearby-medical.module';
import { MapsNearbyTaxiPageModule } from '../pages/maps-nearby-taxi/maps-nearby-taxi.module';
import { MapsNearbyStationPageModule } from '../pages/maps-nearby-station/maps-nearby-station.module';
import {TermsAndConditionsPageModule} from '../pages/terms-and-conditions/terms-and-conditions.module';

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
    ExpandableHeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    Ionic2RatingModule,
    LoginPageModule,
    VerifyOtpPageModule,
    AddContactsPageModule,
    HomeNearbyBankPageModule,
    HomeNearbyMedicalPageModule,
    HomeNearbyStationPageModule,
    HomeNearbyTaxiPageModule,
    MapsNearbyBankPageModule,
    MapsNearbyMedicalPageModule,
    MapsNearbyStationPageModule,
    MapsNearbyTaxiPageModule,
    HomePopOverPageModule,
    ClickUploadPageModule,
    NetworkErrorPageModule,
    LocationPageModule,
    ContactUsPageModule,
    AddReviewPageModule,

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
