export class Ingredient {
  public name: string;
  public amount: number;

  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }

  //Ou enlver toutes ces lignes et les remplacer par
  //constrctor(public name: string,public amount: number){}
}
