import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'recipe-app';
  name = '';
  status = 'completed';
  isClicked = 'Button is no clicked!';
  isDisabled = true;

  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
    }, 1000);
  }

  ngOnInit(): void {}

  onButtonClicked() {
    this.title = 'Button is clicked! And, this is the name ' + this.name;
  }
  onUpdateName(event: Event) {
    this.name = (<HTMLInputElement>event.target).value;
  }
}
