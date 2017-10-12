import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
// import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

/*
  Generated class for the ShesafeBackendProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShesafeBackendProvider {
  private headers:Headers;
  private baseUrl:String = "http://localhost:8000";
  private authToken:String;

  
  constructor(public http: Http) {
    console.log('Hello ShesafeBackendProvider Provider');
  }
  // private storage:Storage, 
  // public setAuthToken(authToken){
  //   this.authToken = authToken;
  //   this.storage.set('authToken',authToken);
  //   this.createHeaders(authToken);
  // }

  // private createHeaders(authToken){
  //   this.headers = new Headers();
  //   this.headers.append('Content-Type', 'application/json');
  //   this.headers.append('Authorization', 'Token '+authToken);
  // }
  // public searchChoices(querytext){
  //   return this.http.get(this.baseUrl+'/api/search/?query_string='+querytext,{
  //     headers:this.headers
  //   }).map(response=>response.json())
  // }

  // public checkLoginState(){
  //   return Observable.create(observer=>{
  //     this.storage.get('authToken').then((authToken)=>{
  //       this.authToken = authToken;
  //       this.createHeaders(authToken);
  //       this.http.post(this.baseUrl+'/api/checkLoginState/',{},{
  //         headers:this.headers
  //       }).map(response=>response.json()).subscribe(
  //         data=>{
  //           observer.next(data);
  //           observer.complete();
  //         },
  //         err=>{
  //           observer.error(err);
  //         }
  //       );
  //     });
  //   });
  // }

  // public login(phone) {
  //   if (phone === null) {
  //     return Observable.throw("Please enter a valid phone number.");
  //   }
  //   else {
  //     return this.http.post(this.baseUrl+'/api/auth/login/',{
  //       phone:phone
  //     }).map(response=>response.json());
  //   }
  // }

  // public verify(name,phone, otp, otp_token) {
  //   if (name === null || phone === null || otp === null || otp_token === null) {
  //     return Observable.throw("Please insert credentials");
  //   } else {
  //     return Observable.create(observer => {
  //       this.http.post(this.baseUrl+'/api/auth/verifyOtp/',{
  //         name:name,
  //         phone:phone,
  //         otp:otp,
  //         otp_token:otp_token
  //       }).map(response=>response.json()).subscribe(
  //         data=>{
  //           if(data.success){
  //             this.setAuthToken(data.token);
  //           }
  //           observer.next(data);
  //           observer.complete();
  //         },
  //         err=>{
  //           observer.next(err);
  //           observer.complete();
  //         }
  //       );
  //     });
  //   }
  // }


}
