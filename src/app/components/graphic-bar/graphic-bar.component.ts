import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graphic-bar',
  templateUrl: './graphic-bar.component.html',
  styles: []
})
export class GraphicBarComponent implements OnInit {

  @Input() barChartData:any[] = [{data: [65, 59, 80, 81, 56, 55, 41], label: 'Series A'}]
  @Input() barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  @Input() barChartType:string = 'bar';
  @Input() barChartLegend:boolean = true;
  @Input() barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  barChartColors:Array<any> = [{
    backgroundColor:[
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)']
  }];
  

  constructor() { }

  ngOnInit() {
  }

}
