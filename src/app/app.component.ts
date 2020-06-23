import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Form } from '@angular/forms';

export const DATA = [ { 'name': 'John', 'index': '0' }, { 'name': 'John', 'index': '1' }, { 'name': 'John', 'index': '2' }, { 'name': 'John', 'index': '3' }, { 'name': 'John', 'index': '4' }, { 'name': 'John', 'index': '5' }, { 'name': 'John', 'index': '6' }, { 'name': 'John', 'index': '7' }, { 'name': 'John', 'index': '8' }, { 'name': 'John', 'index': '9' }, ];

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  startIndex = 0;
  endIndex = 0;
  indexForm: FormGroup;

  sliceData = DATA;
  spliceData = DATA;

  constructor(private fb: FormBuilder) {
    this.indexForm = this.fb.group({
      indexStart: 0,
      indexEnd: 0
    });
  }

  ngOnInit(){
  }

  onSubmit() {
    let value = this.indexForm.value;

    this.sliceData = this.sliceData.slice(value.indexStart, value.indexEnd);

    this.spliceData.splice(value.indexEnd);
    this.spliceData.splice(0, value.indexStart);
  }
}
