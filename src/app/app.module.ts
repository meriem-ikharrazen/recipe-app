import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExerciceComponent } from './exercice/exercice.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { GameControlComponent } from './exercice/game-control/game-control.component';
import { OddComponent } from './exercice/odd/odd.component';
import { EvenComponent } from './exercice/even/even.component';
import { BasiHighlightDirective } from './exercice/basic-highlight/basic-highlight.directive';
import { StructuralDirective } from './exercice/basic-highlight/structural.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    BasiHighlightDirective,
    StructuralDirective,
    DropdownDirective,
    ExerciceComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    RecipeEditComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
