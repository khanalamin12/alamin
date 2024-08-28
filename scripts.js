
AOS.init();


    
    document.addEventListener('DOMContentLoaded', function() {
      const progressBars = document.querySelectorAll('.progress');
    
      function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
    
      function checkProgress() {
        progressBars.forEach(bar => {
          if (isElementInViewport(bar)) {
            bar.style.animationPlayState = 'running';
          }
        });
      }
    
      window.addEventListener('scroll', checkProgress);
      window.addEventListener('resize', checkProgress);
    
      // Initialize the animation to be paused initially
      progressBars.forEach(bar => {
        bar.style.animationPlayState = 'paused';
      });
    
      checkProgress(); // Initial check in case the element is already in view on load
    });
    
    
    
    
    
    
    
    
// Show the button when the user scrolls down 20px from the top
window.onscroll = function() {
  const scrollUpBtn = document.getElementById("scrollUpBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
};

// Scroll to the top when the button is clicked with animation
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}