import { JsonpClientBackend } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ControlService } from './control.service';
import { Control, Convert } from './control/control';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  private _bookmarks!: Control[];
  private _bookmarkStrings!: string[];
  private _controlService: ControlService;
  protected interval: any;
  @Output() bookmarksChanged: EventEmitter<(Control)[]> = new EventEmitter<Control[]>();
 
  public isBookmarked(controlName: string): boolean{
    if (this._bookmarks == undefined){
      return false;
    }
    if (this._bookmarks?.find(element => element !== undefined && element.name == controlName) === undefined){
      return false;
    } else {
      return true;
    }
  }

  public bookmarkLoader(){
    const bookmarkString = localStorage.getItem("smort_bookmarks");     
      if (bookmarkString !== null){
        this._bookmarkStrings = JSON.parse(bookmarkString);       
      } else {
        this._bookmarkStrings = [];
      }
    this.controlService.requestControls().subscribe((controls: Control[]) => {
      this._bookmarks = controls.filter(element => this._bookmarkStrings.includes(element.name))
      this.bookmarksChanged.emit(this._bookmarks);      
    }); 

  }


  private saveBookmarks(){
    localStorage.setItem("smort_bookmarks",JSON.stringify(this._bookmarkStrings));
    this.bookmarksChanged.emit(this._bookmarks);  
  }

  public getBookmarks(){
    return this._bookmarks;
  }

  public addBookmark(controlName: string){
    if (!this.isBookmarked(controlName)){
      this._bookmarkStrings.push(controlName);
      this.hydrateControls();
      this.saveBookmarks();
    }
  }

  public removeBookmark(controlName: string){
      this._bookmarkStrings = this._bookmarkStrings.filter(element => element !== controlName);
      this.hydrateControls();
      this.saveBookmarks();
  }

  private hydrateControl(controlName: string): any{
    return this._controlService.getControlByName(controlName);
  }

  private hydrateControls(){
    
    this._bookmarks = this._bookmarkStrings.map(this.hydrateControl,this).filter(control => control !== undefined);
    
  }



  constructor(protected controlService: ControlService) { 
    this._controlService = controlService;
    
    this.bookmarkLoader();
  }
}
