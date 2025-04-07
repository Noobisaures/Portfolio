document.getElementById('year').textContent = new Date().getFullYear();

// Dark Mode Toggle
const toggle = document.getElementById('dark-mode-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Project Filtering
const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project');

filters.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');

    projects.forEach(project => {
      const projectCategory = project.getAttribute('data-category');
      if (category === 'all' || category === projectCategory) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  });
});
