
const DAISY_THEMES = [
  'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate',
  'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden',
  'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black',
  'luxury', 'dracula'
];

function changeTheme(theme) {
  const html = document.documentElement;
  html.setAttribute('data-theme', theme);
  localStorage.setItem('preferred-theme', theme);
}

function loadTheme() {
  const savedTheme = localStorage.getItem('preferred-theme') || 'light';
  const themeSelect = document.getElementById('theme-select');
  
  if (themeSelect) {
    themeSelect.value = savedTheme;
    changeTheme(savedTheme);
  }
}

function toggleSidebar() {
  const drawer = document.getElementById('sidebar-drawer');
  if (drawer) {
    drawer.checked = !drawer.checked;
  }
}

function setupSidebarClose() {
  // Close drawer when clicking on a link (mobile only)
  document.addEventListener('click', function(event) {
    const target = event.target;
    const drawer = document.getElementById('sidebar-drawer');
    
    if (window.innerWidth <= 1024 && drawer && drawer.checked) {
      // Check if clicked element is a navigation link
      if (target.tagName === 'A' && target.closest('.menu')) {
        drawer.checked = false;
      }
    }
  });
}

function handleResize() {
  const drawer = document.getElementById('sidebar-drawer');
  if (drawer && window.innerWidth > 1024) {
    drawer.checked = false;
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
  const navLinks = document.querySelectorAll('.menu a');
  
  navLinks.forEach(function(link) {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function setupKeyboardNavigation() {
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      const drawer = document.getElementById('sidebar-drawer');
      if (drawer && drawer.checked) {
        drawer.checked = false;
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
