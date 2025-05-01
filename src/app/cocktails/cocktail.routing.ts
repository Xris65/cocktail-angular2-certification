import { Routes } from "@angular/router";
import { CocktailComponent } from "./cocktail/cocktail.component";
import { CocktailListComponent } from "./cocktail-list/cocktail-list.component";

/**
 * Routes for cocktail navigation
 */
export const cocktailRouting: Routes = [
  {
    path: '',
    component: CocktailListComponent,
  },
  {
    path: ':id',
    component: CocktailComponent
  }
];
