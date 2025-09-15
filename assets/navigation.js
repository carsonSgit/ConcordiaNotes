// Theme Management
const THEME_CLASSES = [
  'theme-modern', 'theme-retro', 'theme-terminal', 'theme-basic', 
  'theme-academic', 'theme-dark', 'theme-cursor', 'theme-claude', 
  'theme-notion', 'theme-apple', 'theme-github', 'theme-vercel', 
  'theme-openai', 'theme-linear'
];

function changeTheme(theme) {
  const body = document.body;
  body.classList.remove(...THEME_CLASSES);
  body.classList.add(`theme-${theme}`);
  localStorage.setItem('preferred-theme', theme);
}

function loadTheme() {
  const savedTheme = localStorage.getItem('preferred-theme') || 'modern';
  const themeSelect = document.getElementById('theme-select');
  
  if (themeSelect) {
    themeSelect.value = savedTheme;
    changeTheme(savedTheme);
  }
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.classList.toggle('open');
  }
}

function setupSidebarClose() {
  document.addEventListener('click', function(event) {
    const target = event.target;
    const sidebar = document.getElementById('sidebar');
    const toggleButtons = document.querySelectorAll('.mobile-menu-toggle, .sidebar-toggle');
    
    if (window.innerWidth <= 768 && sidebar && sidebar.classList.contains('open')) {
      let clickedToggle = false;
      
      toggleButtons.forEach(function(button) {
        if (button.contains(target)) {
          clickedToggle = true;
        }
      });
      
      if (!sidebar.contains(target) && !clickedToggle) {
        sidebar.classList.remove('open');
      }
    }
  });
}

function handleResize() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar && window.innerWidth > 768) {
    sidebar.classList.remove('open');
  }
}

function setupSmoothScrolling() {
  document.addEventListener('click', function(event) {
    const target = event.target;
    
    if (target.tagName === 'A') {
      const href = target.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        event.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    }
  });
}

function highlightCurrentNavigation() {
  const currentPath = window.location.pathname;
  const navDetails = document.querySelectorAll('.nav-details');
  
  navDetails.forEach(function(details) {
    const links = details.querySelectorAll('a');
    
    links.forEach(function(link) {
      const href = link.getAttribute('href');
      if (href && currentPath.includes(href)) {
        details.open = true;
        link.style.fontWeight = 'bold';
        link.style.color = '#007acc';
      }
    });
  });
}

function setupKeyboardNavigation() {
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      const sidebar = document.getElementById('sidebar');
      if (sidebar && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
      }
    }
  });
}

function initialize() {
  loadTheme();
  setupSidebarClose();
  setupSmoothScrolling();
  highlightCurrentNavigation();
  setupKeyboardNavigation();
  
  window.addEventListener('resize', handleResize);
}

document.addEventListener('DOMContentLoaded', initialize);

window.changeTheme = changeTheme;
window.toggleSidebar = toggleSidebar;
