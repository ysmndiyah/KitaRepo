function sendToWhatsApp() {
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const pesan = document.getElementById('pesan').value;
  
    const nomorTujuan = '6282245870175';
    const text = `Kritik dan Saran:\n\nNama: ${nama}\nEmail: ${email}\nPesan:\n${pesan}`;
    const encodedText = encodeURIComponent(text);
    const linkWA = `https://wa.me/${nomorTujuan}?text=${encodedText}`;
  
    window.open(linkWA, '_blank');
  }
  