    function toggleDropdown() {
      const menu = document.getElementById("dropdownMenu");
      menu.classList.toggle("show");
    }

    // Close dropdown when clicking outside
    document.addEventListener("click", function(event) {
      const header = document.querySelector(".drop-down");
      const menu = document.getElementById("dropdownMenu");
      if (!header.contains(event.target)) {
        menu.classList.remove("show");
      }
    });