import { Component, OnInit } from '@angular/core';
import { CocktailCardComponent } from "./cocktail-card/cocktail-card.component";
import { debounceTime, distinctUntilChanged } from "rxjs";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { MatButton, MatButtonModule } from "@angular/material/button";
import { Router } from "@angular/router";
import { CocktailDTO } from "../../shared/dto/cocktail.model";
import { CocktailService } from "../../shared/service/cocktail.service";
import { FavoriteDrinksService } from "../../shared/service/favorite-drinks.service";

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
  standalone: true,
  imports: [
    CocktailCardComponent,
    SearchBarComponent,
    MatButton,
    MatButtonModule
  ]
})
/**
 * Component that displays a search bar and a list of cocktails and their informations.
 */
export class CocktailListComponent implements OnInit {

  cocktails: CocktailDTO[];

  constructor(private readonly cocktailService: CocktailService, private readonly router: Router, private readonly favoriteDrinksService: FavoriteDrinksService) {
  }

  /**
   * Retrieves all cocktails for the initialization
   */
  ngOnInit(): void {
    this.cocktailService.getAllCocktails().subscribe((cocktails: CocktailDTO[]) => {
      this.cocktails = cocktails;
    });
  }

  /**
   * Filters the cocktails depending on the input of the search bar with a debounce time of 300 ms. This filter is not
   * case-sensitive.
   * @param searchInput the search input
   */
  filterOnInput(searchInput: string): void {
    this.cocktailService.getAllCocktails().pipe(debounceTime(300), distinctUntilChanged()).subscribe((cocktails: CocktailDTO[]) =>
      this.cocktails = cocktails.filter(cocktail => cocktail.name.toLowerCase().includes(searchInput)));
  }

  /**
   * Checks if the cocktail with the id given in the parameter is in the favorites.
   * @param cocktailId the cocktail id
   */
  isFavorite(cocktailId: string): boolean {
    return this.favoriteDrinksService.isFavorite(cocktailId);
  }

  /**
   * Toggles the favorite status for the cocktail with the id given in the parameter cocktailId.
   * @param cocktailId the cocktail id
   */
  toggleFavorite(cocktailId: string): void {
    this.favoriteDrinksService.toggleFavorite(cocktailId);
  }

  /**
   * Clears the favorites from the browser (local storage)
   */
  clearFavorites(): void {
    this.favoriteDrinksService.clearFavorites();
  }
}
