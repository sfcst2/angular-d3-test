import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NG2D3Module } from 'ng2d3';

import { AppComponent } from './app.component';
import { ForcedGraphComponent } from './forced-graph/forced-graph.component';
import {GraphService} from './graph.service';
import {GraphServiceConfiguration} from './graph.service.configuration';

@NgModule({
  declarations: [
    AppComponent,
    ForcedGraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    NG2D3Module
  ],
  providers: [
    GraphService,
    GraphServiceConfiguration
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
