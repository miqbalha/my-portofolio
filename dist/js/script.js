//navbar fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixnav = header.offsetTop;
  const topNav = document.querySelector('#topnav');

  if (window.pageYOffset > fixnav) {
    header.classList.add('navbar-fixed');
    topNav.classList.remove('hidden');
    topNav.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    topNav.classList.remove('flex');
    topNav.classList.add('hidden');
  }
};

//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// klik diluar navbar
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    navMenu.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// darkmode
const dark = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

dark.addEventListener('click', function () {
  if (dark.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// button darkmode fixed move
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
  dark.checked = true;
} else {
  document.documentElement.classList.remove('dark');
  dark.checked = false;
}
