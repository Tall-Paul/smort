import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSlider, MatSliderChange } from '@angular/material/slider';
import { Color, ColorPickerControl } from '@iplab/ngx-color-picker';
import { empty, Observable } from 'rxjs';
import { deviceUpdate } from '../device-update';
import { Device } from '../device/device';
import { DeviceComponent } from '../device/device.component';
import { DevicesService } from '../devices.service';

@Component({
  selector: 'app-control-light',
  templateUrl: './control-light.component.html',
  styleUrls: ['./control-light.component.css']
})
export class ControlLightComponent extends DeviceComponent implements OnInit {

  @ViewChild('brightnessSlider')brightnessSlider: any;
  @ViewChild('whiteSlider')whiteSlider: any;
  @Input() showColours: string = "true";
  @Input() showBalance: string = "true";
  public compactControl = new ColorPickerControl();
  protected _colorChangeSubscription: any;
  private presets = ["#FF8100","#FF9227","#FFA757","#FFB16E","#FFD0AB","#FFE4CE","#FFEDDE","#FFFEFA",
                     "#000000","#222222","#444444","#666666","#888888","#AAAAAA","#CCCCCC","#FFFFFF"];
  

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
    this.compactControl.setColorPresets(this.presets).hidePresets();    
    

    this._colorChangeSubscription = this.compactControl.valueChanges.subscribe({
      next: (newColor: Color) => {
        console.warn(newColor.toHsvString());
      }
    })

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
