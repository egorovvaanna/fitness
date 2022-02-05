
window.addEventListener('DOMContentLoaded', function () {
    let today = new Date(); 
    let year = today.getFullYear();
    document.getElementById("year").textContent = year + " " + "copyright. All right reserved.";

    
//    бургер
    let trigger = true
    document.querySelector('.header_burger').addEventListener('click', function () {
        if (trigger) {
            document.querySelector('.header_menu').classList.add('active')
            document.querySelector('.header_burger').classList.add('active_burger')
        }
        else {
            document.querySelector('.header_menu').classList.remove('active')
            document.querySelector('.header_burger').classList.remove('active_burger')
        }
        trigger = !trigger
    });

    var menuItems = document.querySelectorAll('.header_menu_item');
    for (var i = 0; i < menuItems.length; ++i) {
        menuItems[i].addEventListener('click', function() {
            document.querySelector('.header_menu').classList.remove('active')
            document.querySelector('.header_burger').classList.remove('active_burger')
        });
    };


});