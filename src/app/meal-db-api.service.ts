import { Inject, Injectable, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs';

export const API_BASE_PATH: InjectionToken<string> = new InjectionToken<string>("API_BASE_PATH") ;

@Injectable({
  providedIn: 'root'
})
export class MealDbApiService {

  constructor(private readonly httpClient : HttpClient, @Inject(API_BASE_PATH) private basePath :string ) { }

  getMeal = (id : String) : Observable<Meal> => {
    const urlMeal = `${this.basePath}/lookup.php?i=${id}`;

    return this.httpClient.get<PayloadMeal>(urlMeal)
      .pipe(map((payload: PayloadMeal) => {
        const {meals} = payload;
        const myMeal = meals[0];
        return myMeal;
      }));
  }

  getMeals(idList: String[]): Observable<Meal>[] {
    return idList.map(this.getMeal);
  }

  getCategories() : Observable<Category[]> {
    const url = `${this.basePath}/list.php?c=list`;

    return this.httpClient.get<PayloadCategory>(url)
      .pipe(map(({meals}) => meals));
  }
  
  getMealBycategory(category : Category) : Observable<Meal[]> {
    const urlMeal = `${this.basePath}/filter.php?c=${category.strCategory}`;

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