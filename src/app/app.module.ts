import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSliderModule } from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RoomOfficeComponent } from './room-office/room-office.component';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCard, MatCardModule} from '@angular/material/card';
import { DeviceLightComponent } from './device-light/device-light.component';
import { DeviceTemperatureComponent } from './device-temperature/device-temperature.component';
import { DeviceOccupancyComponent } from './device-occupancy/device-occupancy.component';
import { HttpClientModule } from '@angular/common/http';
import { DeviceComponent } from './device/device.component';
import { OverviewLightsComponent } from './overview-lights/overview-lights.component';
import { OverviewTemperatureComponent } from './overview-temperature/overview-temperature.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ControlLightComponent } from './control-light/control-light.component';
import { ColorPickerModule } from '@iplab/ngx-color-picker';
import { DeviceGroupComponent } from './device-group/device-group.component';
import { RoomHallComponent } from './room-hall/room-hall.component';
import { DeviceVideoComponent } from './device-video/device-video.component';
import { DeviceClockComponent } from './device-clock/device-clock.component';
import { ControlTemperatureComponent } from './control-temperature/control-temperature.component';
import { DeviceLightSlidersComponent } from './device-light-sliders/device-light-sliders.component';
import { DeviceLightSwitchComponent } from './device-light-switch/device-light-switch.component';
import {MatRippleModule} from '@angular/material/core';
import { ControlComponent } from './control/control.component';
import { ListControlsComponent } from './list-controls/list-controls.component';
import { ListPinnedComponent } from './list-pinned/list-pinned.component';




@NgModule({
  declarations: [
    AppComponent,
    RoomOfficeComponent,
    DeviceLightComponent,
    DeviceTemperatureComponent,
    DeviceOccupancyComponent,
    DeviceComponent,
    OverviewLightsComponent,
    OverviewTemperatureComponent,
    ControlLightComponent,
    DeviceGroupComponent,
    RoomHallComponent,
    DeviceVideoComponent,
    DeviceClockComponent,
    ControlTemperatureComponent,
    DeviceLightSlidersComponent,
    DeviceLightSwitchComponent,
    ControlComponent,
    ListControlsComponent,
    ListPinnedComponent
  ],
  imports: [
    BrowserModule,
    ColorPickerModule,
    HttpClientModule,
    MatSliderModule,
    MatExpansionModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
