import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealDetailsComponent } from './meal-details/meal-details.component';
import { MyMealsComponent } from './my-meals/my-meals.component';
import { SearchMealsComponent } from './search-meals/search-meals.component';

const routes: Routes = [
  {path: "", redirectTo: "my-meals", pathMatch: "full"},
  {path: "my-meals", component: MyMealsComponent},
  {path: "search-meals", component: SearchMealsComponent},
  {path: "meal-detail/:id", component: MealDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
