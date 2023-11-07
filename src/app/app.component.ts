import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'recipe-app';
  //value = 2;

  constructor() {}

  ngOnInit(): void {}
}
