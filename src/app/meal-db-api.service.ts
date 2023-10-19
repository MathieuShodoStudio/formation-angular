import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs';

const API_BASE_PATH = 'https://www.themealdb.com/api/json/v1/1';

@Injectable({
  providedIn: 'root'
})
export class MealDbApiService {

  constructor(private readonly httpClient : HttpClient) { }

  getMeal(id : String) : Observable<Meal> {
    const urlMeal = `${API_BASE_PATH}/lookup.php?i=${id}`;

    return this.httpClient.get<PayloadMeal>(urlMeal)
      .pipe(map((payload: PayloadMeal) => {
        const {meals} = payload;
        const myMeal = meals[0];
        return myMeal;
      }));
  }

  getCategories() : Observable<Category[]> {
    const url = `${API_BASE_PATH}/list.php?c=list`;

    return this.httpClient.get<PayloadCategory>(url)
      .pipe(map(({meals}) => meals));
  }
  
  getMealBycategory(category : Category) : Observable<Meal[]> {
    const urlMeal = `${API_BASE_PATH}/filter.php?c=${category.strCategory}`;

    return this.httpClient.get<PayloadMeal>(urlMeal)
      .pipe(map((payload: PayloadMeal) => {
        const {meals} = payload;
        return meals;
      }));
  }

}

export interface PayloadCategory {
  meals : Category[];
}

export interface Category {
  strCategory : String;
}

export interface PayloadMeal {
  meals : Meal[];
}

export interface Meal {
  strMeal : String;
  idMeal: String;
  strIngredient1: String;
  strMealThumb: String
  //TODO add explicitly all used fields
}