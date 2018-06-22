import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graphic-bar',
  templateUrl: './graphic-bar.component.html',
  styles: []
})
export class GraphicBarComponent implements OnInit {

  graficos: any = {
    'grafico1': {
      'labels': ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      'data':  [24, 30, 46],
      'type': 'doughnut',
      'leyenda': 'El pan se come con',
      'options':{
                'backgroundColor':['rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)'],
                'borderColor': ['rgba(255,99,132,1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)'],
                'borderWidth': 1
            }
    },
    'grafico2': {
      'labels': ['Hombres', 'Mujeres'],
      'data':  [4500, 6000],
      'type': 'doughnut',
      'leyenda': 'Entrevistados',
      'options':{
            'backgroundColor':['rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)'],
            'borderColor': ['rgba(255,99,132,1)','rgba(54, 162, 235, 1)']
      }
    },
    'grafico3': {
      'labels': ['Si', 'No'],
      'data':  [95, 5],
      'type': 'doughnut',
      'leyenda': '¿Le dan gases los frijoles?',
      'backgroundColor':['rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)'],
      'borderColor': ['rgba(255,99,132,1)','rgba(54, 162, 235, 1)']
    },
    'grafico4': {
      'labels': ['No', 'Si'],
      'data':  [85, 15],
      'type': 'doughnut',
      'leyenda': '¿Le importa que le den gases?',
      'backgroundColor':['rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)'],
      'borderColor': ['rgba(255,99,132,1)','rgba(54, 162, 235, 1)']
    },
  };

  @Input() barChartData:any[] = [{data:this.graficos.grafico1.data, label: 'Series A'}]
  @Input() barChartLabels:string[] = this.graficos.grafico1.labels;
  @Input() barChartType:string = 'bar';
  @Input() barChartLegend:boolean = true;
  @Input() barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  backColor = JSON.stringify(this.graficos.grafico1.options)


  barChartColors:Array<any> = [{
    backgroundColor: this.graficos.grafico1.options.borderColor,
    borderColor: this.graficos.grafico1.options.borderColor,
    borderWidth: 1
  }];
  

  constructor() { 
    // console.log( this.backColor );
    console.log( this.graficos.grafico1.options );
  }

  ngOnInit() {
  }

}
