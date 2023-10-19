import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MealComponent } from './meal/meal.component';
import { MyMealsComponent } from './my-meals/my-meals.component';
import { SearchMealsComponent } from './search-meals/search-meals.component';

@NgModule({
  declarations: [
    AppComponent,
    MealComponent,
    MyMealsComponent,
    SearchMealsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
