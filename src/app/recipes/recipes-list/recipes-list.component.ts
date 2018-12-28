import {Component, OnInit} from '@angular/core';
import {RecipeModel} from './recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: RecipeModel[] = [
    new RecipeModel('Test Recipe', 'This is test description for my recipe', 'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg'),
    new RecipeModel('Test Recipe 2', 'This is the second test description', 'https://www.maxpixel.net/static/photo/1x/Pasta-Hog-Italian-Recipe-Food-Truffle-Lunch-3663720.jpg')

  ];

  constructor() {
  }

  ngOnInit() {
  }

}
