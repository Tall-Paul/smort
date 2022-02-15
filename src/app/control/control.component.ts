import { Component, Input, OnInit } from '@angular/core';
import { BookmarkService } from '../bookmark.service';
import { ControlService } from '../control.service';
import { Control } from './control';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {


  protected controlInterval: any;
  protected bookmarkInterval: any;
  controlDevice: Control | undefined;
  @Input() controlName='';
  protected _bookmarkService!: BookmarkService;
  protected _controlService!: ControlService;
  bookmarkIcon = "star_outline";
  private _bookmarkSubscription: any;
  private _controlSubscription: any;

  getControl(): void {
    this.controlDevice = this.controlService.getControlByName(this.controlName);    
  }

  getType(): string{
    if (this.controlDevice){
      return this.controlDevice.type;
    } else {
      return "";
    }
  }

  getName(): string{
    if (this.controlDevice){
      return this.controlDevice.name;
    }
    else {
      return "";
    }
  }

  getPrimaryDevice(): string {
    if (this.controlDevice){
      return this.controlDevice.devices.primary;
    } else {
      return "";
    }
  }

  getOnOffDevice(): string {
    if (this.controlDevice){
      return this.controlDevice.devices.onOffDevice || "";
    } else {
      return "";
    }
  }

  getGroupedDevices(): string | undefined {
    if (this.controlDevice){
      return this.controlDevice.devices.groupedDevices || "";
    } else {
      return "";
    }
  }

  isBookmarked(): boolean{
    if (this.controlDevice !== undefined && this._bookmarkService.isBookmarked(this.controlDevice.name)){
      return true;
    } else {
      return false;
    }
  }

  updateIcon(){
      console.log("update icon for"+this.controlDevice);
      if (this.isBookmarked()){
        this.bookmarkIcon = "star";
      } else {
        this.bookmarkIcon = "star_outline";
      }
  }

  toggleBookmark() {
    if (this.controlDevice === undefined)
      return;
    if (this.isBookmarked()){
      this._bookmarkService.removeBookmark(this.controlDevice.name);
    } else {
      this._bookmarkService.addBookmark(this.controlDevice.name);
    }
    this.updateIcon();
  }

  constructor(private controlService: ControlService, private bookmarkService: BookmarkService) {     
    this._bookmarkService = bookmarkService;
    this._controlService = controlService;
   
  }

  ngOnInit(): void {
    this.getControl();
    this.updateIcon();
    this._bookmarkSubscription = this._bookmarkService.bookmarksChanged.subscribe({      
      next: (bookmarks: any) => {
        console.log("bookmarks updated subscription");
        this.updateIcon();
        return bookmarks;
      }
    });
    this.getControl();
    this._controlSubscription = this._controlService.controlsLoaded.subscribe({      
      next: (event: any) => {
        console.log("control request subscription");
        this.getControl();
        return event;
      }
    });
  }




}
