document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault(); 

  // Ambil data
  const nama = document.getElementById("nama").value;
  const tanggal = document.getElementById("tanggal").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const pesan = document.getElementById("pesan").value;
  const waktu = new Date().toString();

  // Tampilkan ke sisi kanan
  document.getElementById("outputNama").textContent = nama;
  document.getElementById("outputTanggal").textContent = tanggal;
  document.getElementById("outputGender").textContent = gender;
  document.getElementById("outputPesan").textContent = pesan;
  document.getElementById("waktu").textContent = waktu;

});
