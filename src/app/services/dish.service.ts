import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable()
export class DishService {

  constructor() { }

  getDish(id: number): Promise<Dish> {
    return Promise.resolve(DISHES.filter(dish => dish.id === id)[0])
  }
  getFeaturedDish(): Promise<Dish> {
    return Promise.resolve(DISHES.filter(dish => dish.featured)[0])
  }
  getDishes() : Promise<Dish[]> {
    return Promise.resolve(DISHES);
  }
}
