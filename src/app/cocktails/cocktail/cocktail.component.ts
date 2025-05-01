import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import { Location, NgClass } from "@angular/common";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatButton } from "@angular/material/button";
import { CocktailDTO } from "../../shared/dto/cocktail.model";
import { CocktailService } from "../../shared/service/cocktail.service";
import { FavoriteDrinksService } from "../../shared/service/favorite-drinks.service";
import { IsAlcoholicDirective } from "../../shared/directive/is-alcoholic.directive";

@Component({
  selector: 'app-cocktail',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    NgClass,
    MatCardImage,
    MatCardSubtitle,
    MatCardTitle,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatButton,
    IsAlcoholicDirective,
    RouterLink
  ],
  templateUrl: './cocktail.component.html',
  styleUrl: './cocktail.component.scss'
})
/**
 * Component for displaying cocktail information.
 */
export class CocktailComponent implements OnInit {

  cocktail: CocktailDTO;

  constructor(private readonly cocktailService: CocktailService, private readonly route: ActivatedRoute, private readonly router: Router,
              private readonly favoriteDrinksService: FavoriteDrinksService, private readonly location: Location) {
  }

  /**
   * Retrieve the cocktail by the id given in the route params, or navigate to homepage otherwise
   */
  ngOnInit(): void {
    const cocktailId = this.route.snapshot.params['id'];
    this.cocktailService.getCocktailById(cocktailId).subscribe(
      (cocktail) => {
        if (cocktail) {
          this.cocktail = cocktail;
        } else {
          // if no cocktail is found with the id, redirect to the main page
          this.router.navigate(['/']);
        }
      });

  }

  /**
   * Checks if the cocktail with the id given in the parameter is in the favorites.
   * @param cocktailId the cocktail id
   */
  isFavorite(cocktailId: string):
    boolean {
    return this.favoriteDrinksService.isFavorite(cocktailId);
  }

  /**
   * Toggles the favorite status for the cocktail with the id given in the parameter cocktailId.
   * @param cocktailId the cocktail id
   */
  toggleFavorite(cocktailId: string):
    void {
    this.favoriteDrinksService.toggleFavorite(cocktailId);
  }
}
