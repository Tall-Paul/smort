import { EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Device } from './device/device';
import { deviceUpdate } from './device-update';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  interval: any;
  @Output() deviceUpdate: EventEmitter<deviceUpdate> = new EventEmitter<deviceUpdate>();
  devicesUrl = "http://nodered.home/devices";
  devices: Device[] | undefined = [];
  myWebSocket: WebSocketSubject<any> = webSocket('ws://nodered.home/ws/smort');

  constructor(private http: HttpClient) { 
    this.populateDevices();    
    this.myWebSocket.subscribe(    
      msg => this.deviceUpdateMessage(msg), 
      // Called whenever there is a message from the server    
      err => console.log(err), 
      // Called if WebSocket API signals some kind of error    
      () => console.log('complete') 
      // Called when connection is closed (for whatever reason)  
   );
  }

  deviceUpdateMessage(msg: any): void{       
    let ind: number | undefined = this.devices?.findIndex(({name}) => name === msg.name);
    if (ind !== undefined && this.devices){
      this.devices[ind] = msg; 
      
    }    
    this.deviceUpdate.emit({name:msg.name,data:msg.data});
  }

  populateDevices(): void{
    this.requestDevices().subscribe((devices: Device[]) => this.devices = devices);
    
  }

  requestDevices(): Observable<Device[]> {    
    return this.http.get<Device[]>(this.devicesUrl);
  }

  getDevices(): Device[] | undefined{
    return this.devices;
  }

  getDeviceByName(deviceName: string): Device | undefined{
    return this.devices?.find( ({name}) => name === deviceName)
  }
  


}
