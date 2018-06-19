import { Component, OnInit } from "@angular/core";
import { CollapseService } from "../services/collapse.service";


@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls:['./pages.component.css']
})

export class PagesComponent implements OnInit {
    
    marginLeft:string = "150px";

    constructor(private _collapse:CollapseService) { }

    ngOnInit(){
        this._collapse.getEventShow().subscribe(event => {
            console.log( event );
            event.isTrusted ? this.marginLeft = "10px" : this.marginLeft = "150px";
        });
    }

 }