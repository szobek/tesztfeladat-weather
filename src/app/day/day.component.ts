import { Component, Input } from '@angular/core';


@Component({
  selector: 'weather-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent {
temper:number=0;
wind:number=0;
pic:string="";
@Input() public  set temp(temperature:number){
  this.temper=temperature
}
@Input() public  set windSpeed(w:number){
  this.wind=w
}
@Input() public  set picture(p:string){
  this.pic=p
}

writeImegaName(p:string){
  return `assets/${p.toLowerCase()}.jpg`
}

}
