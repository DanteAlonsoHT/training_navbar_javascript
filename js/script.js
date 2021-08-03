window.onload = function () {
  const menuLogo = document.querySelector('#menu-bar');
  const menuContent = document.querySelector('#mobile-nav');
  const closeIcon = document.querySelector('.close_icon');
  const logo = document.querySelector('#logo');
  const header = document.querySelector('header');

  function openMenu() {
    menuContent.classList.toggle('show');
    logo.classList.toggle('no_show');
    menuLogo.classList.toggle('no_show');
    header.classList.toggle('header-padding');
  }

  menuLogo.onclick = function () { openMenu(); };

  function closeMenu() {
    menuContent.classList.toggle('show');
    logo.classList.toggle('no_show');
    header.classList.toggle('header-padding');
    menuLogo.classList.toggle('no_show');
  }

  closeIcon.onclick = function () { closeMenu(); };

  menuContent.addEventListener('click', (e) => {
    if (menuContent.classList.contains('show') && e.target !== menuContent
            && e.target !== menuLogo) {
      menuContent.classList.toggle('show');
      logo.classList.toggle('no_show');
      menuLogo.classList.toggle('no_show');
      header.classList.toggle('header-padding');
    }
  });
};