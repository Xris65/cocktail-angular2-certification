import { Component, EventEmitter, Output } from '@angular/core';
import { MatCard } from "@angular/material/card";

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    MatCard
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
/**
 * Component that serves as a search bar for searching cocktails.
 */
export class SearchBarComponent {
  @Output() filterCocktails = new EventEmitter<string>();
  searchInput: string;

  /**
   * Sends the signal to the parent to filter results in every input.
   * @param $event the input event
   */
  filterOnInput($event: Event): void {
    this.searchInput = ($event.target as HTMLInputElement).value.toLowerCase();
    this.filterCocktails.emit(this.searchInput);
  }
}
