import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CocktailDTO } from "../dto/cocktail.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
/**
 * Service that contacts an API via http client to retrieve cocktail informations.
 */
export class CocktailService {
  API_URL = 'cocktail-data';
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * Get request to the api url to retrieve all cocktails.
   */
  getAllCocktails(): Observable<CocktailDTO[]> {
    return this.http.get<CocktailDTO[]>(this.API_URL);
  }

  /**
   * Get request to retrieve the specific cocktail with the given id as parameter.
   * @param cocktailId
   */
  getCocktailById(cocktailId: string): Observable<CocktailDTO> {
    return this.http.get<CocktailDTO>(`${this.API_URL}/${cocktailId}`);
  }
}
