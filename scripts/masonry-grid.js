document.addEventListener('DOMContentLoaded', function() {
  const grid = document.querySelector('.masonry-grid');

  fetch('images.json')
    .then(response => response.json())
    .then(images => {
      images.forEach(image => {
        const item = document.createElement('div');
        item.className = 'grid-item';
        item.innerHTML = `<img src="${image.src}" alt="${image.alt}" class="w-full h-auto">`;
        grid.appendChild(item);
      });

      const msnry = new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        gutter: 20,
        percentPosition: true,
        transitionDuration: '0.2s'
      });

      // Trigger layout after all images are loaded
      imagesLoaded(grid, function() {
        msnry.layout();
      });

      const gridItems = document.querySelectorAll('.grid-item');
  
      function revealItems() {
        let delay = 0;
        gridItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('show');
            msnry.layout(); // Re-layout after each item is shown
          }, delay);
          delay += 100; // Increase delay for each subsequent item
        });
      }

      // Use Intersection Observer to trigger animation when grid comes into view
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            revealItems();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      observer.observe(grid);
    })
    .catch(error => console.error('Error:', error));
});
