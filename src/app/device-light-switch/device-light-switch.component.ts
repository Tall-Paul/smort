import { Component, OnInit } from '@angular/core';
import { DeviceComponent } from '../device/device.component';

@Component({
  selector: 'app-device-light-switch',
  templateUrl: './device-light-switch.component.html',
  styleUrls: ['./device-light-switch.component.css']
})
export class DeviceLightSwitchComponent extends DeviceComponent implements OnInit {

  getIcon(): string{
    if (this.device?.data.value === "on"){
      return "tungsten";
    } else {
      return "hide_source";
    }
  }

  getValue(): string | undefined {
    return this.device?.data.value;
  }

  toggleLight(){
    let action: string = "";    
    let targets: string = this.getTargets();
    let actionUrl: string = "http://nodered.home/action?targets="+targets+"&action=switch&value="
    if (this.device?.data.value == "on"){
        actionUrl += "off";
    } else {
        actionUrl += "on";
    }
    this.doGetRequest(actionUrl).subscribe();

  }

}
