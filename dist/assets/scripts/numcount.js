 // JavaScript to trigger the animation
 
 document.addEventListener("DOMContentLoaded", function () {
    animateCounters();
  });

  function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
      const finalValue = parseInt(counter.getAttribute('data-final-value'));
      const duration = 1000; // Animation duration in milliseconds
      const steps = 60; // Number of steps in the animation
      const stepValue = finalValue / steps;

      let currentValue = 0;
      const interval = setInterval(() => {
        currentValue += stepValue;
        counter.innerText = Math.round(currentValue);

        if (currentValue >= finalValue) {
          clearInterval(interval);
          counter.innerText = finalValue; // Ensure the final value is exact
        }
      }, duration / steps);
    });
  }