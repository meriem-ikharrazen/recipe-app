import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe 1',
      'A Test Recipe',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',
      [new Ingredient('Meat', 1), new Ingredient('French fries', 20)]
    ),
    new Recipe(
      'A Test Recipe 2',
      'A Test Recipe',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',
      [new Ingredient('Meat', 1), new Ingredient('French fries', 20)]
    ),
    new Recipe(
      'A Test Recipe 3',
      'A Test Recipe',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',
      [new Ingredient('Meat', 1), new Ingredient('French fries', 20)]
    ),
  ];
  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    //Pour retourner une copie
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    console.log('id ', id);

    return this.recipes[id];
  }

  updateRecipe(id: number, recipe: Recipe) {
    this.recipes[id] = recipe;
    return this.recipes[id];
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }

  constructor(private shoppingService: ShoppingListService) {}
}
