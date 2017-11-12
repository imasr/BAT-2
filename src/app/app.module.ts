import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule,
  MatProgressSpinnerModule, MatIconModule, MatListModule } from '@angular/material';

import 'hammerjs';
import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { routes } from './app.router';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ViewtableComponent } from './viewtable/viewtable.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { SkuComponent } from './sku/sku.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidenavComponent,
    ViewtableComponent,
    FormComponent,
    TableComponent,
    SkuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatListModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
