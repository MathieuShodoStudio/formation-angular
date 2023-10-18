import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MealDbApiService } from './meal-db-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'formation-angular';
  mealName$!: Observable<String>;

  constructor(private mealDbApiService: MealDbApiService) {};

  ngOnInit(): void {
    this.mealName$ = this.mealDbApiService.getMeal(this.idMeal).pipe(map(meal => meal.strMeal));
  };

  idMeal = '52771';
}

