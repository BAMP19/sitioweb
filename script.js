function scrollToContent() {
  const contentSection = document.getElementById('content-section');
  if (contentSection) contentSection.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('menu-toggle');
  const navList = document.querySelector('.main-nav ul');
  if (toggle && navList) {
    toggle.addEventListener('click', function() {
      navList.classList.toggle('show');
    });
  }

  const year = new Date().getFullYear();
  document.querySelectorAll('#year, #year2, #year3, #year4, #year5, #year6, #year7')
    .forEach(el => { if (el) el.textContent = year; });
});
