document.addEventListener('DOMContentLoaded', function() {
  const slideshows = document.querySelectorAll('.slideshow');
  
  slideshows.forEach(slideshow => {
    const images = slideshow.querySelectorAll('img');
    let currentIndex = 0;

    function showNextImage() {
      images[currentIndex].classList.add('opacity-0');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.remove('opacity-0');
    }

    setInterval(showNextImage, 5000); // Change image every 5 seconds
  });
});
