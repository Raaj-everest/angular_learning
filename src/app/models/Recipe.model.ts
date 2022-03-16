import { Ingredients } from "./ingrediants.model";

export class Recipe {
  name: string;
  description: string;
  imagePath: string;
  ingrediants:Ingredients[]

  constructor(name: string, desc: string, image: string,ingre:Ingredients[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = image;
    this.ingrediants=ingre;
  }
  
}
