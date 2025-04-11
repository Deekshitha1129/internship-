// Add to Cart functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const fruitName = button.parentElement.querySelector('h2').innerText;
    alert(`Added ${fruitName} to cart!`);
  });
});

// Purchase functionality
const purchaseButtons = document.querySelectorAll('.purchase');
purchaseButtons.forEach(button => {
  button.addEventListener('click', () => {
    const fruitName = button.parentElement.querySelector('h2').innerText;
    alert(`Thank you for purchasing ${fruitName}!`);
  });
});