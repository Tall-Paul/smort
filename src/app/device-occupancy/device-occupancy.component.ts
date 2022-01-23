import { Component, OnInit, Input } from '@angular/core';
import { DeviceComponent } from '../device/device.component';

@Component({
  selector: 'app-device-occupancy',
  templateUrl: './device-occupancy.component.html',
  styleUrls: ['./device-occupancy.component.css']
})
export class DeviceOccupancyComponent extends DeviceComponent implements OnInit {


  getIcon(): string{
    if (this.device?.data.Occupancy == "1"){
      return "person";
    } else {
      return "no_accounts";
    }
  }

}
