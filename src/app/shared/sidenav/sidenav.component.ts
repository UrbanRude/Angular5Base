import { Component, OnInit } from '@angular/core';
import { CollapseService } from '../../services/collapse.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  showSideNav:boolean = true;  
  showDashboard:boolean = false;
  showServices:boolean = false;

  constructor( private _collapse:CollapseService ) { }

  ngOnInit() {
    this._collapse.getEventShow().subscribe( event => {
      event.isTrusted ? this.showSideNav = !this.showSideNav : this.showSideNav = false;
    });
  }

}
