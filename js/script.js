// script.js
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item button');
    const cartList = document.getElementById('cart-list');
    const searchInput = document.getElementById('search');
    const allMenus = document.querySelectorAll('.menu-item');
    let cart = [];
  
    menuItems.forEach((btn) => {
      btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const name = item.querySelector('h3').innerText;
        cart.push(name);
        updateCart();
      });
    });
  
    function updateCart() {
      cartList.innerHTML = '';
      cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        cartList.appendChild(li);
      });
    }
  
    searchInput.addEventListener('keyup', () => {
      const keyword = searchInput.value.toLowerCase();
      allMenus.forEach((item) => {
        const name = item.querySelector('h3').innerText.toLowerCase();
        item.style.display = name.includes(keyword) ? 'block' : 'none';
      });
    });
  });
  