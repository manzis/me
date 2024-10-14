
const frame35 = document.querySelector('.frame-35');

// Function to start smooth scrolling
function startScroll() {
  frame35.style.animation = 'scrollLeft 10s linear infinite';
}

// Check if the content overflows
function checkOverflow() {
  const parentWidth = frame35.parentElement.offsetWidth;
  const contentWidth = frame35.scrollWidth;

  // Start scrolling only if content is wider than the container
  if (contentWidth > parentWidth) {
    startScroll();
  } else {
    frame35.style.animation = ''; // Stop animation if no overflow
  }
}

// Call checkOverflow on load and resize
window.addEventListener('load', checkOverflow);
window.addEventListener('resize', checkOverflow);

// Scroll animation keyframes
const style = document.createElement('style');
style.textContent = `
  @keyframes scrollLeft {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
`;
document.head.appendChild(style);


// Function to load HTML components
function loadComponent(componentId, filePath) {
  fetch(filePath)
      .then(response => {
          if (!response.ok) {
              throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
          }
          return response.text();
      })
      .then(data => {
          document.getElementById(componentId).innerHTML = data;
      })
      .catch(error => console.error('Error loading component:', error));
}

// Load navbar and footer on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  loadComponent('navbar', './header/navbar.html');
  loadComponent('footer', './footer/footer.html');
});
