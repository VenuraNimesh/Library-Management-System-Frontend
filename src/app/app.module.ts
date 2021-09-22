import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AddDvdComponent } from './add-dvd/add-dvd.component';
import { BorrowItemComponent } from './borrow-item/borrow-item.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { DisplayItemComponent } from './display-item/display-item.component';
import { GenerateReportComponent } from './generate-report/generate-report.component';
import { ReturnItemComponent } from './return-item/return-item.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { ListOfItemsComponent } from './list-of-items/list-of-items.component';
import { ReadersComponent } from './readers/readers.component';
import {BookFilterPipe} from "./add-book/book-filter.pipe";
import {DvdFilterPipe} from "./add-dvd/dvd-filter.pipe";
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import {ChartService} from "./shared/chart.service";


@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    AddDvdComponent,
    BorrowItemComponent,
    DashboardComponent,
    DeleteItemComponent,
    DisplayItemComponent,
    GenerateReportComponent,
    ReturnItemComponent,
    ListOfItemsComponent,
    ReadersComponent,
    BookFilterPipe,
    DvdFilterPipe,
    MatConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [ChartService],
  bootstrap: [AppComponent],
  entryComponents:[MatConfirmDialogComponent]
})
export class AppModule { }
