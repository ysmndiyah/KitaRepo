document.addEventListener('DOMContentLoaded', () => {
  const navbarNav = document.querySelector('.navbar-nav');
  const hamburger = document.querySelector('#hamburger-menu');
  const searchButton = document.querySelector('#search-button');
  const searchForm = document.querySelector('.search-form');
  const logo = document.querySelector('.navbar-logo');

  if (hamburger) {
    hamburger.onclick = () => {
      navbarNav?.classList.toggle('active');
    };
  }

  if (searchButton) {
    searchButton.onclick = (e) => {
      e.preventDefault();
      searchForm?.classList.toggle('active');
    };
  }

  document.addEventListener('click', function (e) {
    if (!hamburger?.contains(e.target) && !navbarNav?.contains(e.target)) {
      navbarNav?.classList.remove('active');
    }
    if (!searchButton?.contains(e.target) && !searchForm?.contains(e.target)) {
      searchForm?.classList.remove('active');
    }
  });

  document.querySelectorAll('.item-detail-button').forEach((btn) => {
    btn.onclick = (e) => {
      e.preventDefault();
      alert('Es Balok dengan keunggulan prima tersedia pembelian per-Kg');
    };
  });

  document.querySelectorAll('.product-icons .shopping-cart').forEach((btn) => {
    btn.onclick = (e) => {
      e.preventDefault();
      alert('Fitur keranjang belum tersedia.');
    };
  });

  if (logo) {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});


