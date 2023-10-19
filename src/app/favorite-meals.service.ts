import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteMealsService {

  subject: BehaviorSubject<String[]>;

  mealIds: Set<String> = new Set(['52771', '52819']);

  constructor() {
    this.subject = new BehaviorSubject([...this.mealIds]);
  }

  getFavoriteMealsIds(): Observable<String[]> {
    return this.subject.asObservable();
  }

  addFavorite(id: String): void {
    this.mealIds.add(id);
    this.subject.next([...this.mealIds]);
  }

  removeFavorite(id: String): void {
    this.mealIds.delete(id);
    this.subject.next([...this.mealIds]);
  }
}
