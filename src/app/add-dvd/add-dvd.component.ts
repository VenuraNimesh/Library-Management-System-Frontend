import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Dvd} from "./dvd";


@Component({
  selector: 'app-add-dvd',
  templateUrl: './add-dvd.component.html',
  styleUrls: ['./add-dvd.component.scss']
})
export class AddDvdComponent implements OnInit {
  private items;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getAllDvd();
  }

  onSubmit(dvd:Dvd){

    // alert(book);
    console.log(dvd.ISBN,dvd.publicationDate);
    this.http.post('http://localhost:9000/dvds/addDvd', dvd).subscribe(status=> alert(status));
  }
  getAllDvd(){
    return this.http.get("http://localhost:9000/dvds/getAllDvd ").subscribe(data => {
      this.items = data;
    });
  }

}
