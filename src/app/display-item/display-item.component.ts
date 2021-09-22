import { MdbTableService } from 'angular-bootstrap-md';

import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../add-book/book";
import {Dvd} from "../add-dvd/dvd";

@Component({
  selector: 'app-display-item',
  templateUrl: './display-item.component.html',
  styleUrls: ['./display-item.component.scss']
})
export class DisplayItemComponent implements OnInit {


  searchText: string;

  /*books: Book[] ;
  dvds : Dvd[];
*/
  books : any;
  dvds : any;
  constructor(private tableService: MdbTableService, private http:HttpClient) { }


  getAllBooks() {
    return this.http.get("http://localhost:9000/books/getAllBooks").subscribe(data => {
      this.books = data;

    });
  }
  getAllDvd(){
    return this.http.get("http://localhost:9000/dvds/getAllDvd").subscribe(data => {
      this.dvds = data;
    });
  }

  ngOnInit() {
    this.getAllBooks();
    this.getAllDvd();


  }

}



