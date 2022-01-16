import { Component, OnInit, Input } from '@angular/core';
import { DeviceComponent } from '../device/device.component';

@Component({
  selector: 'app-device-temperature',
  templateUrl: './device-temperature.component.html',
  styleUrls: ['./device-temperature.component.css']
})
export class DeviceTemperatureComponent extends DeviceComponent implements OnInit {

  getValue(): string | undefined{
    return this.device?.data.Temperature;
  }

  getBattery(): string | undefined{
    return this.device?.data.BatteryPercentage;
  }

}
