document.addEventListener('DOMContentLoaded', function () {

  /* ---------- AOS init ---------- */
  if (window.AOS) {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80
    });
  }

  /* ---------- Navbar scroll state ---------- */
  var navbar = document.querySelector('.navbar');
  var lastY = window.scrollY;

  function onScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    var backTop = document.querySelector('.back-top');
    if (window.scrollY > 700) {
      backTop.classList.add('show');
    } else {
      backTop.classList.remove('show');
    }
    lastY = window.scrollY;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.classList.remove('open');
        links.classList.remove('open');
      });
    });
  }

  /* ---------- Back to top ---------- */
  var backTop = document.querySelector('.back-top');
  if (backTop) {
    backTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Animated counters ---------- */
  var counters = document.querySelectorAll('[data-count]');
  var counted = false;

  function animateCounters() {
    if (counted) return;
    counted = true;
    counters.forEach(function (el) {
      var target = parseInt(el.getAttribute('data-count'), 10);
      var duration = 1800;
      var start = null;

      function step(ts) {
        if (!start) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target).toLocaleString('pt-BR');
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target.toLocaleString('pt-BR');
        }
      }
      requestAnimationFrame(step);
    });
  }

  var counterSection = document.querySelector('.counters');
  if (counterSection && 'IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounters();
          obs.disconnect();
        }
      });
    }, { threshold: 0.4 });
    obs.observe(counterSection);
  } else if (counterSection) {
    animateCounters();
  }

  /* ---------- Lazy loading fallback for browsers without native support ---------- */
  document.querySelectorAll('img[loading="lazy"]').forEach(function (img) {
    img.decoding = 'async';
  });

});
