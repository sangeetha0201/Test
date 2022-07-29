import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule,} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InstituteComponent } from './institute/institute.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';

const routes: Routes = [
{path:'Dashboard',component:DashboardComponent},
{path:'Institute',component:InstituteComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InstituteComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,RouterModule.forRoot(routes),MatFormFieldModule,MatRadioModule,MatSelectModule,
    MatButtonModule,MatCardModule,MatIconModule,MatToolbarModule,MatListModule,MatSidenavModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
