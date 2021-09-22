import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DialogService} from "../shared/dialog.service";
import {NotificationService} from "../shared/notification.service";

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.scss']
})
export class DeleteItemComponent implements OnInit {
  ISBNItem: any;

  constructor(private http:HttpClient,
              private dialogService: DialogService,
              private notificationService: NotificationService) { }

  ngOnInit() {
  }

  /*onSubmit(ISBNItem){
    this.ISBNItem = ISBNItem;
    console.log(this.ISBNItem);

   /!* let stringToSplit = this.ISBNItem;
    let x = stringToSplit.split(" ");
    console.log(x[0]);*!/

    this.http.get('http://localhost:9000/items/deleteitem?ISBNItem='+this.ISBNItem).subscribe(status=> console.log( status));
  }*/

  onSubmit(ISBNItem){
    this.ISBNItem = ISBNItem;
    console.log(this.ISBNItem);
    this.dialogService.openConfirmDialog('Are you sure to delete this item?')
    .afterClosed().subscribe(res=>{
      if(res){
        this.http.get('http://localhost:9000/items/deleteItem/'+this.ISBNItem).subscribe(status=> alert(status));
        //this.notificationService.success("").subscribe(status=>alert(status));
      }
    })

   // this.http.get('http://localhost:9000/items/deleteItem/'+this.ISBNItem).subscribe(status=> alert(status));
  }
}
