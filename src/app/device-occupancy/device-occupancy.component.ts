import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-device-occupancy',
  templateUrl: './device-occupancy.component.html',
  styleUrls: ['./device-occupancy.component.css']
})
export class DeviceOccupancyComponent implements OnInit {

  @Input() deviceName='';

  constructor() { }

  ngOnInit(): void {
  }

}
