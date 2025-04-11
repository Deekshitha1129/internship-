// Add fade-in animations when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const contactContainer = document.querySelector('.contact-container');
    const fadeElements = document.querySelectorAll('.fade-in');
  
    // Make the container visible
    contactContainer.classList.add('visible');
  
    // Add a delay to each fade-in element
    fadeElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('visible');
      }, index * 200); // Delay each element by 200ms
    });
  });