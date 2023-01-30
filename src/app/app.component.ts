import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { CallService } from './call.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  temerature:number=0
  windSpeed:number=0
  pict:string=""
  state:string=""

  constructor(private cs:CallService){
    cs.temp.subscribe(val=>this.temerature=val)
    cs.wind.subscribe(val=>this.windSpeed=val)
    cs.pic.subscribe(val=>{
      this.pict=val})

  }
  ngOnInit(): void {

    document.querySelector("#stateInput")?.addEventListener('keyup',(ev)=>{
      this.cs.state.next(this.state)
    })    
  }

  callApi(){
    this.cs.callApi().subscribe((res:any)=>{
      let kelvin:number=res.main.temp
      this.cs.temp.next(kelvin)
      this.cs.wind.next(res.wind.speed)
      this.cs.pic.next(res.weather[0].main)
    })
  }


  
}
