import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipeList: Recipe[] = [
    new Recipe(
      'Chocolate Cake',
      'Brown Chocolate cake. Very tasty and yummy.',
      'https://cdn.pixabay.com/photo/2019/01/09/19/25/chocolate-cake-3924094_1280.jpg'
    ),
    new Recipe(
      'Strawberry Cake',
      'Pink Strawberry cake. Very delicious and good looking.',
      'https://cdn.pixabay.com/photo/2019/01/28/10/00/strawberry-cake-3959998_1280.jpg'
    )
  ];
  constructor() {}

  ngOnInit(): void {}
}
