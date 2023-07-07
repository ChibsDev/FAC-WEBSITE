const header = document.querySelector('header');
// const heroSection = document.querySelector('.hero');

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

  // try fade in element witth offset height for about content

                                                                    // add fade in for about section in here too
                                                                    //addEventListener scroll to hero page to scroll section2


  // sections.forEach(section => {
  //   const sectionHeight = section.offsetHeight;
  //   const blocks = section.querySelectorAll('.block');

  //   blocks.forEach(block => {
  //     if (sectionHeight <= headerBottom) {
  //       block.classList.add('fade-in');
  //       console.log('scroll function active');
  //     } else {
  //       block.classList.remove('fade-in');
  //     }
  //   });
  // });
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
  // var content = document.querySelector('.content');
  var contentText = document.querySelector('#content-text');
  var contentImg = document.querySelector('#content-img');
  
  contentText.style.opacity = 0;
  contentImg.style.opacity = 0;

  setTimeout(function() {
    contentText.classList.add('add-fade-in');
    contentImg.classList.add('fade-in-right');
  }, 500); 
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
  var scrollLink = document.querySelector('a[href^="#"]');
  scrollLink.addEventListener('click', function (e) {
    e.preventDefault();
    var target = scrollLink.getAttribute('href');
    var duration = 1000; 
    smoothScroll(target, duration);
  });

  var sections = document.querySelectorAll('section');
  var currentSectionIndex = 0;
  
  function scrollListener() {
    var currentSection = sections[currentSectionIndex];
    var nextSection = sections[currentSectionIndex + 1];
  
    if (currentSection && nextSection) {
      var currentSectionHeight = currentSection.offsetHeight;
      var currentSectionTop = currentSection.getBoundingClientRect().top;
      var scrollPosition = currentSection.scrollTop;
  
      if (scrollPosition >= currentSectionTop + currentSectionHeight) {
        currentSectionIndex++;
        var nextSectionId = '#' + nextSection.getAttribute('id');
        var duration = 1000;
        smoothScroll(nextSectionId, duration);
      }
    }
  }
  
  sections.forEach(function(section) {
    section.addEventListener('scroll', scrollListener);
  });
  



  

