function createMenuItem(name, price, category) {
    return {'name': name, 'price': price, 'category': category};
}

const pizza = createMenuItem('Pizza', 3, 'any and every');
const breadSticks = createMenuItem('Breadsticks', 3, 'appetizer');
const iceCream = createMenuItem('Ice Cream', 5, 'dessert');

const burger = {
    name: "Burger", 
    price: 18, 
    category: "Lunch", 
    discount: function(string) {
      if (string.toLowerCase === 'teacher' || string.toLowerCase === 'student') {
        this.price = this.price * 0.75;
  
      } else {
        this.price = this.price * .9;
      }
      return this
    }
  }


const reviews = [
    {name: "Daniela", rating: 5, feedback:"Beautiful atmosphere and wonderful vegan options!"},
    {name: "Jack", rating: 3, feedback:"A little too hipster for my taste, but the burger was decent, if overpriced"},
    {name: "Miranda", rating: 4, feedback:"fun trivia and cool vibes"},
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
    {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." },
    {name: "Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."},
    {name: "Reyna", rating: 3.5, feedback: ""},
]

reviews.push({name: 'Karen', rating: 1, feedback: 'Really needs to improve customer service'})

reviews[7].feedback = 'this place is chill with really cool people, great for getting work done on weekdays';

function getReviewByIndex(array, index) {
    return `${array[index].name} gave the restaurant a ${array[index].rating} star review, and there feedback was: ${array[index].feedback}`;
}

function getLastReview(array) {
    return getReviewByIndex(array, array.length - 1);
}


function getReviewByRating(array, value) {
    let output = [];
    for (let i = 0; i <= array.length -1; i++) {
        if (value <= array[i].rating && array[i].rating < value + 1) {
            output.push(array[i]);
        }
    }
    return output;
}

function getLongReviews(array) {
    const output = [];
    
    for (let i = 0; i <= array.length - 1; i++) {
        let feedback = array[i].feedback;
        if (feedback.split(' ').length > 15) {
            output.push(array[i]);
        }
    }
    return output;
}

function carMaker(odo) {
    const output = {
        drive: function(distance) {
            output.odometer = output.odometer + distance;
            return output.odometer;
        },
        odometer: odo,
    }
    return output;
}

let car1 = carMaker(100);
console.log(car1.drive(15));