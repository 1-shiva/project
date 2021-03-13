import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShivaComponent } from './shiva/shiva.component';
import { SonyComponent } from './sony/sony.component';
import { HomeComponent } from './home/home.component';
import { ShivaaaPipe } from './shivaaa.pipe';
import { KeysPipe } from './keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShivaComponent,
    SonyComponent,
    HomeComponent,
    ShivaaaPipe,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
