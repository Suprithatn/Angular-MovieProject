import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLogin;
  distinctLanguage = [];
  distinctCount = [];
  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.checkLogin();
    this.distinctLanguage = [...new Set(this.movieService.movieDetails.map(item => item.language))];
    //console.log(this.movieService.movieDetails.filter(x => x.language === "Hindi").length);
    for( let lang of this.distinctLanguage){
      this.distinctCount.push(this.movieService.movieDetails.filter(x => x.language === lang).length);
    }
    //console.log(this.distinctCount);
  }

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [...new Set(this.movieService.movieDetails.map(item => item.language))];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: this.distinctCount, label: 'Language' }
  ];

  
}
