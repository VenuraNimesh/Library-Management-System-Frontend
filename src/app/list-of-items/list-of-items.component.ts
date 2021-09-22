import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../add-book/book";
import {Dvd} from "../add-dvd/dvd";

@Component({
  selector: 'app-list-of-items',
  templateUrl: './list-of-items.component.html',
  styleUrls: ['./list-of-items.component.scss']
})
export class ListOfItemsComponent implements OnInit {

  constructor(private http:HttpClient) { }
  searchText: string;
  items;
  books: Book[] ;
  dvds : Dvd[];

  ngOnInit() {
    this.listOfItems();
  }

  listOfItems(){
    return this.http.get("http://localhost:9000/listOfItems").subscribe(data => {
       this.items = data;
      //console.log(this.items instanceof book)
    });
  }

}
