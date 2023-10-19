import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MealDbApiService } from '../meal-db-api.service';

@Component({
  selector: 'app-my-meals',
  templateUrl: './my-meals.component.html',
  styleUrls: ['./my-meals.component.scss']
})
export class MyMealsComponent implements OnInit {
  idMeal = '52771';

  mealName$!: Observable<String>;

  constructor(private mealDbApiService: MealDbApiService) {};

  ngOnInit(): void {
    this.mealName$ = this.mealDbApiService.getMeal(this.idMeal).pipe(map(meal => meal.strMeal));
  };
}
