import { Component, OnInit, Input } from '@angular/core';
import { empty } from 'rxjs';
import { deviceUpdate } from '../device-update';
import { Device } from './device';
import { DevicesService } from '../devices.service';

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

  constructor(private devicesService: DevicesService) {
    this._subscription = this.devicesService.deviceUpdate.subscribe({
      next: (event: deviceUpdate) => {
        if (event.name === this.deviceName){
          this.getDevice();
        }
      }
    })
   }



  getDevice(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.device = this.devicesService.getDeviceByName(this.deviceName);
    if (this.device == undefined){
      this.interval = setInterval(() => {
        this.getDevice() ;
      }, 1000);
    }
  }

  getBattery(): string | undefined{
    return this.device?.data.BatteryPercentage;
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
