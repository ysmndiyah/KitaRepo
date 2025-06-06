document.addEventListener('DOMContentLoaded', () => {
  const navbarNav = document.querySelector('.navbar-nav');
  const hamburger = document.querySelector('#hamburger-menu');
  const logo = document.querySelector('.navbar-logo');

  // Toggle navbar
  if (hamburger) {
    hamburger.onclick = () => {
      navbarNav?.classList.toggle('active');
    };
  }

  // Close navbar jika klik di luar elemen navbar
  document.addEventListener('click', function (e) {
    if (!hamburger?.contains(e.target) && !navbarNav?.contains(e.target)) {
      navbarNav?.classList.remove('active');
    }
  });

  // Tampilkan notifikasi detail produk
  document.querySelectorAll('.item-detail-button').forEach((btn) => {
    btn.onclick = (e) => {
      e.preventDefault();
      const notificationBox = document.getElementById('product-notification');
      if (notificationBox) {
        notificationBox.textContent = 'Es Balok dengan keunggulan prima tersedia pembelian per-Kg';
        notificationBox.style.display = 'block';
        setTimeout(() => {
          notificationBox.style.display = 'none';
        }, 5000);
      }
    };
  });

  // Scroll ke atas saat klik logo
  if (logo) {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
