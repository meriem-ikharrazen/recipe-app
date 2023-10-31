import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() selectedMenu: string = '';

  @Output() onPageChange = new EventEmitter<string>();

  onChangeSelectedMenu(event: Event) {
    this.onPageChange.emit((event.target as HTMLElement).textContent);
  }
}
