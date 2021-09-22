import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ChartService} from "../shared/chart.service";
import {NgxChartsModule} from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bookCount:any;
  dvdCount:any;

  constructor(private http:HttpClient, private chart: ChartService) { }

  ngOnInit() {
    this.getBookCount();
    this.getDvdCount();
    this.saveEntry();
  }

  getBookCount(){
    return this.http.get("http://localhost:9000/bookCount").subscribe(data => {
      this.bookCount = data;
    });
  }

  getDvdCount(){
    return this.http.get("http://localhost:9000/dvdCount").subscribe(data => {
      this.dvdCount = data;
    });
  }

  saveEntry(){

  }
}
