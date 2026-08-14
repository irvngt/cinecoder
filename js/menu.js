(function(){
  const btn = document.getElementById('menu-toggle');
  const nav = document.getElementById('primary-menu');
  if(!btn || !nav) return;

  function toggleMenu(open){
    const isOpen = typeof open === 'boolean' ? open : nav.classList.contains('is-open') === false;
    nav.classList.toggle('is-open', isOpen);
    nav.setAttribute('aria-expanded', String(isOpen));
    btn.setAttribute('aria-expanded', String(isOpen));
    if(isOpen){
      btn.querySelector('.sr-only').textContent = 'Cerrar menú';
      nav.querySelector('a')?.focus();
    } else {
      btn.querySelector('.sr-only').textContent = 'Abrir menú';
      btn.focus();
    }
  }

  btn.addEventListener('click', function(){
    toggleMenu();
  });

  // close on Escape
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && nav.classList.contains('is-open')){
      toggleMenu(false);
    }
  });
})();
