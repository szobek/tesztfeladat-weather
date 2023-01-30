import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CallService {

  pic:BehaviorSubject<string> = new BehaviorSubject("") 
  state:BehaviorSubject<string> = new BehaviorSubject("") 
  temp:BehaviorSubject<number> = new BehaviorSubject(0) 
  wind:BehaviorSubject<number> = new BehaviorSubject(0) 

  apiUrl:string = "https://api.openweathermap.org/data/2.5/weather";
  apiKey:string="76a8aa664f7ddc47543a8f5f54abb050"
  //https://api.openweathermap.org/data/2.5/weather?q=Budapest&appid=76a8aa664f7ddc47543a8f5f54abb050

  constructor(private http: HttpClient) { }

  callApi() {
   return this.http.get(`${this.apiUrl}?q=${this.state.value}&appid=${this.apiKey}`)


  }

}
