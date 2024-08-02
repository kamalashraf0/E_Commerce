// src/app/item/item.component.ts
import { Component, input, Input } from '@angular/core';
import { Item } from '../models/item.model';
import { ItemService } from '../Services/item.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() item!: Item;

  onQuantityChange(change: number) {
    this.item.quantity = Math.max(0,this.item.quantity + change);
  }
}
