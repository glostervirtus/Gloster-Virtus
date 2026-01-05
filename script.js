const photos = document.querySelectorAll('.gallery img');
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

photos.forEach(photo => {
  photo.addEventListener('click', () => {
    lightbox.innerHTML = `<img src="${photo.src}" alt="${photo.alt}">`;
    lightbox.style.display = 'flex';
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
