import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'formation-angular';
  meal$!: Observable<String>;

  constructor(private readonly httpClient : HttpClient) {};

  ngOnInit(): void {
    this.meal$ = this.getMeal(this.idMeal);
  };

  idMeal = '52771';

  getMeal(id : String) : Observable<String> {
    const urlMeal = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

    return this.httpClient.get<Payload>(urlMeal)
      .pipe(map((payload: Payload) => {
        const {meals} = payload;
        const myMeal = meals[0];
        return myMeal.strMeal;
      }));
  }
}

interface Payload {
  meals : Meal[];
}

interface Meal {
  strMeal : String;
}
