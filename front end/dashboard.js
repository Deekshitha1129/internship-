// Switch between sections
const sideNavItems = document.querySelectorAll('.side-nav li');
const contentSections = document.querySelectorAll('.content-section');

sideNavItems.forEach((item) => {
  item.addEventListener('click', () => {
    // Remove active class from all items
    sideNavItems.forEach((navItem) => navItem.classList.remove('active'));
    // Add active class to the clicked item
    item.classList.add('active');

    // Hide all content sections
    contentSections.forEach((section) => section.classList.remove('visible'));
    // Show the selected content section
    const target = item.getAttribute('data-target');
    document.getElementById(target).classList.add('visible');
  });
});

// Profile Picture Upload
const profilePictureUpload = document.getElementById('profile-picture-upload');
const profilePicture = document.getElementById('profile-picture');

profilePictureUpload.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profilePicture.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Cart Functionality
function updateCart() {
  const cartItemsContainer = document.querySelector('.cart-items');
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  
  cartItemsContainer.innerHTML = '';
  
  if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
    return;
  }

  let totalAmount = 0;
  
  cartItems.forEach((item) => {
    totalAmount += item.price;
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}" style="width: 100px; height: 100px; object-fit: cover;">
      <h3>${item.name}</h3>
      <p>Price: Rs ${item.price.toFixed(2)} / ${item.unit}</p>
      <button onclick="removeFromCart(${item.id})">Remove</button>
    `;
    cartItemsContainer.appendChild(cartItem);
  });

  // Add total amount
  const totalElement = document.createElement('div');
  totalElement.classList.add('cart-total');
  totalElement.innerHTML = `<h3>Total: Rs ${totalAmount.toFixed(2)}</h3>`;
  cartItemsContainer.appendChild(totalElement);
}

function removeFromCart(productId) {
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cartItems = cartItems.filter(item => item.id !== productId);
  localStorage.setItem('cart', JSON.stringify(cartItems));
  updateCart();
}

// Initial cart update when page loads
document.addEventListener('DOMContentLoaded', () => {
  updateCart();
});

// Review Section Functionality
const reviewForm = document.getElementById('review-form');
const reviewsList = document.getElementById('reviews');

reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const productName = document.getElementById('product-name').value;
  const reviewText = document.getElementById('review-text').value;

  const reviewItem = document.createElement('li');
  reviewItem.textContent = `${productName}: ${reviewText}`;
  reviewsList.appendChild(reviewItem);

  // Clear the form
  reviewForm.reset();
});