import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * Service that manages favorite cocktails via local storage of the browser.
 */
export class FavoriteDrinksService {
  private readonly FAVORITES_KEY = 'favoriteCocktails';
  private favoriteCocktailIds: string[];

  /**
   * Retrieve favorites list from the local storage on initialization.
   */
  constructor() {
    const favoriteCocktailIds = localStorage.getItem(this.FAVORITES_KEY);
    this.favoriteCocktailIds = favoriteCocktailIds ? JSON.parse(favoriteCocktailIds) : [];
  }

  /**
   * Checks if the cocktail with the id given in the parameter is in the favorites.
   * @param cocktailId the cocktail id
   */
  isFavorite(cocktailId: string): boolean {
    return this.favoriteCocktailIds.includes(cocktailId);
  }

  /**
   * Toggles the favorite status for the cocktail with the id given in the parameter cocktailId using local storage of the browser.
   * @param cocktailIdToToggle the cocktail id to toggle favorite status
   */
  toggleFavorite(cocktailIdToToggle: string): void {
    if (this.isFavorite(cocktailIdToToggle)) {
      this.favoriteCocktailIds = this.favoriteCocktailIds.filter(cocktailId => cocktailId !== cocktailIdToToggle);
    } else {
      this.favoriteCocktailIds = [...this.favoriteCocktailIds, cocktailIdToToggle];
    }
    localStorage.setItem(this.FAVORITES_KEY, JSON.stringify(this.favoriteCocktailIds));
  }

  /**
   * Clears all cocktail favorites from the local storage.
   */
  clearFavorites(): void {
    this.favoriteCocktailIds = [];
    localStorage.removeItem(this.FAVORITES_KEY);
  }
}
