import { Component, OnInit, ViewChild } from '@angular/core';
import { deviceUpdate } from '../device-update';
import { DeviceComponent } from '../device/device.component';

@Component({
  selector: 'app-device-light-sliders',
  templateUrl: './device-light-sliders.component.html',
  styleUrls: ['./device-light-sliders.component.css']
})
export class DeviceLightSlidersComponent extends DeviceComponent implements OnInit {

  @ViewChild('brightnessSlider')brightnessSlider: any;
  @ViewChild('whiteSlider')whiteSlider: any;

  deviceLoaded(): void{
    if (this.device?.data.brightness){
      this.brightnessSlider.value = Number.parseInt(this.device?.data.brightness);
    }
    if (this.device?.data.temperature){
      console.warn(this.device?.data.temperature);
      this.whiteSlider.value = Number.parseInt(this.device?.data.temperature);
    }
  }

  override ngOnInit(): void {
    this.getDevice(this);     


    this._subscription = this.devicesService.deviceUpdate.subscribe({
      next: (event: deviceUpdate) => {
        
        if (event.name === this.deviceName){
          this.getDevice(this);
        }
      }
    })


       
  }

 
  getBrightness(){
    if (this.device?.data.brightness !== undefined)
      return this.device?.data.brightness;
    return undefined;
  }

  brightnessChange(){        
    let targets: string = this.getTargets();   
    let actionUrl: string = "http://nodered.home/action?targets="+targets+"&action=brightness&value="+this.brightnessSlider.value;
    this.doGetRequest(actionUrl).subscribe();    
  }

 whiteChange(){
  let targets: string = this.getTargets();    
  let actionUrl: string = "http://nodered.home/action?targets="+targets+"&action=colour_temperature&value="+this.whiteSlider.value;
  this.doGetRequest(actionUrl).subscribe(); 
  }

}
