import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CocktailPageComponent } from './cocktail-page/cocktail-page.component';
import { IngredientPageComponent } from './ingredient-page/ingredient-page.component';

const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'cocktail/:id', component:CocktailPageComponent},
  {path:'ingredient/:id', component:IngredientPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
