function showCategory(categoryId) {
  document.querySelectorAll('.image-section').forEach(section => {
    section.style.display = 'none';
  });

  const section = document.getElementById(categoryId);
  if (section) {
    section.style.display = 'flex';
  }
}

// Modal functionality
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".image-section img").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt || "Image";
    });
  });
});

function closeModal() {
  modal.style.display = "none";
}
