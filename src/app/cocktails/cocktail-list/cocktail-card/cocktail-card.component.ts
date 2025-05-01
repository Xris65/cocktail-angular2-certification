import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader } from "@angular/material/card";
import { NgClass } from "@angular/common";
import { RouterLink } from "@angular/router";
import { CocktailDTO } from "../../../shared/dto/cocktail.model";
import { IsAlcoholicDirective } from "../../../shared/directive/is-alcoholic.directive";

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail-card.component.html',
  standalone: true,
  imports: [
    IsAlcoholicDirective,
    MatCardContent,
    MatCardHeader,
    MatCard,
    NgClass,
    RouterLink
  ],
  styleUrls: ['./cocktail-card.component.scss']
})
/**
 * Component for displaying a mat-card containing information of a cocktail.
 */
export class CocktailCardComponent {

  @Input() cocktailDto: CocktailDTO;
  @Output() toggleFavoriteOutput = new EventEmitter<string>();
  @Input() isFavorite: boolean;

  constructor() {
  }

  /**
   * Toggles the favorite status for the cocktail with the id given in the parameter cocktailId by informing the parent
   * to do the action.
   * @param cocktailId the cocktail id
   */
  toggleFavorite(cocktailId: string): void {
    this.toggleFavoriteOutput.emit(cocktailId);
  }
}
