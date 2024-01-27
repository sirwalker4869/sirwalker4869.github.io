function changeResolution(button) {
  // Menghapus kelas 'resolusi1' dari semua tombol
  var buttons = document.querySelectorAll(".resolusi, .resolusi1");
  buttons.forEach(function (btn) {
    btn.classList.remove("resolusi1");
  });

  // Menambahkan kelas 'resolusi1' ke tombol yang diklik
  button.classList.add("resolusi1");
}

function tombolDitekan() {
  alert("link sumber desain : https://dribbble.com/shots/14130386-Anime-Batch-Website-Design/attachments/5754011?mode=media");
}
