import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MealDetailsComponent } from './meal-details/meal-details.component';
import { MyMealsComponent } from './my-meals/my-meals.component';
import { SearchMealsComponent } from './search-meals/search-meals.component';
import { MealPreviewComponent } from './meal-preview/meal-preview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { API_BASE_PATH } from './meal-db-api.service';
import { environment } from 'src/environment';

@NgModule({
  declarations: [
    AppComponent,
    MealDetailsComponent,
    MyMealsComponent,
    SearchMealsComponent,
    MealPreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: API_BASE_PATH, useValue: environment.url },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
