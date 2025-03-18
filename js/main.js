// JavaScript for mobile menu functionality
(() => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const openMenuBtn = document.querySelector('.menu-toggle');
    const closeMenuBtn = document.querySelector('.mobile-menu-close');
  
    const toggleMenu = () => {
      const isMenuOpen = mobileMenu.classList.contains('is-open');
      mobileMenu.classList.toggle('is-open');
      
      // Set appropriate aria-expanded attribute
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      
      // Lock/unlock body scroll when menu is open/closed
      document.body.style.overflow = isMenuOpen ? '' : 'hidden';
    };
  
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
  
    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
      if (e.matches) {
        mobileMenu.classList.remove('is-open');
        openMenuBtn.setAttribute('aria-expanded', false);
        document.body.style.overflow = '';
      }
    });
  })();