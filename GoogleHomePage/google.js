document.addEventListener("DOMContentLoaded", function () {
    var dotsIcon = document.querySelector(".dots-icon");
    var dropdownContent = document.getElementById("dropdownContent");

    dotsIcon.addEventListener("click", function (event) {
        event.stopPropagation(); 
        toggleDropdown();
    });

    document.addEventListener("click", function (event) {
        var target = event.target;
        if (!target.matches('.dots-icon') && !target.matches('.dropdown-content')) {
            closeDropdown();
        }
    });

    function toggleDropdown() {
        if (dropdownContent.style.display === "block") {
            closeDropdown();
        } else {
            openDropdown();
        }
    }

    function openDropdown() {
        dropdownContent.style.display = "block";
    }

    function closeDropdown() {
        dropdownContent.style.display = "none";
    }
});
