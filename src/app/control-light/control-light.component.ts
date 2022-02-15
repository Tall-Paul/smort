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

  
  @Input() showColours: string = "true";
  @Input() showBalance: string = "true";
  @Input() switchDeviceName: string = "";
  @Input() sliderDeviceName: string = "";
  public compactControl = new ColorPickerControl();
  protected _colorChangeSubscription: any;
  private presets = ["#FF8100","#FF9227","#FFA757","#FFB16E","#FFD0AB","#FFE4CE","#FFEDDE","#FFFEFA",
                     "#000000","#222222","#444444","#666666","#888888","#AAAAAA","#CCCCCC","#FFFFFF"];
  

  
  override ngOnInit(): void {
    if (this.switchDeviceName == "")
      this.switchDeviceName = this.deviceName;
    if (this.sliderDeviceName == "")
      this.sliderDeviceName = this.deviceName;
    this.getDevice();     
    this.compactControl.setColorPresets(this.presets).hidePresets();    
    

    this._colorChangeSubscription = this.compactControl.valueChanges.subscribe({
      next: (newColor: Color) => {
        console.warn(newColor.toHsvString());
      }
    })
       
  }

                              


}
