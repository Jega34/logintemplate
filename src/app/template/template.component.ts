import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent implements OnInit {
  email: any = null;
  password: any = null;
  constructor() {}

  ngOnInit() {}
  login(form) {
    console.log(form.value);
  }
}
