import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MealDbApiService } from './meal-db-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formation-angular';
}

