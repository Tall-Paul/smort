import { Component, Input, OnInit } from '@angular/core';
import { share } from 'rxjs';
import { ControlService } from '../control.service';
import { Control } from '../control/control';

@Component({
  selector: 'app-list-controls',
  templateUrl: './list-controls.component.html',
  styleUrls: ['./list-controls.component.css']
})
export class ListControlsComponent implements OnInit {

  controls = this.controlService.controlsLoaded.pipe(share());

  constructor(private controlService: ControlService) {}

  ngOnInit(): void {
    
  }

}
