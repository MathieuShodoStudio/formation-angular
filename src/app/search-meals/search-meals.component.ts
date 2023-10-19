import { Component, OnInit } from '@angular/core';
import { Meal, MealDbApiService } from '../meal-db-api.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-meals',
  templateUrl: './search-meals.component.html',
  styleUrls: ['./search-meals.component.scss']
})
export class SearchMealsComponent implements OnInit {

  mealsByCategory$! : Observable<Meal[]>;

  constructor(private mealDbApiService : MealDbApiService, private router: Router) {}
  
  ngOnInit(): void {
   this.mealsByCategory$ = this.mealDbApiService.getMealBycategory('Vegetarian');
  }

  getMeal(id : String) {
      this.router.navigate([`meal-detail/${id}`])
  }


}
