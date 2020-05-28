const menu = {
  _courses: {
    appetizers: [],
    mains:[],
    desserts: []
  },
  get appetizers(){

  },
  set appetizers(appetizerIn){

  },
   get mains(){

  },
  set mains(mainsIn){

  },
   get desserts(){

  },
  set desserts(dessertsIn){

  },
  get courses(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  addDishToCourse(courseName, dishName , dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      };

      this._courses[courseName].push(dish)
  },

  getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName];
      const index =Math.floor(Math.random() * dishes.length);

      return dishes[index];
  },
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');

    const main  = this.getRandomDishFromCourse('mains');

    const dessert = this.getRandomDishFromCourse('desserts');

    const totalPrice = appetizer.price + main.price + dessert.price;

return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}, The price is $${totalPrice}.`;
   
  }
}
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);

  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.2352342);

  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.4);


  menu.addDishToCourse('mains', 'FIsh', 56);

    menu.addDishToCourse('mains', 'FIsh', 7);

      menu.addDishToCourse('mains', 'FIsh', 10);

        menu.addDishToCourse('desserts', 'Postre de milo', 33);

        menu.addDishToCourse('desserts', 'Postre de milo', 34);

        menu.addDishToCourse('desserts', 'Postre de milo', 11);
  
  
let meal = menu.generateRandomMeal();
console.log(meal);
