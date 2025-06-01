document.addEventListener('DOMContentLoaded', () => {
  const navbarNav = document.querySelector('.navbar-nav');
  const hamburger = document.querySelector('#hamburger-menu');
  const searchButton = document.querySelector('#search-button');
  const searchForm = document.querySelector('.search-form');
  const logo = document.querySelector('.navbar-logo');
  const searchInput = document.querySelector('#search-box');

  // Toggle navbar
  if (hamburger) {
    hamburger.onclick = () => {
      navbarNav?.classList.toggle('active');
    };
  }

  // Toggle search form
  if (searchButton) {
    searchButton.onclick = (e) => {
      e.preventDefault();
      searchForm?.classList.toggle('active');
    };
  }

  // Close navbar/search if clicked outside
  document.addEventListener('click', function (e) {
    if (!hamburger?.contains(e.target) && !navbarNav?.contains(e.target)) {
      navbarNav?.classList.remove('active');
    }
    if (!searchButton?.contains(e.target) && !searchForm?.contains(e.target)) {
      searchForm?.classList.remove('active');
    }
  });

  // Show product detail notification
  document.querySelectorAll('.item-detail-button').forEach((btn) => {
    btn.onclick = (e) => {
      e.preventDefault();
      const notificationBox = document.getElementById('product-notification');
      notificationBox.textContent = 'Es Balok dengan keunggulan prima tersedia pembelian per-Kg';
      notificationBox.style.display = 'block';
      setTimeout(() => {
        notificationBox.style.display = 'none';
      }, 5000);
    };
  });

  // Show alert for cart
  // Fitur keranjang aktif
const cartItems = [];

document.querySelectorAll('.product-card').forEach((productCard) => {
  const cartBtn = productCard.querySelector('.shopping-cart');

  cartBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const name = productCard.querySelector('h3')?.textContent || 'Produk';
    const price = productCard.querySelector('.product-price')?.textContent || '-';
    const imageSrc = productCard.querySelector('img')?.src || '';

    // Simpan ke array
    cartItems.push({ name, price, imageSrc });

    // Update tampilan keranjang
    const cartList = document.getElementById('cart-items');
    const li = document.createElement('li');
    li.innerHTML = `<strong>${name}</strong> - ${price}`;
    cartList.appendChild(li);

    alert(`${name} telah ditambahkan ke keranjang.`);
  });
});

  // Scroll to top on logo click
  if (logo) {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ======= FUNGSI PENCARIAN PRODUK =======
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const keyword = searchInput.value.trim().toLowerCase();
      document.querySelectorAll('.product-card').forEach((product) => {
        const name = product.dataset.name?.toLowerCase() || '';
        product.style.display = name.includes(keyword) ? 'block' : 'none';
      });
    });
  }
});

const cartItems = [];

document.querySelectorAll('.cart-button').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    // Cari elemen produk terdekat (misal div dengan class 'product-card')
    const productCard = btn.closest('.product-card');
    if (!productCard) return;

    // Ambil data produk, misal nama dan harga
    const name = productCard.querySelector('h3')?.textContent || 'Es Balok';
    const price = productCard.querySelector('.15000')?.textContent || '-';

    // Simpan ke keranjang
    cartItems.push({ name, price });

    // Tampilkan alert
    alert(`${name} berhasil ditambahkan ke keranjang.`);

    // (Opsional) Update tampilan keranjang di halaman
    const cartList = document.getElementById('cart-items');
    if (cartList) {
      const li = document.createElement('li');
      li.textContent = `${name} - ${price}`;
      cartList.appendChild(li);
    }
  });
});

