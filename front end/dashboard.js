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
const cartItems = [];

function addToCart(productName, price) {
  cartItems.push({ productName, price });
  updateCart();
}

function updateCart() {
  const cartItemsContainer = document.querySelector('.cart-items');
  cartItemsContainer.innerHTML = '';
  cartItems.forEach((item) => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <h3>${item.productName}</h3>
      <p>Price: $${item.price}</p>
    `;
    cartItemsContainer.appendChild(cartItem);
  });
}

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