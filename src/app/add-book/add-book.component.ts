import { Component, OnInit } from '@angular/core';
import { Book } from "./book";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {


  constructor(private http:HttpClient) { }
  private items ;

  ngOnInit() {
    this.getAllBooks();
  }

  onSubmit(book : Book){

    console.log(book.authors,book.pagesBook,book.publicationDate)
    this.http.post('http://localhost:9000/books/addbook',book).subscribe(status=> alert(status));
  }

  getAllBooks(){
    return this.http.get("http://localhost:9000/books/getAllBooks").subscribe(data => {
      this.items = data;
    });
  }

  getBookById(){
    return this.http.get("http://localhost:9000/books/getAllBooks").subscribe(data => {
      this.items = data;
      console.log(data);
    });
  }

}
