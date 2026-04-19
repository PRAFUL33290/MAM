(function () {
    var btn = document.getElementById('mobile-menu-btn');
    var menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;
    var icon = btn.querySelector('.material-symbols-outlined');

    function closeMenu() {
        menu.style.maxHeight = '0';
        menu.style.opacity = '0';
        btn.setAttribute('aria-expanded', 'false');
        if (icon) icon.textContent = 'menu';
    }

    function openMenu() {
        menu.style.maxHeight = menu.scrollHeight + 200 + 'px';
        menu.style.opacity = '1';
        btn.setAttribute('aria-expanded', 'true');
        if (icon) icon.textContent = 'close';
    }

    btn.addEventListener('click', function () {
        var isOpen = menu.style.maxHeight && menu.style.maxHeight !== '0px';
        if (isOpen) { closeMenu(); } else { openMenu(); }
    });

    menu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', closeMenu);
    });

    // Position the menu just below the nav bar
    function positionMenu() {
        var nav = document.querySelector('nav, header');
        if (nav) {
            var rect = nav.getBoundingClientRect();
            menu.style.top = (rect.bottom + window.scrollY + 4) + 'px';
        }
    }
    positionMenu();
    window.addEventListener('resize', positionMenu);
})();
