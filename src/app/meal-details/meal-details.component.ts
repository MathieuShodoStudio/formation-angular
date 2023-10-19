import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal, MealDbApiService } from '../meal-db-api.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.scss']
})
export class MealDetailsComponent implements OnInit {

  ingredients$!: Observable<MeasuredIngredient[]>;

  constructor(private route: ActivatedRoute, private mealDbService: MealDbApiService) {}

  ngOnInit(): void {
    let meal$ = this.getMeal();
    this.ingredients$ = this.extractMeasuredIngredients(meal$);
  }

  extractMeasuredIngredients(meal$: Observable<Meal>): Observable<MeasuredIngredient[]> {
    return meal$.pipe(map(meal => {
      let mealKeys = Object.keys(meal);
      const ingredientsKeys = mealKeys.filter(key => key.startsWith("strIngredient"));
      const measuresKeys = mealKeys.filter(key => key.startsWith("strMeasure"));

      let measuredIngredients = [];
      for (let index = 0; index < ingredientsKeys.length ; index++) {
        const ingredientKey = ingredientsKeys[index];
        const measureKey = measuresKeys[index];
        const ingredient = (meal as any)[ingredientKey];
        if (ingredient) {
          const measuredIngredient: MeasuredIngredient = {ingredient: ingredient, measure: (meal as any)[measureKey]};
          measuredIngredients.push(measuredIngredient);
        }
      }

      return measuredIngredients;
    }));
  }

  getMeal(): Observable<Meal> {
    const id =  this.route.snapshot.paramMap.get('id') ?? "";
    return this.mealDbService.getMeal(id);
  }
}

interface MeasuredIngredient {
  ingredient: String;
  measure: String;
}