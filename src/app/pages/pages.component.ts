import { Component, OnInit } from "@angular/core";
import { CollapseService } from "../services/collapse.service";


@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls:['./pages.component.css']
})

export class PagesComponent implements OnInit {
    
    constructor(private _collapse:CollapseService) { }

    ngOnInit(){
    }

 }