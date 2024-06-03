class AsianFood {
    constructor(name, price){
        this.name = name;
        this.price = price;
    };

    get asian() {
        return `${this.name}, ${this.price}`;
    }

    set asian(foodIn) {
        const [newName, newPrice] = foodIn.split(',');
        this.name = newName;
        this.price = newPrice;
    }

    #privateFood = 'Nigger Meat';

    getFoodInfo() {
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);

        return this.#privateFood;
    }
}

const food = new AsianFood('Noodles', '12$');
const foodTwo = new AsianFood('Ramen', '12$');
food.asian = 'Camel Hump, 30$';
console.log(food.getFoodInfo());
console.log(foodTwo.getFoodInfo());