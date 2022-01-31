import { Component, Input, OnInit } from '@angular/core';
import { deviceUpdate } from '../device-update';
import { Device } from '../device/device';
import { DeviceComponent } from '../device/device.component';
import { DevicesService } from '../devices.service';

@Component({
  selector: 'app-control-temperature',
  templateUrl: './control-temperature.component.html',
  styleUrls: ['./control-temperature.component.css']
})
export class ControlTemperatureComponent extends DeviceComponent implements OnInit {
  @Input() setPointDevice='';



}
