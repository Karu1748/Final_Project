function displayImage(category) {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const captionText = document.getElementById("caption");

  // Replace with actual image paths
  const images = {
    onsite: "images/onsite_pt.jpg",
    hoa: "images/hoa.jpg",
    uo: "images/uo.jpg",
    exam: "images/exam.jpg",
    online: "images/online_pt.jpg",
  };

  modal.style.display = "block";
  modalImg.src = images[category];
  captionText.innerHTML = category.replace(/^\w/, c => c.toUpperCase());
}

function closeModal() {
  document.getElementById("image-modal").style.display = "none";
}
