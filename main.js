document.addEventListener('DOMContentLoaded', () => {
  // Set the current year in the footer
  const yearSpan = document.getElementById('y');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Theme toggle functionality
  const themeToggleButton = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement; // <html> element

  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    htmlElement.setAttribute('data-theme', currentTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    // If no theme is set, check system preference and set to light mode if preferred
    htmlElement.setAttribute('data-theme', 'light');
  } else {
    // Default to dark mode if no preference or system preference is dark
    htmlElement.setAttribute('data-theme', 'dark');
  }

  if (themeToggleButton) {
    themeToggleButton.addEventListener('click', () => {
      let newTheme = 'dark';
      if (htmlElement.getAttribute('data-theme') === 'dark') {
        newTheme = 'light';
      }
      htmlElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }
});