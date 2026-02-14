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
  } else {
    // Default to dark mode if no theme is set in localStorage
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