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