import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndicatorsComponent } from './indicators/indicators.component';
import { IndicatorsService } from './indicators/indicators.service';
import { ModalComponent } from './indicators/components/modal/modal.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2'

@NgModule({
  declarations: [
    AppComponent,
    IndicatorsComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [IndicatorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
