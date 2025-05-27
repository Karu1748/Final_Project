function displayImage(category) {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const captionText = document.getElementById("caption");

  // Replace with actual image pathss
const images = {
  onsite: [
    "images/Johari.jpg",
    "images/PT#1.jpg", "images/PT#2.jpg", "images/PT#3.jpg", "images/PT#4.jpg",
    "images/CU3 Pre-Test.jpg", "images/CU3 Post-Test.jpg",
    "images/CU4 Pre-Test.jpg", "images/CU4 Post-Test.jpg",
    "images/W5 D1 PT.jpg", "images/W5 D1 PT 2.jpg",
    "images/CU5 Pre Test.jpg", "images/CU5 Pre Test 3_13_25.jpg",
    "images/CU5 Post Test.jpg", "images/CU5 Post Test 3_13_25.jpg",
    "images/CU6 Pre-Test.jpg", "images/CU6 Post-Test.jpg",
    "images/W8 D2 Pre Test.jpg", "images/W8 D2 Post Test.jpg",
    "images/W9 D2 Pre Test.jpg", "images/W9 D2 Post Test.jpg",
    "images/CU8 Pre-Test.jpg", "images/CU8 Post-Test.jpg",
    "images/PO CU8.jpg", "images/PR CU8.jpg",
    "images/CU9_Reporting_Rating.PNG",
    "images/PO CU9.jpg", "images/PR CU9.jpg",
    "images/CU10 Pre-Test Post Test.jpg",
    "images/CU11 Pre-Test Post Test.jpg",
    "images/CU12 Pre-Test Post Test.jpg",
    "images/CU13 Pre-Test.jpg", "images/CU13 Post Test.jpg",
    "images/W17 PT.jpg",
    "images/Wireframing.jpg"
  ],
  exam: [
    "images/Long Test Lecture.jpg",
    "images/Midterm Lecture.jpg",
    "images/20 Item Additional.jpg"
  ],
  uo: [
    "images/UO#1.jpg", "images/UO#2.jpg", "images/UO#3.jpg", "images/UO#4.jpg", "images/UO#5.jpg",
    "images/UO#6.jpg", "images/UO#7.jpg", "images/UO#8.jpg", "images/UO#9.jpg", "images/UO#10.jpg"
  ],
  hoa: [
    "images/HoA#3.jpg",

  ],
  online: [
    "images/PT_ DARE Event.jpeg", "images/PT_ GAD Event.jpeg",
    "images/PT_ Battle of the Bands Event (14 Feb 2025 at 16_42)(1).jpeg",
    "images/Student_Profile.png", "images/COR.PNG", "COR - Copy.PNG",
    "images/CU3_Reporting_Rating.png", "images/CU4_Reporting_Rating.png",
    "images/CU5_Reporting_Rating.png", "images/CU6_Reporting_Rating.png",
    "images/CU7_Pre-Test.png", "images/CU7_Post-Test.png", "images/CU7_Reporting_Rating.png",
    "images/CU8_Reporting_Rating.png", "images/CU9_Reporting_Rating.PNG",
    "images/CU10_Reporting_Rating.png", "images/CU11_Reporting_Rating.png",
    "images/CU12_Reporting_Rating.png", "images/CU13_Reporting_Rating.png",
    "images/100 QA Midterm Reviewer P1.jpg", "images/100 QA Midterm Reviewer P2.jpg",
    "images/Progress_Report.PNG", "images/Preliminary_HoA#3.jpeg", "images/Preliminary_HoA#4.jpeg",
    "images/Preliminary_HoA#5.jpeg", "images/Preliminary_HoA#6.jpeg",
    "images/IRS.jpg", "images/ORM.jpg", "images/GANTT_CHART.jpg"
  ]
};


  modal.style.display = "block";
  modalImg.src = images[category];
  captionText.innerHTML = category.replace(/^\w/, c => c.toUpperCase());
}

function closeModal() {
  document.getElementById("image-modal").style.display = "none";
}
