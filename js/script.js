window.onload = function(){

    const menu_logo = document.querySelector('#menu-bar');
    const menu_content = document.querySelector('#mobile-nav');
    const close_icon = document.querySelector(".close_icon")
    const logo = document.querySelector('#logo');
    const header = document.querySelector('header');
    const link = document.querySelector(".nav-link")

    menu_logo.onclick = function() {openMenu()};

    function openMenu() {
        menu_content.classList.toggle("show")
        logo.classList.toggle("no_show")
        menu_logo.classList.toggle("no_show")
        header.classList.toggle("header-padding")
    };

    close_icon.onclick = function() {closeMenu()};

    function closeMenu() {
        menu_content.classList.toggle("show")
        logo.classList.toggle("no_show")
        header.classList.toggle("header-padding")
        menu_logo.classList.toggle("no_show")
    };

    menu_content.addEventListener('click', e=>{

        console.log(e.target)
        console.log(e.target == link)
        console.log(link)
        console.log(e.target == menu_content)
        console.log(menu_content)

        if (menu_content.classList.contains("show") && e.target != menu_content 
            && e.target != menu_logo){
            menu_content.classList.toggle("show")
            logo.classList.toggle("no_show")
            menu_logo.classList.toggle("no_show")
            header.classList.toggle("header-padding")
        }
    });
};