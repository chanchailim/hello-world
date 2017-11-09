var restaurants = [{
        name: 'Audrey',
        place: 'esplanade',
        cost: 1000
    },
    {
        name: 'Pizza Company',
        place: 'central',
        cost: 1500
    },
    {
        name: 'Jone Salad',
        place: 'esplanade',
        cost: 500
    },
    {
        name: 'Swesens',
        place: 'esplanade',
        cost: 1000
    },
    {
        name: 'Pizza Hut',
        place: 'central',
        cost: 1500
    }
];



function filter_restaurantsLessThenByAmount(restaurants, amount) {
    return restaurants.filter(function(restaurant) {
        return (restaurant.cost < amount);
    });
}

var restaurants = filter_restaurantsLessThenByAmount(restaurants, 1500);
console.log(restaurants);




function filter_data(restaurant) {
    return (restaurant.cost < 1500);
}


// var restaurants = restaurants.filter(filter_data);
// console.log(restaurants);