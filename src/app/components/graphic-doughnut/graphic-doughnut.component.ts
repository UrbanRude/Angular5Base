import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graphic-doughnut',
  templateUrl: './graphic-doughnut.component.html',
  styles: []
})
export class GraphicDoughnutComponent implements OnInit {

  @Input() doughnutChartOptions:Array<any> = [];
  @Input() doughnutChartLabels:string[] = [];
  @Input() doughnutChartData:string[] = [];
  @Input() doughnutChartType:string = '';
  

  constructor() { }

  ngOnInit() {
  }

}
