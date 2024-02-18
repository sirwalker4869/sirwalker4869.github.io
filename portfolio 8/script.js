// URL API untuk mendapatkan jadwal sholat Bogor, Indonesia untuk bulan Februari 2024
const apiUrl = "https://api.aladhan.com/v1/calendarByCity/2024/2?city=Bogor&country=Indonesia&method=2";

// Ambil elemen HTML untuk setiap waktu sholat
const waktuSholatElements = document.querySelectorAll(".waktu-sholat");

// Gunakan fetch() untuk mengambil data dari API
fetch(apiUrl)
  .then((response) => {
    // Periksa apakah respons dari API adalah OK
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Jika respons OK, ubah respons menjadi JSON
    return response.json();
  })
  .then((data) => {
    // Ambil jadwal sholat dari data yang diperoleh dari API
    const jadwalSholat = data.data[0].timings;

    // Update waktu sholat di halaman web dengan data dari API
    waktuSholatElements[0].innerHTML = `<h5 class="waktu-sholat">${jadwalSholat.Fajr}</h5>`;
    waktuSholatElements[1].innerHTML = `<h5 class="waktu-sholat">${jadwalSholat.Dhuhr}</h5>`;
    waktuSholatElements[2].innerHTML = `<h5 class="waktu-sholat">${jadwalSholat.Asr}</h5>`;
    waktuSholatElements[3].innerHTML = `<h5 class="waktu-sholat">${jadwalSholat.Maghrib}</h5>`;
    waktuSholatElements[4].innerHTML = `<h5 class="waktu-sholat">${jadwalSholat.Isha}</h5>`;
  })
  .catch((error) => {
    // Tangani kesalahan jika terjadi
    console.error("There was an error!", error);
    alert("Maaf, terjadi kesalahan dalam mengambil data jadwal sholat.");
  });
