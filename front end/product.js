// Sample data for 30 fruits with units
const fruits = [
  { name: "Apple", price: 200, unit: "kg", image: "images/apple.jpeg" },
  { name: "Banana", price: 300, unit: "kg", image: "images/banana.jpg" },
  { name: "Orange", price: 137, unit: "kg", image: "images/orange.jpeg" },
  { name: "Watermelon", price: 140, unit: "pcs", image: "images/watermelon.jpeg" },
  { name: "Pineapple", price: 100, unit: "pcs", image: "images/pineapple.jpg" },
  { name: "Avocado", price: 240, unit: "pcs", image: "images/avacado.jpeg" },
  { name: "Pomegranate", price: 320, unit: "kg", image: "images/pomegranate.jpg" },
  { name: "Grapes", price: 150, unit: "kg", image: "images/grapes.jpg" },
  { name: "Dragon Fruit", price: 200, unit: "pcs", image: "images/dragonfruit.jpg" },
  { name: "Strawberry", price: 400, unit: "kg", image: "images/strawberry.jpg" },
  { name: "Peach", price: 150, unit: "kg", image: "images/peach.jpeg" },
  { name: "Mango", price: 300, unit: "kg", image: "images/mango.jpeg" }
];

let cart = [];

// Display fruits
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('fruits-container');
  
  fruits.forEach(fruit => {
    container.innerHTML += `
      <div class="fruit-card">
        <img src="${fruit.image}" alt="${fruit.name}">
        <h3>${fruit.name}</h3>
        <p class="price">Rs ${fruit.price.toFixed(2)} / ${fruit.unit}</p> <!-- Added unit -->
        <button onclick="addToCart('${fruit.name}', ${fruit.price}, '${fruit.unit}')">Add to Cart</button>
        <button onclick="buyNow('${fruit.name}', ${fruit.price}, '${fruit.unit}')">Buy Now</button>
      </div>
    `;
  });
});

// Cart functions
function addToCart(name, price, unit) {
  cart.push({ name, price, unit });
  updateCartCount();
  alert(`${name} added to cart!`);
}

function buyNow(name, price, unit) {
  alert(`Purchased ${name} for Rs ${price.toFixed(2)} per ${unit}. Thank you!`);
}

function updateCartCount() {
  const cartLink = document.getElementById('cart-link');
  cartLink.textContent = `Cart (${cart.length})`;
}