import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  count = 0;
  @Output() intervaFired = new EventEmitter<number>();
  interval;

  onGameStarted() {
    this.interval = setInterval(() => {
      this.intervaFired.emit(this.count + 1);
      this.count++;
    }, 1000);
  }

  onGameStoped() {
    clearInterval(this.interval);
  }
}
