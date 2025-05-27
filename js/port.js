const imageMap = {
  "Onsite PT": [
    { src: "images/onsitept1.jpg", caption: "Onsite PT - Image 1" },
    { src: "images/onsitept2.jpg", caption: "Onsite PT - Image 2" }
  ],
  "HoA": [
    { src: "images/hoa1.jpg", caption: "HoA - Image 1" }
  ],
  "UO": [
    { src: "images/uo1.jpg", caption: "UO - Image 1" },
    { src: "images/uo2.jpg", caption: "UO - Image 2" }
  ],
  "Exam": [
    { src: "images/100 QA Midterm Reviewer P1.jpg", caption: "100 QA Midterm Reviewer P1" },
    { src: "images/100 QA Midterm Reviewer P2.jpg", caption: "100 QA Midterm Reviewer P1" }
  ],
  "Online PT": [
    { src: "images/onlinept1.jpg", caption: "Online PT - Image 1" }
  ]
};

function displayImage(name) {
  const container = document.getElementById('image-display');
  container.innerHTML = ''; // Clear previous content

  const images = imageMap[name];

  if (!images || images.length === 0) {
    container.textContent = "No images available.";
    return;
  }

  let index = 0;

  const img = document.createElement('img');
  img.classList.add('activity-image', 'fade');
  img.loading = 'lazy';

  const caption = document.createElement('p');
  caption.className = 'image-caption';

  const updateSlide = () => {
    img.classList.remove('fade');
    void img.offsetWidth; // Trigger reflow
    img.src = images[index].src;
    caption.textContent = images[index].caption;
    img.classList.add('fade');
  };

  const nextButton = document.createElement('button');
  nextButton.textContent = "Next";
  nextButton.className = 'slide-btn';
  nextButton.onclick = () => {
    index = (index + 1) % images.length;
    updateSlide();
  };

  const prevButton = document.createElement('button');
  prevButton.textContent = "Previous";
  prevButton.className = 'slide-btn';
  prevButton.onclick = () => {
    index = (index - 1 + images.length) % images.length;
    updateSlide();
  };

  container.appendChild(img);
  container.appendChild(caption);
  if (images.length > 1) {
    container.appendChild(prevButton);
    container.appendChild(nextButton);
  }

  updateSlide();
}
