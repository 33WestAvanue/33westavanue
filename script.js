document.addEventListener('DOMContentLoaded', function() {
  const menuToggleButton = document.getElementById('menuToggleButton');
  const sidebar = document.getElementById('sidebar');

  menuToggleButton.addEventListener('click', function() {
    sidebar.classList.toggle('open');
  });

  // Optional: Close sidebar when clicking a link on mobile
  sidebar.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI' && window.innerWidth <= 768) {
      sidebar.classList.remove('open');
    }
  });

  // Optional: Close sidebar if clicking outside
  document.addEventListener('click', function(event) {
    if (window.innerWidth <= 768 && sidebar.classList.contains('open')) {
      if (!sidebar.contains(event.target) && !menuToggleButton.contains(event.target)) {
        sidebar.classList.remove('open');
      }
    }
  });

  // Ensure sidebar is always visible on desktop
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      sidebar.classList.remove('open');
    }
  });
});