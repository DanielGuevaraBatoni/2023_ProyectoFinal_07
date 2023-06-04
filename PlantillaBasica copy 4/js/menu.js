// menu.js
document.addEventListener("DOMContentLoaded", function() {
  var userIcon = document.querySelector(".user-icon");
  var dropdownContent = document.querySelector(".dropdown-content");

  userIcon.addEventListener("click", function() {
    dropdownContent.classList.toggle("show");
  });

  window.addEventListener("click", function(event) {
    if (!event.target.matches(".user-icon")) {
      if (dropdownContent.classList.contains("show")) {
        dropdownContent.classList.remove("show");
      }
    }
  });
});
  