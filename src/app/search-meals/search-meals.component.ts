import { Component, OnDestroy, OnInit } from '@angular/core';
import { Category, Meal, MealDbApiService } from '../meal-db-api.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-meals',
  templateUrl: './search-meals.component.html',
  styleUrls: ['./search-meals.component.scss']
})
export class SearchMealsComponent implements OnInit, OnDestroy {
  categories$!: Observable<Category[]>;

  categoriesSubscription!: Subscription;
  choosenCategoryControlSubscription!: Subscription;

  choosenCategoryControl!: FormControl;

  mealsByCategory$! : Observable<Meal[]>;


  constructor(private mealDbApiService : MealDbApiService, private router: Router) {}
  
  ngOnInit(): void {
    this.choosenCategoryControl = new FormControl();
    this.choosenCategoryControlSubscription = this.choosenCategoryControl.valueChanges.subscribe(() => this.loadMeals());
    this.loadCategories();
  }

  ngOnDestroy(): void {
    this.categoriesSubscription.unsubscribe();
    this.choosenCategoryControlSubscription.unsubscribe();
  }

  loadCategories(): void {
    this.categories$ = this.mealDbApiService.getCategories();
    this.categoriesSubscription = this.categories$.subscribe(categories => {
      this.choosenCategoryControl.setValue(categories[0]);
      this.loadMeals();
    });
  }

  loadMeals(): void {
    this.mealsByCategory$ = this.mealDbApiService.getMealBycategory( this.choosenCategoryControl.value);
  }
}
