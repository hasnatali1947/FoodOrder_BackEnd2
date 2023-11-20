// const Pizza = require("./models/pizzaModel")

// const pizzas = [
//     {
//         name: "BARBECUE CHICKEN",
//         sizes: ["small", "medium", "large"],
//         prices: [
//             {
//                 small: 200,
//                 medium: 350,
//                 large: 500,
//             },
//         ],
//         category: ["spicy" , "mild"],
//         image: "https://media-cdn.tripadvisor.com/media/photo-s/0a/c0/7c/98/best-pizza-in-lahore.jpg",
//         description: "Pepper Barbecue Chicken I Cheese",
//         quantity: 1,
//     },
//     {
//         name: "Meet CHICKEN",
//         sizes: ["small", "medium", "large"],
//         prices: [
//             {
//                 small: 200,
//                 medium: 350,
//                 large: 500,
//             },
//         ],
//         category: ["spicy" , "mild"],
//         image: "https://media-cdn.tripadvisor.com/media/photo-s/0a/c0/7c/98/best-pizza-in-lahore.jpg",
//         description: "Meet CHICKEN pizza",
//         quantity: 1,
//     },
//     {
//         name: "Berger",
//         sizes: ["small", "medium", "large"],
//         prices: [
//             {
//                 small: 200,
//                 medium: 350,
//                 large: 500,
//             },
//         ],
//         category: ["spicy" , "mild"],
//         image: "https://media-cdn.tripadvisor.com/media/photo-s/0a/c0/7c/98/best-pizza-in-lahore.jpg",
//         description: "Berger I Cheese",
//         quantity: 1,
//     },
//     {
//         name: "CHICKEN Berger",
//         sizes: ["small", "medium", "large"],
//         prices: [
//             {
//                 small: 200,
//                 medium: 350,
//                 large: 500,
//             },
//         ],
//         category: ["spicy" , "mild"],
//         image: "https://media-cdn.tripadvisor.com/media/photo-s/0a/c0/7c/98/best-pizza-in-lahore.jpg",
//         description: "Karachi CHICKEN Berger",
//         quantity: 1,
//     },
// ];

// Pizza.deleteMany({})
//     .then(() => {
//         return Pizza.create(pizzas);
//     })
//     .then(savedPizzas => {
//         console.log('Pizzas saved to the database:', savedPizzas);
//     })
//     .catch(error => {
//         console.error('Error saving pizzas:', error);
//     });

// module.exports = pizzas;
