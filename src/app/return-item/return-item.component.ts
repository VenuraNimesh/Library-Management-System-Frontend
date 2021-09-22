import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ReturnItem} from "./returnItem";

@Component({
  selector: 'app-return-item',
  templateUrl: './return-item.component.html',
  styleUrls: ['./return-item.component.scss']
})
export class ReturnItemComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  onSubmit(returnItem:ReturnItem){

    this.http.post('http://localhost:9000/returnItem ', returnItem).subscribe(status=> alert(status));

  }

}
