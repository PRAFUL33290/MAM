(function() {
  var btn = document.getElementById('mobile-menu-btn');
  var menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', function() {
      var isOpen = !menu.classList.contains('hidden');
      menu.classList.toggle('hidden', isOpen);
      menu.classList.toggle('flex', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
      btn.querySelector('span').textContent = isOpen ? 'menu' : 'close';
    });
    document.addEventListener('click', function(e) {
      if (!btn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
        btn.setAttribute('aria-expanded', 'false');
        btn.querySelector('span').textContent = 'menu';
      }
    });
  }
})();
