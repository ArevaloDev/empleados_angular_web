import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosListComponent } from './components/empleados-list/empleados-list.component';
import { CountEmpleadosComponent } from './components/empleados-list/count-empleados/count-empleados.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosListComponent,
    CountEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
