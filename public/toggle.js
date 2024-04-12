// const toggleLabels = document.querySelectorAll(
//   ".inline-flex.items-center.cursor-pointer"
// );

// toggleLabels.forEach((label) => {
//   label.addEventListener("click", function () {
//     const checkbox = this.querySelector('input[type="checkbox"]');
//     const otherLabels = Array.from(toggleLabels).filter((l) => l !== this);

//     if (checkbox.checked) return; // Don't change state if already checked

//     // Uncheck all other checkboxes in toggle labels
//     otherLabels.forEach(
//       (label) => (label.querySelector('input[type="checkbox"]').checked = false)
//     );
//     checkbox.checked = true; // Check the clicked checkbox
//   });
// });

// const toggleCheckbox = document.querySelector(".ml-auto.pointer-events-auto");

// toggleCheckbox.addEventListener("click", function () {
//   this.classList.toggle("bg-gray-400"); // Toggle background color
//   this.nextElementSibling.classList.toggle("translate-x-4"); // Toggle circle position
// });
