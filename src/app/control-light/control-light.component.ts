import { Component, OnInit } from '@angular/core';
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

  public compactControl = new ColorPickerControl();
  protected _colorChangeSubscription: any;
  

  override ngOnInit(): void {
    this.compactControl.setColorPresets(["#FF7900","#FF8100","#FF9227","#FFA757","#FFB16E","#FFD0AB","#FFE4CE","#FFEDDE","#FFFEFA"])

    this._colorChangeSubscription = this.compactControl.valueChanges.subscribe({
      next: (newColor: Color) => {
        console.warn(newColor.getRgba());
      }
    })


    this.getDevice();    
  }
                              


}
