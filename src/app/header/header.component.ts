// src/app/header/header.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() searchChange = new EventEmitter<string>();
  @Output() filterChange = new EventEmitter<string>();

  onSearchChange(event: Event) {
    this.searchChange.emit((event.target as HTMLInputElement).value);
  }

  onFilterChange(event: Event) {
    this.filterChange.emit((event.target as HTMLSelectElement).value);
  }
}


