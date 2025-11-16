// Simple Cart System
let cart = [];

function addToCart(item) {
  cart.push(item);
  alert(item + " added to cart!");
  updateCartCount();
}

function updateCartCount() {
  const cartBtn = document.querySelector('.cart-btn');
  cartBtn.textContent = `Cart (${cart.length})`;
}

// Smooth scroll example (optional)
document.querySelector('.shop-btn')?.addEventListener('click', () => {
  document.querySelector('.products').scrollIntoView({
    behavior: 'smooth'
  });
});
