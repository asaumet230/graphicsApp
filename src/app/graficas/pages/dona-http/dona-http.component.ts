import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: Label[] = [
    // 'Download Sales',
    // 'In-Store Sales',
    // 'Mail-Order Sales',
  ];
  public doughnutChartData: MultiDataSet = [
    // [350, 450, 100],
    // [50, 150, 120],
    // [250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: ['#FA743C', '#F5AE48', '#FAD23C', '#DEA935', '#F5AE48'],
    },
  ];
  constructor(private graficasService: GraficasService) {}

  ngOnInit(): void {
    // this.graficasService.getUsuariosRedesSociales().subscribe((datos) => {
    //   setTimeout(() => {
    //     //Extraigo los labels:
    //     // const label = Object.keys(datos);
    //     // this.doughnutChartLabels = label;
    //     //Extraigo los Valores:
    //     /* porque push porque es un arreglo dentro de un a
    //     arreglo */
    //     // const values = Object.values(datos);
    //     // this.doughnutChartData.push(values);
    //   }, 500);
    // });

    this.graficasService.getData().subscribe(({ labels, values }) => {
      this.doughnutChartLabels = labels;
      this.doughnutChartData.push(values);
    });
  }
}
