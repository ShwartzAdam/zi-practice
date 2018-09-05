import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RowElmntComponent } from './row-elmnt/row-elmnt.component';
import { ListElmntComponent } from './list-elmnt/list-elmnt.component';
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "./data.service";

@NgModule({
  declarations: [
    AppComponent,
    RowElmntComponent,
    ListElmntComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
