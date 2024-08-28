AOS.init();




// JavaScript for fullscreen image viewing
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('fullscreen-modal');
  const modalImg = document.getElementById('fullscreen-image');
  const closeModal = document.getElementsByClassName('close-modal')[0];

  document.querySelectorAll('.photo-gallery-item img').forEach(img => {
    img.addEventListener('click', function() {
      modal.style.display = 'block';
      modalImg.src = this.src;
    });
  });

  closeModal.onclick = function() {
    modal.style.display = 'none';
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
});

document.addEventListener('DOMContentLoaded', function() {
  // Select all download buttons
  const downloadButtons = document.querySelectorAll('.download-btn');

  // Add click event listeners to each download button
  downloadButtons.forEach(button => {
    button.addEventListener('click', function() {
      const imageUrl = this.getAttribute('data-image'); // Get image URL from data attribute
      const filename = this.getAttribute('data-filename'); // Get filename from data attribute

      // Create a temporary link element
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = filename;

      // Append the link to the body (necessary for Firefox)
      document.body.appendChild(link);

      // Trigger the download
      link.click();

      // Remove the link from the document
      document.body.removeChild(link);
    });
  });
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