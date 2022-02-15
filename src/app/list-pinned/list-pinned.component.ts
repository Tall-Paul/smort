import { Component, Input, OnInit } from '@angular/core';
import { share } from 'rxjs';
import { BookmarkService } from '../bookmark.service';
import { Control } from '../control/control';

@Component({
  selector: 'app-list-pinned',
  templateUrl: './list-pinned.component.html',
  styleUrls: ['./list-pinned.component.css']
})
export class ListPinnedComponent implements OnInit {



  
  _bookmarkService!: BookmarkService;
  controls = this.bookmarkService.bookmarksChanged.pipe(share());
        

  constructor(private bookmarkService: BookmarkService) { }
       

  ngOnInit(): void { }

}
