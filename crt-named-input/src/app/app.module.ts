import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from "@angular/elements";

import { AppComponent } from './app.component';
import { CrtInputComponent } from './crt-input/crt-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CrtInputComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  entryComponents: [CrtInputComponent]
})
export class AppModule { 
  constructor(private injector: Injector){}

  ngDoBootstrap() {
    const customEl = createCustomElement(CrtInputComponent, {injector: this.injector});
    if (!customElements.get('crt-input')) {
      customElements.define('crt-input', customEl);
    }
  }
}
