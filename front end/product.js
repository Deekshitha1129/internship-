const fruits = [
  { id: 1, name: "Apple", price: 200, unit: "kg", image: "images/apple.jpeg" },
  { id: 2, name: "Banana", price: 300, unit: "kg", image: "images/banana.jpg" },
  { id: 3, name: "Orange", price: 137, unit: "kg", image: "images/orange.jpeg" },
  { id: 4, name: "Watermelon", price: 140, unit: "pcs", image: "images/watermelon.jpeg" },
  { id: 5, name: "Pineapple", price: 100, unit: "pcs", image: "images/pineapple.jpg" },
  { id: 6, name: "Avocado", price: 240, unit: "pcs", image: "images/avacado.jpeg" },
  { id: 7, name: "Pomegranate", price: 320, unit: "kg", image: "images/pomegranate.jpg" },
  { id: 8, name: "Grapes", price: 150, unit: "kg", image: "images/grapes.jpg" },
  { id: 9, name: "Dragon Fruit", price: 200, unit: "pcs", image: "images/dragonfruit.jpg" },
  { id: 10, name: "Strawberry", price: 400, unit: "kg", image: "images/strawberry.jpg" },
  { id: 11, name: "Peach", price: 150, unit: "kg", image: "images/peach.jpeg" },
  { id: 12, name: "Mango", price: 300, unit: "kg", image: "images/mango.jpeg" }
];

// Initialize cart from localStorage or create empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('fruits-container');
  updateCartCount(); // Update cart count on page load
  
  fruits.forEach(fruit => {
    container.innerHTML += `
      <div class="fruit-card">
        <img src="${fruit.image}" alt="${fruit.name}">
        <h3>${fruit.name}</h3>
        <p class="price">Rs ${fruit.price.toFixed(2)} / ${fruit.unit}</p>
        <button onclick="addToCart(${fruit.id}, '${fruit.name}', ${fruit.price}, '${fruit.unit}', '${fruit.image}')">Add to Cart</button>
        <button onclick="buyNow('${fruit.name}', ${fruit.price}, '${fruit.unit}')">Buy Now</button>
      </div>
    `;
  });
});

function addToCart(id, name, price, unit, image) {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Check if item already exists in cart
  if (!cartItems.some(item => item.id === id)) {
    cartItems.push({ id, name, price, unit, image });
    localStorage.setItem('cart', JSON.stringify(cartItems));
    cart = cartItems;
    updateCartCount();
    alert(`${name} added to cart!`);
  } else {
    alert(`${name} is already in your cart!`);
  }
}

function buyNow(name, price, unit) {
  alert(`Purchased ${name} for Rs ${price.toFixed(2)} per ${unit}. Thank you!`);
}

function updateCartCount() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const cartLink = document.getElementById('cart-link');
  cartLink.textContent = `Cart (${cartItems.length})`;
}