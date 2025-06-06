document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.wa-form');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nama = document.getElementById('nama').value.trim();
    const jumlah = document.getElementById('jumlah').value.trim();
    const nomorTujuan = '6281297765879';

    if (!nama || !jumlah) {
      alert("Silakan isi semua data terlebih dahulu.");
      return;
    }

    const pesan = `🧊 Pemesanan Produk MIJ:\n\nNama: ${nama}\nJumlah Pesanan: ${jumlah} Kg`;
    const encodedPesan = encodeURIComponent(pesan);
    const linkWA = `https://wa.me/${nomorTujuan}?text=${encodedPesan}`;

    window.open(linkWA, '_blank'); // Atau: window.location.href = linkWA;
  });
});
