window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var heroSection = document.querySelector('.hero');
    var heroSectionHeight = heroSection.offsetHeight;
  
    if (window.pageYOffset >= heroSectionHeight) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });

  // Smooth scroll function
function smoothScroll(target, duration) {
    var targetElement = document.querySelector(target);
    var targetPosition = targetElement.offsetTop;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
  
    function scrollAnimation(currentTime) {
      if (startTime === null) {
        startTime = currentTime;
      }
      var timeElapsed = currentTime - startTime;
      var scroll = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, scroll);
      if (timeElapsed < duration) {
        requestAnimationFrame(scrollAnimation);
      }
    }
  
    // Easing function
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(scrollAnimation);
  }
  
  // Smooth scroll on link click
  var scrollLink = document.querySelector('a[href^="#"]');
  scrollLink.addEventListener('click', function (e) {
    e.preventDefault();
    var target = scrollLink.getAttribute('href');
    var duration = 1000; // Adjust duration (in milliseconds) as needed
    smoothScroll(target, duration);
  });
  