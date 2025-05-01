/**
 * Cocktail DTO containing informations about a cocktail.
 */
export interface CocktailDTO {
  id: string,
  name: string,
  isAlcoholic: boolean,
  imageUrl: string,
  instructions: string,
  ingredients: string[]
}
