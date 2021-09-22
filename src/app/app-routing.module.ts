import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AddBookComponent} from "./add-book/add-book.component";
import {DeleteItemComponent} from "./delete-item/delete-item.component";
import {DisplayItemComponent} from "./display-item/display-item.component";
import {BorrowItemComponent} from "./borrow-item/borrow-item.component";
import {ReturnItemComponent} from "./return-item/return-item.component";
import {GenerateReportComponent} from "./generate-report/generate-report.component";
import {AddDvdComponent} from "./add-dvd/add-dvd.component";
import {ListOfItemsComponent} from './list-of-items/list-of-items.component';

const routes: Routes = [

  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'addItems/book',
    component:AddBookComponent
  },
  {
    path: 'addItems/dvd',
    component: AddDvdComponent
  },
  {
    path:'deleteItems',
    component:DeleteItemComponent
  },
  {
    path:'displayItems',
    component:DisplayItemComponent
  },
  {
    path:'borrowItems',
    component:BorrowItemComponent
  },
  {
    path:'returnItems',
    component:ReturnItemComponent
  },
  {
    path:'listOfItems',
    component:ListOfItemsComponent
  },
  {
    path:'generateReport',
    component:GenerateReportComponent
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
