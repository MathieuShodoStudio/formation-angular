import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Meal, MealDbApiService } from '../meal-db-api.service';
import { FavoriteMealsService } from '../favorite-meals.service';

@Component({
  selector: 'app-my-meals',
  templateUrl: './my-meals.component.html',
  styleUrls: ['./my-meals.component.scss']
})
export class MyMealsComponent implements OnInit {

  favoriteMeals$!: Observable<Observable<Meal>[]>;

  constructor(private mealDbApiService: MealDbApiService, private favoriteMealsService: FavoriteMealsService) {};

  ngOnInit(): void {
    const myFavoriteMealsId = this.favoriteMealsService.getFavoriteMealsIds();
    this.favoriteMeals$ = myFavoriteMealsId.pipe(map(ids => this.mealDbApiService.getMeals(ids)));
  }

  removeFavorite(meal: Meal) {
    this.favoriteMealsService.removeFavorite(meal.idMeal);
  }
}
