// // Home-Page Basic Examples Tabbing
function displayTab(tabId) {
    document.querySelectorAll('.text > div').forEach(tab => {
        tab.style.display = 'none';
    });
    document.getElementById(`${tabId}-txt`).style.display = "block";
    document.querySelectorAll('.tabs label').forEach(tab => {
        tab.classList.toggle('active', tab.getAttribute('for') === `${tabId}-ch`);
    });
}
// Define tab display functions
function home_display() {
    displayTab('home');
}
function blog_display() {
    displayTab('blog');
}
function code_display() {
    displayTab('code');
}
function project_display() {
    displayTab('project');
}
function about_display() {
    displayTab('about');
}
document.querySelectorAll('.tabs label').forEach(label => {
    label.addEventListener('click', function() {
        const tabId = this.getAttribute('for').replace('-ch', '');
        displayTab(tabId);
    });
});
// Ends Here

// Terms and Definition
document.addEventListener("DOMContentLoaded", function() {
  const accordions = document.querySelectorAll('.accordion_item');
  accordions.forEach(function(accordion) {
    accordion.addEventListener('click', function() {
      const panel = this.nextElementSibling;
      this.classList.toggle('active');
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = "100%";
      }
    });
  });
});
// Ends
