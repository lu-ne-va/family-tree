import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {FamilyTreeService} from "./family-tree.service";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import { TreeComponent } from './tree/tree.component';
import { MemberComponent } from './member/member.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    MemberComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    FamilyTreeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
