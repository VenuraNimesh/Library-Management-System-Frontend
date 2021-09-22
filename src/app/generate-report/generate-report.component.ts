import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.scss']
})
export class GenerateReportComponent implements OnInit {

  constructor(private http:HttpClient) { }
   book ;

  ngOnInit() {
    this.getGenerateReport();
  }

  getGenerateReport(){
    return this.http.get("http://localhost:9000/generateReport").subscribe(data => {
      this.book = data;
    });
  }
}
