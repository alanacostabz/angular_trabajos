import { Component, OnInit } from '@angular/core';
import { GraficasService } from 'app/graficas/services/graficas.service';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css'],
})
export class DonaHttpComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: string[] = [
    // 'Download Sales',
    // 'In-Store Sales',
    // 'Mail-Order Sales',
  ];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [],
        backgroundColor: ['#6405F0', '#0724E3', '#05A0F0'], //Ya no es un arreglo de Color
      }, //sino de string y va directamente
      //en los datasets
    ],
  };

  public doughnutChartType: ChartType = 'doughnut';

  constructor(private graficasServie: GraficasService) {}

  ngOnInit(): void {
    // this.graficasServie.getUsuariosRedesSociales().subscribe((data) => {
    //   console.log(data);
    //   const labels = Object.keys(data);
    //   const values = Object.values(data);
    //   this.doughnutChartData = {
    //     labels,
    //     datasets: [{ data: Object.values(values) }],
    //   };
    // });

    this.graficasServie
      .getUsuariosRedesSocialesDonaData()
      .subscribe(({ labels, values }) => {
        this.doughnutChartData = {
          labels,
          datasets: [{ data: values }],
        };
      });
  }
}
