import { Component, OnInit, Input } from '@angular/core';
import { empty } from 'rxjs';
import { deviceUpdate } from '../device-update';
import { Device } from '../device/device';
import { DeviceComponent } from '../device/device.component';
import { DevicesService } from '../devices.service';

@Component({
  selector: 'app-device-light',
  templateUrl: './device-light.component.html',
  styleUrls: ['./device-light.component.css']
})
export class DeviceLightComponent extends DeviceComponent implements OnInit {

  
  deviceState = 'device_on';
  deviceIcon = 'light_mode';
  

  getIcon(): string{
    if (this.device?.data.value === "on"){
      return "light_mode";
    } else {
      return "hide_source";
    }
  }

  getValue(): string | undefined {
    return this.device?.data.value;
  }

  toggleLight(){
    if (this.deviceState == "device_on"){
        this.deviceState = "device_off";
        this.deviceIcon = "hide_source";
    } else {
      this.deviceState = "device_on";
      this.deviceIcon = "light_mode";
    }
  }

  
}
