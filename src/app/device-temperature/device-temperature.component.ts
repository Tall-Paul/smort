import { Component, OnInit, Input } from '@angular/core';
import { DeviceComponent } from '../device/device.component';

@Component({
  selector: 'app-device-temperature',
  templateUrl: './device-temperature.component.html',
  styleUrls: ['./device-temperature.component.css']
})
export class DeviceTemperatureComponent extends DeviceComponent implements OnInit {
  
 

  getValue(): string | undefined{
    let out: string = "0.0";
    if (this.device?.data.temperature)        
      out = this.device?.data.temperature;
    return parseFloat(out).toFixed(1).toString();
  }

  getSetpoint(): string | undefined {
    let out: string = "0.0";
    if (this.device?.data.setpoint)
      out = this.device?.data.setpoint;
    return out;
  }



  

}
