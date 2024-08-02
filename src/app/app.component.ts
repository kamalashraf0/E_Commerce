import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ItemService } from './Services/item.service'
import { Item } from './models/item.model';
import { ItemComponent } from './item/item.component';
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './auth/signin/signin.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, ItemComponent, HeaderComponent, FooterComponent, FormsModule ,SigninComponent, SignUpComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ItemService]
})
export class AppComponent implements OnInit {
  title = 'Restaurant';
  items: Item[] = [];
  selectedCategory: string = 'All';
  searchTerm: string = '';

  constructor(private itemService: ItemService) {
   }

  ngOnInit() {
    this.items = this.itemService.getItems();
  }

  get filteredItems(): Item[] {
    let filtered = this.items;
    if (this.selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === this.selectedCategory);
    }
    if (this.searchTerm) {
      filtered = filtered.filter(item => item.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
    return filtered;
  }

  onSearchChange(term: string) {
    this.searchTerm = term;
  }

  filterByCategory(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedCategory = target.value;
  }
}
