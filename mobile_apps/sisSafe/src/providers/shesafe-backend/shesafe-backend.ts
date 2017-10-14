import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';

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

  
  constructor(public http: Http, private storage:Storage, ) {
    console.log('Hello ShesafeBackendProvider Provider');
  }
  public setAuthToken(authToken){
    this.authToken = authToken;
    this.storage.set('authToken',authToken);
    this.createHeaders(authToken);
  }

  private createHeaders(authToken){
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Token '+authToken);
  }

  public checkLoginState(){
    return Observable.create(observer=>{
      this.storage.get('authToken').then((authToken)=>{
        this.authToken = authToken;
        this.createHeaders(authToken);
        this.http.post(this.baseUrl+'/api/checkLoginState/',{},{
          headers:this.headers
        }).map(response=>response.json()).subscribe(
          data=>{
            observer.next(data);
            observer.complete();
          },
          err=>{
            observer.error(err);
          }
        );
      });
    });
  }

  public login(phone) {
    if (phone === null) {
      return Observable.throw("Please enter a valid phone number.");
    }
    else {
      return this.http.post(this.baseUrl+'/api/sendOtp/',{
        phone:phone
      }).map(response=>response.json());
    }
  }

  public verify(name,phone, otp, user_id) {
    if (name === null || phone === null || otp === null || user_id === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        this.http.post(this.baseUrl+'/api/verifyOtp/',{
          name:name,
          phone:phone,
          otp:otp,
          user_id:user_id
        }).map(response=>response.json()).subscribe(
          data=>{
            if(data.success){
              this.setAuthToken(data.token);
            }
            observer.next(data);
            observer.complete();
          },
          err=>{
            observer.next(err);
            observer.complete();
          }
        );
      });
    }
  }
  public locationChoices(){
    return this.http.get(this.baseUrl+'/api/listCities/',{
      headers:this.headers
    }).map(response=>response.json())
  }
  public areaChoices(location_id){
    return this.http.get(this.baseUrl+'/api/listAreas/?city_id=' + location_id,{
      headers:this.headers
    }).map(response=>response.json())
  }
  public listReview(id){
    return this.http.get(this.baseUrl+'/api/listReviews/?area_id=' + id,{
      headers:this.headers
    }).map(response=>response.json())
  }
  public listContacts(){
    return this.http.get(this.baseUrl+'/api/listContacts/',{
      headers:this.headers
    }).map(response=>response.json())
  }

  public addContacts(contacts){
    return this.http.post(this.baseUrl+'/api/addContacts/',{
      'contacts':contacts,
    },{
      headers:this.headers
    }).map(response=>response.json());
  }
  
  public alertContacts(location){
    return this.http.post(this.baseUrl+'/api/alertContacts/',{
      'location':location,
    },{
      headers:this.headers
    }).map(response=>response.json());
  }
  
  public sendImage(link){
    return this.http.post(this.baseUrl+'/api/sendImage/',{
      'link':link,
    },{
      headers:this.headers
    }).map(response=>response.json());
  }
  
  
  public addReview(area_id,well_lit,transport,crowded,comment){
    return this.http.post(this.baseUrl+'/api/addReview/',{
      'area_id':area_id,
      'well_lit':well_lit,
      'transport':transport,
      'crowded':crowded,
      'comment':comment,
    },{
      headers:this.headers
    }).map(response=>response.json());
  }
  
  public contact(email,subject,message){
    return this.http.post(this.baseUrl+'/api/contactUs/',{
      'email':email,
      'subject':subject,
      'message':message,
    },{
      headers:this.headers
    }).map(response=>response.json());
  }
  

}
