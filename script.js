<script>
const animatedElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('active');
    }
  });
},{threshold:0.2});

animatedElements.forEach(el => observer.observe(el));
</script>
// Animation fade-in quand on scroll
const animatedElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('active');
    }
  });
},{threshold:0.2});

animatedElements.forEach(el => observer.observe(el));
// ----- POPUP IMAGE -----
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const galleryPhotos = document.querySelectorAll('.galerie-grid img');

galleryPhotos.forEach(img => {
  img.addEventListener('click', () => {
    popupImg.src = img.src;
    popup.style.display = 'flex';
  });
});

popup.addEventListener('click', () => {
  popup.style.display = 'none';
});
