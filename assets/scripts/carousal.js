document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('carousal');
    const defaultCarousel = document.getElementById('default-carousel');
    
    
    carousel.addEventListener('mouseover', function () {
      // Pause the default carousel when hovered
      defaultCarousel.dataset.carousel = 'pause';
    });

    carousel.addEventListener('mouseout', function () {
      // Resume the default carousel when mouse leaves
      defaultCarousel.dataset.carousel = 'slide';
    });
    

  });