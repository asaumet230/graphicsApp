import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [],
})
export class GraficaBarraComponent implements OnInit {
  @Input() horizontal: Boolean = false;
  @Input() barChartLabels: Label[] = [];

  @Input() barChartData: ChartDataSets[] = [
    {
      // data: [65, 59, 80, 81, 56, 55, 40],
      // label: 'Series A',
      // backgroundColor: '#7A32E3',
      // hoverBackgroundColor: 'red',
    },
    {
      // data: [28, 48, 40, 19, 86, 27, 90],
      // label: 'Series B',
      // backgroundColor: '#45B3FF',
      // hoverBackgroundColor: 'red',
    },
  ];

  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  constructor() {}

  ngOnInit(): void {
    if (this.horizontal) {
      this.barChartType = 'horizontalBar';
    }
  }
}
