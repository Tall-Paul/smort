import { Component, OnInit, Input } from '@angular/core';
import { empty } from 'rxjs';
import { deviceUpdate } from '../device-update';
import { Device } from './device';
import { DevicesService } from '../devices.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  protected _subscription;
  protected interval: any;
  device: Device | undefined;
  @Input() deviceName='';
  @Input() displayName='';
  @Input() groupedDevices: string | undefined;
  @Input() format='full';

  constructor(protected devicesService: DevicesService, protected httpClient: HttpClient) {
    this._subscription = this.devicesService.deviceUpdate.subscribe({
      next: (event: deviceUpdate) => {
        if (event.name === this.deviceName){
          this.getDevice();
        }
      }
    })
   }

  getTargets(): string{
    let targets: string = this.deviceName;
    if (this.groupedDevices !== undefined){
      targets = this.deviceName+","+this.groupedDevices;
    }
    return targets;
  }

  doGetRequest(url: string){
    return this.httpClient.get(url);
  }

  getDevice(control?: any): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.device = this.devicesService.getDeviceByName(this.deviceName);    
    if (typeof(this.device) === "undefined"){
      this.interval = setInterval(() => {
        this.getDevice(control) ;
      }, 1000);
    } else {
      if (typeof(control) === "object"){
        console.warn(this.device);
        control.deviceLoaded();
      }
    }
  }

  getBattery(): string | undefined{
    return this.device?.data.BatteryPercentage;
  }

  getLinkQuality(): string | undefined{
    return this.device?.data.LinkQuality;
  }

  ngOnInit(): void {
    this.getDevice();    
  }

  ngOnDestroy() {
    if (this.interval) {
        clearInterval(this.interval);
    }
  }

}
