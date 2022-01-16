import { Component, OnInit, Input } from '@angular/core';
import { DeviceComponent } from '../device/device.component';

@Component({
  selector: 'app-device-temperature',
  templateUrl: './device-temperature.component.html',
  styleUrls: ['./device-temperature.component.css']
})
export class DeviceTemperatureComponent extends DeviceComponent implements OnInit {

  getValue(): string | undefined{
    if (this.device?.data.Temperature)        
      return this.device?.data.Temperature;
      if (this.device?.data.temperature)        
      return this.device?.data.temperature;
    if (this.device?.data.LocalTemperature)
      return this.device?.data.LocalTemperature
    return undefined;
  }

  

}
