import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'recipe-app';
  page = '';

  onChangeSelectedMenu(page: string) {
    this.page = page;
  }

  constructor() {}

  ngOnInit(): void {}

  /*onButtonClicked() {
    this.title = 'Button is clicked! And, this is the name ' + this.name;
  }
  onUpdateName(event: Event) {
    this.name = (<HTMLInputElement>event.target).value;
  }

 onIntervalFired(event: number) {
    console.log(event);
    event % 2 == 0 ? this.oddNumbers.push(event) : this.evenNumbers.push(event);
  }*/
}
