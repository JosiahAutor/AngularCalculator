import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { BodyComponent } from './components/body/body.component';
import { TipsComponent } from './components/tips/tips.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    BodyComponent,
    TipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
