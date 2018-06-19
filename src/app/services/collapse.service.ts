import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";


@Injectable()
export class CollapseService{

    private show = new Subject<Event>();

    constructor(){ }
    
    setShow( event:Event ){
        this.show.next( event );
    }

    getEventShow(){
        return this.show.asObservable();
    }
}