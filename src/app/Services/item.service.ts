// src/app/services/item.service.ts
import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: Item[] = [
    { id: 1, name: 'Pizza', category: 'Food', price: 10, quantity: 0, imageUrl: 'assets/images/Pizza.png' },
    { id: 2, name: 'Burger', category: 'Food', price: 7, quantity: 0, imageUrl: 'assets/images/Burger.png' },
    { id: 3, name: 'Sushi', category: 'Food', price: 15, quantity: 0, imageUrl: 'assets/images/Suchi.png' },
    { id: 4, name: 'Pasta', category: 'Food', price: 12, quantity: 0, imageUrl: 'assets/images/Pasta.png' },
    { id: 5, name: 'Cola', category: 'Drink', price: 3, quantity: 0, imageUrl: 'assets/images/VCola.png' },
    { id: 6, name: 'Water', category: 'Drink', price: 1, quantity: 0, imageUrl: 'assets/images/water.png' }
  ];

  getItems(): Item[] {
    return this.items;
  }

  updateItemQuantity(itemId: number, change: number) {
    const item = this.items.find(item => item.id === itemId);
    if (item) {
      item.quantity =  Math.max(0,item.quantity + change);
    }
  }

  searchItems(term: string, filter: string): Item[] {
    if (filter === 'name') {
      return this.items.filter(item => item.name.toLowerCase().includes(term.toLowerCase()));
    } else if (filter === 'category') {
      return this.items.filter(item => item.category.toLowerCase().includes(term.toLowerCase()));
    }
    return this.items;
  }
}
