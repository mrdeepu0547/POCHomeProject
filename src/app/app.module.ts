import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AvatarModule} from 'primeng/avatar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import {DropdownModule} from 'primeng/dropdown';
import { TableComponent } from './table/table.component';
import { CardsComponent } from './cards/cards.component';
import {InputNumberModule} from 'primeng/inputnumber';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {CheckboxModule} from 'primeng/checkbox';
import {MenuModule} from 'primeng/menu';             //api

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TableComponent,
    CardsComponent
  ],
  imports: [
    AccordionModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AvatarModule,
    DropdownModule,
    InputNumberModule,
    MenuModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
