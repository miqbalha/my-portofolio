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

// alert remove
{
  /* <button
              type="button"
              class="btn-close -mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-green-100 p-1.5 text-green-500 hover:bg-green-200 focus:ring-2 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300"
              data-bs-dismiss="alert"
              aria-label="Close"
            >
              <svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button> */
}
