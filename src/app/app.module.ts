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



@NgModule({
  declarations: [
    AppComponent,
    RoomOfficeComponent,
    DeviceLightComponent,
    DeviceTemperatureComponent,
    DeviceOccupancyComponent,
    DeviceComponent,
    OverviewLightsComponent,
    OverviewTemperatureComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSliderModule,
    MatExpansionModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
