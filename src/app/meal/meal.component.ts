import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal, MealDbApiService } from '../meal-db-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {

  meal$!: Observable<Meal>;

  constructor(private route: ActivatedRoute, private mealDbService: MealDbApiService) {}

  ngOnInit(): void {
    this.meal$ = this.getMeal();
  }

  getMeal(): Observable<Meal> {
    const id =  this.route.snapshot.paramMap.get('id') ?? "";
    return this.mealDbService.getMeal(id);
  }
}
