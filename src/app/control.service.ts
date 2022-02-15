import { EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Control } from './control/control';


@Injectable({
  providedIn: 'root'
})
export class ControlService {

  interval: any;
  controlUrl = "http://nodered.home/controls";
  controls!: Control[];
  @Output() controlsLoaded: EventEmitter<Control[]> = new EventEmitter<Control[]>();
  

  constructor(private http: HttpClient) { 
    this.populateControls();        
  }

  

  populateControls(): void{
    this.requestControls().subscribe((controls: Control[]) => {
       this.controls = controls;
       this.controlsLoaded.emit(controls);
    });
  }

  requestControls(): Observable<Control[]> {    
    return this.http.get<Control[]>(this.controlUrl);
  }

  getControls(): Control[] | undefined{
    return this.controls;
  }

  getControlByName(controlName: string): Control | undefined{
    return this.controls?.find( ({name}) => name === controlName)
  }
}