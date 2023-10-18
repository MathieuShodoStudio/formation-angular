import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealDbApiService {

  constructor(private readonly httpClient : HttpClient) { }

  getMeal(id : String) : Observable<Meal> {
    const urlMeal = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

    return this.httpClient.get<Payload>(urlMeal)
      .pipe(map((payload: Payload) => {
        const {meals} = payload;
        const myMeal = meals[0];
        return myMeal;
      }));
  }

  
}

export interface Payload {
  meals : Meal[];
}

export interface Meal {
  strMeal : String;
  strIngredient1: String;
}