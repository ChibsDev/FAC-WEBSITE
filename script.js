const header = document.querySelector('header');


window.addEventListener('scroll', function() {
  var heroSection = document.querySelector('.hero');
  var heroSectionHeight = heroSection.offsetHeight;
  var sections = document.querySelectorAll('.about-content');
  var headerBottom = header.getBoundingClientRect().bottom;

  if (window.pageYOffset >= heroSectionHeight) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }

});

function animateMessages() {
  var messages = document.querySelectorAll('.message h1');
  var subMessage = document.querySelector('#subMessage');

  messages[0].classList.add('fade-in');

  setTimeout(function() {
    messages[0].classList.remove('fade-in');
    messages[0].classList.add('fade-out');
  }, 1500); 
  setTimeout(function() {
    messages[1].classList.add('fade-in');
  }, 3500); 
  setTimeout(function() {
    messages[1].classList.remove('fade-in');
    messages[1].classList.add('fade-out');
  }, 5500); 

  setTimeout(function() {
    messages[2].classList.add('fade-in');
    subMessage.classList.add('drop-in');
  }, 7000); 
}

window.onload = animateMessages;

function section2Animation() {
  var contentImg = document.querySelector('#content-img');
  var contentIntro = document.querySelector('#content-text-intro');
  var contentMessage = document.querySelector('#content-text-message');
  var contentLink = document.querySelector('#content-text-link');
  
  contentIntro.classList.add('hide');
  contentLink.classList.add('hide');
  contentImg.style.opacity = 0;
  contentMessage.style.opacity = 0;
 
  setTimeout(function() {
    contentIntro.classList.remove('hide')
    contentIntro.classList.add('typewriter');
    contentImg.classList.add('fade-in-right');
  }, 500); 

  setTimeout(function() {
    contentMessage.classList.add('add-fade-in');
  }, 3500);

  setTimeout(function() {
    contentLink.classList.remove('hide')
    contentLink.classList.add('add-drop-in');
  }, 5000);

}

function aboutPageAnimation() {
  var blocks = document.querySelectorAll('.block');

  blocks.forEach(function(block) {
    block.style.opacity = 0;
    block.classList.remove('pull-up'); 

    setTimeout(function() {
      block.classList.add('pull-up');
    }, 500); 
  });
}





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
  var scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(function(scrollLink) {
    scrollLink.addEventListener('click', function(e) {
      e.preventDefault();
      var target = scrollLink.getAttribute('href');
      var duration = 1000;
      smoothScroll(target, duration);
    });
  });
  
  



  

