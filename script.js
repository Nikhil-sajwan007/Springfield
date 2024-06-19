/*---- SLIDER FUNCTIONALITY ----*/
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const slider = document.querySelector('.slider');

  // Ensure the slider and slides exist before proceeding
  if (!slider || slides.length === 0) {
    return; // Exit the script if no slider or slides are found
  }

  let currentIndex = 0;
  const totalSlides = slides.length;

  // Clone the first slide and append it to the end
  const firstSlideClone = slides[0].cloneNode(true);
  slider.appendChild(firstSlideClone);

  function showSlide(index) {
    if (index > totalSlides) {
      slider.style.transition = 'none'; // Disable transition for the jump back
      slider.style.transform = 'translateX(0)'; // Jump back to the first slide
      currentIndex = 0;
      setTimeout(() => {
        slider.style.transition = 'transform 0.9s ease-in-out'; // Re-enable transition
        showSlide(currentIndex + 1);
      }, 20); // Wait a tiny bit before advancing to the next slide
    } else {
      const offset = -index * 100;
      slider.style.transform = `translateX(${offset}%)`;
      currentIndex = index;
    }
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  setInterval(nextSlide, 3000); // Change slide every 3 seconds

  // Initialize the first slide
  showSlide(currentIndex);
});


document.addEventListener('DOMContentLoaded', function () {
  // Get all nav links
  const navLinks = document.querySelectorAll('.nav-link');
  // console.log('DOM fully loaded and parsed');
  // console.log('navLinks:', navLinks);

  // Add click event listener to each nav link
  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      // console.log('Link clicked:', this);

      // Remove active class from all nav links
      navLinks.forEach(link => link.classList.remove('active'));
      // console.log('Removed active class from all nav links');

      // Add active class to the clicked nav link
      this.classList.add('active');
      // console.log('Added active class to the clicked link:', this);

      // Delay navigation to show active state change
      setTimeout(() => {
        window.location.href = this.href;
      }, 100); // 100ms delay
    });
  });
});

document.getElementById('menu-toggle').addEventListener('click', function () {
  var nav = document.querySelector('.nav');
  if (nav.style.display === 'block') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'block';
  }
  document.querySelector('.close-icn').addEventListener('click', function () {
    var nav = document.querySelector('.nav');
    nav.style.display = 'none';
  });
});