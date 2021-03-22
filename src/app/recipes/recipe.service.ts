import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Cheese Pizza',
      'A super-tasty Pizza - just awesome!',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHgPa0G0Z4SbNdkHX-yUGT3hguCQ3vs3l5FA&usqp=CAU',
      [
        new Ingredient('Cheese', 4),
        new Ingredient('Mozzarella', 3)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFZ8FgQHYWBbGPWGaPxs99iuF3npQUJnPv0g&usqp=CAU',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Vegetables', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
