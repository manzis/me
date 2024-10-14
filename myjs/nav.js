function updateNav() {
    const regularFooter = document.getElementById('regular-footer');
    const mobileFooter = document.getElementById('mobile-footer');
    const desktopnav = document.getElementById('desktop-nav');
    const mobilenav = document.getElementById('mobile-nav');
  
    if (window.innerWidth <= 840) {
        /*
      regularFooter.style.display = 'none';  // Hide regular footer
      mobileFooter.style.display = 'flex';
      */
      mobilenav.style.display='flex';
      desktopnav.style.display='none';  // Show mobile footer
    } else {
        /*
      regularFooter.style.display = 'flex'; // Show regular footer
      mobileFooter.style.display = 'none';   // Hide mobile footer
      */
      mobilenav.style.display='none';
      desktopnav.style.display='flex';  
    }
  
  }
  
  // Call updateNav on page load and window resize
  window.addEventListener('load', updateNav);
  window.addEventListener('resize', updateNav);