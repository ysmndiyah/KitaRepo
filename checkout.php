<?php
// Koneksi ke database
$host = "localhost";
$user = "root";
$pass = "";
$db   = "marine_ice"; // ganti sesuai nama database kamu

$conn = new mysqli($host, $user, $pass, $db);

// Cek koneksi
if ($conn->connect_error) {
  die("Koneksi gagal: " . $conn->connect_error);
}

// Ambil data dari form
$nama   = $_POST['nama'];
$alamat = $_POST['alamat'];
$no_hp  = $_POST['no_hp'];
$jumlah = $_POST['jumlah'];

// Query insert data ke tabel 'pesanan'
$sql = "INSERT INTO pesanan (nama, alamat, no_hp, jumlah)
        VALUES ('$nama', '$alamat', '$no_hp', '$jumlah')";

if ($conn->query($sql) === TRUE) {
  echo "<script>
          alert('Pesanan berhasil dikirim!');
          window.location.href='index.html'; // arahkan balik ke halaman utama
        </script>";
} else {
  echo "Terjadi kesalahan: " . $conn->error;
}

$conn->close();
?>
