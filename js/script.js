document.getElementById("messageForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Ambil nilai dari input
  const nama = document.getElementById("nama").value;
  const tanggal = document.getElementById("tanggal").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value || "-";
  const pesan = document.getElementById("pesan").value;

  // Waktu sekarang
  const waktu = new Date().toLocaleString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  // Tampilkan ke output
  document.getElementById("waktu").textContent = waktu;
  document.getElementById("outputNama").textContent = nama || "-";
  document.getElementById("outputTanggal").textContent = tanggal || "-";
  document.getElementById("outputGender").textContent = gender;
  document.getElementById("outputPesan").textContent = pesan || "-";

  // Reset form setelah submit
  document.getElementById("messageForm").reset();
});
