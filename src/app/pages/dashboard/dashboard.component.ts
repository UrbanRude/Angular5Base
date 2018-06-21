import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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

  chart:any = [];
  doughnut:any = [];
  pie:any=[];

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
  }

}

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
    {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
    {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
    {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
    {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
    {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
    {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
    {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
    {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
    {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
    {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
    {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'}
  ];
  