import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-clock',
  templateUrl: './device-clock.component.html',
  styleUrls: ['./device-clock.component.css']
})
export class DeviceClockComponent implements OnInit {

  time: string;
  day: string;
  date: string;


  constructor() {
    this.date = "26/01";
    this.day = "WEDNESDAY";
    this.time = "";

    setInterval(() =>{
      const currentDate = new Date();
      this.time = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      this.date = currentDate.toLocaleDateString([],{ month: 'numeric', day: 'numeric'} );
      this.day =  currentDate.toLocaleDateString([],{ weekday: 'long'} );
       }, 1000);

   }

  ngOnInit(): void {
  }

}
