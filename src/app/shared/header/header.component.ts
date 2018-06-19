import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CollapseService } from '../../services/collapse.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _collapse:CollapseService) { }

  ngOnInit() {
  }

  showSideNav(event:Event){
    this._collapse.setShow( event );
  }

}
