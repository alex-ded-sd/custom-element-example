import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'crt-input',
  template: `<label>{{caption}}</label><input type="text" [placeholder]="caption" style="margin-left: 10px"/>`,
  styles: [`input:{
    margin-left: 10px;
  }`],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CrtInputComponent implements OnInit {
  @Input() caption: string;
  constructor() { }

  ngOnInit() {
  }

}
