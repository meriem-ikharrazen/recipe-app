import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css'],
})
export class ExerciceComponent implements OnInit {
  username = '';
  isDisabled = true;
  isDisplayed = false;
  fruit = '';
  fruits = [];
  data = ['0:Default msg'];
  count = 0;
  lt = [];
  showText = false;

  constructor() {}

  ngOnInit(): void {}

  onButtonClicked() {
    this.isDisplayed = true;
  }

  getColor() {
    return this.username === 'Meriem' ? 'green' : 'red';
  }

  addFruit() {
    this.count++;
    this.fruits.push(this.count + ':' + this.fruit);
    this.fruit = '';
  }

  showDetails() {
    this.lt.push(this.lt.length);
    this.showText = !this.showText;
  }
}
