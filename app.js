// Fungsi untuk memeriksa apakah elemen berada dalam jangkauan tampilan
function checkScroll() {
  const sections = document.querySelectorAll('section');
  const scrollPosition = window.scrollY + window.innerHeight; // Posisi scroll + tinggi layar

  sections.forEach((section) => {
    // Jika bagian sudah mencapai posisi scroll
    if (section.offsetTop < scrollPosition) {
      section.classList.add('section-active'); // Menambahkan animasi
    }
  });

  // Menampilkan tombol scroll ke atas jika scroll melewati 200px
  if (window.scrollY > 200) {
    document.getElementById('scrollToTop').classList.add('show');
  } else {
    document.getElementById('scrollToTop').classList.remove('show');
  }
}

// Event listener untuk mendeteksi scroll
window.addEventListener('scroll', checkScroll);

