import { Component, Input } from '@angular/core';
import { Meal } from '../meal-db-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meal-preview',
  templateUrl: './meal-preview.component.html',
  styleUrls: ['./meal-preview.component.scss']
})
export class MealPreviewComponent {
  @Input()
  meal!: Meal;

  constructor(private router: Router) {}

  getMeal(id : String) {
      this.router.navigate([`meal-detail/${id}`])
  }
}
