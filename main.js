document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      mainNav.classList.toggle('open');
    });

    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mainNav.classList.remove('open');
      });
    });
  }

  const googleFormIframe = document.getElementById('google-form-iframe');
  const googleFormSetup = document.getElementById('google-form-setup');
  const googleFormDirectLink = document.getElementById('google-form-direct-link');

  if (googleFormIframe && typeof GOOGLE_FORM_ID !== 'undefined') {
    const isConfigured = GOOGLE_FORM_ID && GOOGLE_FORM_ID !== 'YOUR_FORM_ID';

    if (isConfigured) {
      googleFormIframe.src = GOOGLE_FORM_EMBED_URL;
      googleFormIframe.hidden = false;
      if (googleFormSetup) googleFormSetup.hidden = true;
      if (googleFormDirectLink) googleFormDirectLink.href = GOOGLE_FORM_DIRECT_URL;
    } else {
      googleFormIframe.hidden = true;
      if (googleFormDirectLink) {
        googleFormDirectLink.hidden = true;
        googleFormDirectLink.parentElement.hidden = true;
      }
    }
  }
});
