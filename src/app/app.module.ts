import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SubCountiesModule} from './sub-counties/sub-counties.module';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import { DataStorageService } from '../services/dataStorage.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SubCountiesModule,
    AppRoutingModule
  ],
  providers: [DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
