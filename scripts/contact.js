// Loading Screen
let loadingText = document.getElementById('loadingText');
let loadingScreen = document.getElementById('loadingScreen');
let wrapAll = document.getElementById('wrap-all');
let body = document.getElementById('body');
let percentage = 0;

let interval = setInterval(() => {
    body.style.overflowY = 'hidden';
    percentage++;
    loadingText.textContent = `Loading ${percentage}%`;


    if (percentage >= 100) {
        clearInterval(interval);
        loadingScreen.style.height = '0';
        wrapAll.style.opacity = '1';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            body.style.overflowY = 'scroll';
        }, 1000); // Match this with the transition duration
    }
}, 8); // 5000ms / 100 steps = 50ms per step

// Navbar Effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('nav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// burger menu
let navbar = document.querySelector('.header-content-right-wrap-a-mobile-tablet')
    
document.querySelector('#menu').onclick = () => {
  navbar.classList.toggle('active')
}

// Burger Menu Close Scroll
window.onscroll = () => {
    {
        navbar.classList.remove('active');
    }
}

// Burger Menu Close Icon
document.querySelector('#close').onclick = () => {
    navbar.classList.remove('active')
}

// Accordion
let acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Icon Row
const iconRows = document.querySelectorAll('.icon-row');
iconRows.forEach(iconRow => {
    iconRow.addEventListener('click', function() {
        this.classList.toggle('active');
        this.classList.toggle('reverse');
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});

// Typewriter Effect
function typewriterEffect(element, texts, delay = 100) {
    let indexText = 0;
    let indexChar = 0;
    let isDeleting = false;
    let textArray = texts[indexText].split('');
    
    function type() {
        if (!isDeleting && indexChar < textArray.length) {
            element.textContent = textArray.slice(0, indexChar + 1).join('') + '|';
            indexChar++;
            if (indexChar === textArray.length) {
                element.classList.add('fade');
            }
            setTimeout(type, delay);
        } else if (isDeleting && indexChar > 0) {
            element.classList.remove('fade');
            element.textContent = textArray.slice(0, indexChar - 1).join('') + '|';
            indexChar--;
            setTimeout(type, delay);
        } else {
            if (!isDeleting) {
                isDeleting = true;
                setTimeout(type, delay);
            } else {
                isDeleting = false;
                indexText++;
                if (indexText >= texts.length) indexText = 0;
                textArray = texts[indexText].split('');
                indexChar = 0;
                element.classList.remove('fade');
                setTimeout(type, delay);
            }
        }
    }
    
    type();
}

const h1 = document.getElementById('teksEffect');
const texts = ['FASHION', 'BEAUTY', ' '];
typewriterEffect(h1, texts);


document.querySelectorAll('#header-content-right-wrap-a a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetElement = document.querySelector(this.getAttribute('href'));
    const targetPosition = targetElement.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // Durasi animasi dalam milidetik
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  });
});

// Slider text
const slider = document.querySelector(".sponsor-slider");

slider.addEventListener("mouseenter", () => {
    slider.style.animationPlayState = "paused";
});

slider.addEventListener("mouseleave", () => {
    slider.style.animationPlayState = "running";
});

// CountEffect
const counters = document.querySelectorAll('.count');
const section = document.getElementById('counter-section');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      counters.forEach(counter => {
        const targetCount = parseInt(counter.getAttribute('data-target'));
        let count = 0;
        const increment = targetCount / 100; // Sesuaikan kecepatan animasi
        const interval = setInterval(() => {
          count += increment;
          counter.textContent = `+${Math.round(count)}`;
          if (count >= targetCount) {
            clearInterval(interval);
          }
        }, 10);
      });
    }
  });
}, options);

observer.observe(section);

// Logo Slider

$(document).ready(function () {
  $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 992,
          settings: {
              slidesToShow: 4
          }
      }, {
          breakpoint: 768,
          settings: {
              slidesToShow: 3
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 2
          }
      }]
  });
});

// Fungsi untuk menampilkan tombol ketika di-scroll ke bawah untuk kembali ke halaman bagian atas
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var scrollTopBtn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block"; // Tampilkan tombol saat di-scroll
  } else {
    scrollTopBtn.style.display = "none"; // Sembunyikan tombol saat di atas
  }
}

// Fungsi untuk melakukan scroll halus ke bagian atas
function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}