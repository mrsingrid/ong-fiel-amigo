const dropdownButton = document.getElementById('dropdown-button');
const mobileNav = document.getElementById('mobile-nav');


dropdownButton.addEventListener('click', function() {
  if (mobileNav.style.display === 'none' || mobileNav.style.display === '') {
    mobileNav.style.display = 'flex';
  } else {
    mobileNav.style.display = 'none';
  }
});
