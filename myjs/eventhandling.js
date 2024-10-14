



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
