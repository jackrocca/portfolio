document.addEventListener('DOMContentLoaded', function() {
  const menu = document.getElementById('menu');
  const menuItems = document.querySelectorAll('.menu-item');
  const slidingLine = document.getElementById('sliding-line');
  const pages = ['portfolio', 'lifestyle', 'projects', 'blog', 'about'];
  let currentPageIndex = 0;

  function updateNavigation(index) {
    menuItems.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
  
    const activeItem = menuItems[index];
    const menuRect = menu.getBoundingClientRect();
    const activeItemRect = activeItem.getBoundingClientRect();
  
    console.log('Menu left:', menuRect.left);
    console.log('Active item left:', activeItemRect.left);
    console.log('Calculated left:', activeItemRect.left - menuRect.left);
    console.log('Active item width:', activeItemRect.width);
  
    // Add a small buffer to the width for better appearance
    const lineWidth = activeItemRect.width + 10; // 5px on each side
  
    slidingLine.style.width = `${lineWidth}px`;
    slidingLine.style.left = `${activeItemRect.left - menuRect.left}px`;
  }

  function navigateToPage(index) {
    if (index < 0) index = pages.length - 1;
    if (index >= pages.length) index = 0;

    currentPageIndex = index;
    updateNavigation(index);
    const pageName = pages[index];
    if (pageName !== 'portfolio' && window.location.pathname !== `/${pageName}.html`) {
      window.location.href = `${pageName}.html`;
    } else if (pageName === 'portfolio' && !['/', '/index.html'].includes(window.location.pathname)) {
      window.location.href = 'index.html';
    }
  }

  menuItems.forEach((item, index) => {
    item.addEventListener('click', () => navigateToPage(index));
  });

  // Set initial active item based on current URL
  const currentPath = window.location.pathname;
  currentPageIndex = pages.findIndex(page => 
    currentPath.toLowerCase().includes(page) ||
    (currentPath === '/' && page === 'portfolio')
  );
  if (currentPageIndex === -1) currentPageIndex = 0;
  updateNavigation(currentPageIndex);

  // Swipe detection
  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, false);

  document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, false);

  function handleSwipe() {
    const swipeThreshold = 50; // minimum distance for swipe
    if (touchEndX < touchStartX - swipeThreshold) {
      // Swipe left
      navigateToPage(currentPageIndex + 1);
    }
    if (touchEndX > touchStartX + swipeThreshold) {
      // Swipe right
      navigateToPage(currentPageIndex - 1);
    }
  }

  // Arrow key navigation
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') {
      navigateToPage(currentPageIndex + 1);
    } else if (e.key === 'ArrowLeft') {
      navigateToPage(currentPageIndex - 1);
    }
  });

  // Hide navigation when scrolling down, show when scrolling up
  let lastScrollTop = 0;
  const bottomNav = document.getElementById('bottom-nav');

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      bottomNav.style.transform = 'translateY(100%)';
    } else {
      bottomNav.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop;
  });

  function showSwipeIndicators() {
    console.log("showSwipeIndicators called");
    if (sessionStorage.getItem('swipeIndicatorShown')) {
      console.log("Swipe indicator already shown this session");
      return;
    }
  
    const leftIndicator = document.getElementById('swipe-indicator-left');
    const rightIndicator = document.getElementById('swipe-indicator-right');
  
    console.log("Left indicator:", leftIndicator);
    console.log("Right indicator:", rightIndicator);
  
    if (!leftIndicator || !rightIndicator) {
      console.error("Swipe indicators not found in the DOM");
      return;
    }
  
    setTimeout(() => {
      console.log("Adding 'show' class to indicators");
      leftIndicator.classList.add('show');
      rightIndicator.classList.add('show');
  
      setTimeout(() => {
        console.log("Removing 'show' class from indicators");
        leftIndicator.classList.remove('show');
        rightIndicator.classList.remove('show');
        sessionStorage.setItem('swipeIndicatorShown', 'true');
      }, 3000);
    }, 1000);
  }
  
  // Call the showSwipeIndicators function
  showSwipeIndicators();
});
