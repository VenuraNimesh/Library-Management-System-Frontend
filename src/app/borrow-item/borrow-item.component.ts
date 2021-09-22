import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Borrow} from "./borrow";
import {DialogService} from "../shared/dialog.service";

@Component({
  selector: 'app-borrow-item',
  templateUrl: './borrow-item.component.html',
  styleUrls: ['./borrow-item.component.scss']
})
export class BorrowItemComponent implements OnInit {

  constructor(private http:HttpClient,
              private dialogService: DialogService)  { }

  ngOnInit() {
  }

  onSubmit(borrow:Borrow) {
   /* this.dialogService.openConfirmDialog('Are you sure to borrow this item?')
      .afterClosed().subscribe(res => {
      if (res) {
        this.http.post('http://localhost:9000/borrowItem ', borrow).subscribe(status => alert(status));
      }
    })*/
    this.http.post('http://localhost:9000/borrowItem ', borrow).subscribe(status=> alert(status));
  }

   //


}
