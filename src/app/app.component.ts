import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;

  constructor() { }

  ngOnInit() {
    // We call a service that gets us the data
    this.title = 'Hello World using data binding';
  }
}
