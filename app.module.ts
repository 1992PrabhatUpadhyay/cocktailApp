import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CocktailPageComponent } from './cocktail-page/cocktail-page.component';
import { IngredientPageComponent } from './ingredient-page/ingredient-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CocktailPageComponent,
    IngredientPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
