// Theme Management
function changeTheme(theme) {
  const body = document.body;
  
  // Remove all theme classes
  body.classList.remove('theme-modern', 'theme-retro', 'theme-terminal', 'theme-basic', 'theme-academic', 'theme-dark');
  
  // Add selected theme class
  body.classList.add(`theme-${theme}`);
  
  // Save theme preference
  localStorage.setItem('preferred-theme', theme);
}

// Load saved theme on page load
function loadTheme() {
  const savedTheme = localStorage.getItem('preferred-theme') || 'modern';
  const themeSelect = document.getElementById('theme-select');
  
  if (themeSelect) {
    themeSelect.value = savedTheme;
    changeTheme(savedTheme);
  }
}

// Sidebar Toggle
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.classList.toggle('open');
  }
}

// Close sidebar when clicking outside (mobile)
function setupSidebarClose() {
  document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const toggleButtons = document.querySelectorAll('.mobile-menu-toggle, .sidebar-toggle');
    
    if (window.innerWidth <= 768 && sidebar && sidebar.classList.contains('open')) {
      let clickedToggle = false;
      toggleButtons.forEach(button => {
        if (button.contains(event.target)) {
          clickedToggle = true;
        }
      });
      
      if (!sidebar.contains(event.target) && !clickedToggle) {
        sidebar.classList.remove('open');
      }
    }
  });
}

// Handle window resize
function handleResize() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar && window.innerWidth > 768) {
    sidebar.classList.remove('open');
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  loadTheme();
  setupSidebarClose();
  
  // Add resize listener
  window.addEventListener('resize', handleResize);
  
  // Add keyboard navigation
  document.addEventListener('keydown', function(event) {
    // Escape key closes sidebar on mobile
    if (event.key === 'Escape') {
      const sidebar = document.getElementById('sidebar');
      if (sidebar && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
      }
    }
  });
  
  // Auto-expand current section in navigation
  const currentPath = window.location.pathname;
  const navDetails = document.querySelectorAll('.nav-details');
  
  navDetails.forEach(details => {
    const links = details.querySelectorAll('a');
    links.forEach(link => {
      if (currentPath.includes(link.getAttribute('href'))) {
        details.open = true;
        link.style.fontWeight = 'bold';
        link.style.color = '#007acc';
      }
    });
  });
});

// Add smooth scrolling for anchor links
document.addEventListener('click', function(event) {
  if (event.target.tagName === 'A' && event.target.getAttribute('href').startsWith('#')) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
});
