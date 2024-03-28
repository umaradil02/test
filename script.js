function classToggle() {
    const navs = document.querySelectorAll('.navbar')

    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('#menu-icon')
    .addEventListener('click', classToggle);
    