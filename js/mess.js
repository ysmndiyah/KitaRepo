document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.wa-form');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nama = document.getElementById('nama').value.trim();
    const pesan = document.getElementById('pesan').value.trim();
    const nomorTujuan = '6281211437153';

    if (!nama || !pesan) {
      alert("Silakan isi semua data terlebih dahulu.");
      return;
    }

    const message = `Pemesanan Produk MIJ:\n\nNama: ${nama}\nPesan: ${pesan}`;
    const encodedPesan = encodeURIComponent(message);
    const linkWA = `https://wa.me/${nomorTujuan}?text=${encodedPesan}`;

    window.open(linkWA, '_blank');
  });
});
