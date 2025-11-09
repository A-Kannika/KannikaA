// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');
  const body = document.body;

  // Function to apply the light theme
  const applyLightTheme = () => {
    body.classList.add('light-mode');
    toggleButton.textContent = '☀️';
    localStorage.setItem('theme', 'light');
  };

  // Function to apply the dark theme
  const applyDarkTheme = () => {
    body.classList.remove('light-mode');
    toggleButton.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  };

  // Event listener for the toggle button
  toggleButton.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
      applyDarkTheme();
    } else {
      applyLightTheme();
    }
  });

  // Function to load the saved theme or detect OS preference
  const loadTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    
    // Check for saved theme first
    if (savedTheme === 'light') {
      applyLightTheme();
    } else if (savedTheme === 'dark') {
      applyDarkTheme();
    } else {
      // If no saved theme, check OS preference
      const osPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      if (osPrefersLight) {
        applyLightTheme();
      } else {
        applyDarkTheme(); // Default to dark if no preference or OS is dark
      }
    }
  };

  // Load the theme when the page loads
  loadTheme();
});