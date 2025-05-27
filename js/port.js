function displayImage(category) {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const captionText = document.getElementById("caption");

  // Replace with actual image pathss
const images = {
  onsite: [
    "Johari.jpg",
    "PT#1.jpg", "PT#2.jpg", "PT#3.jpg", "PT#4.jpg",
    "CU3 Pre-Test.jpg", "CU3 Post-Test.jpg",
    "CU4 Pre-Test.jpg", "CU4 Post-Test.jpg",
    "W5 D1 PT.jpg", "W5 D1 PT 2.jpg",
    "CU5 Pre Test.jpg", "CU5 Pre Test 3_13_25.jpg",
    "CU5 Post Test.jpg", "CU5 Post Test 3_13_25.jpg",
    "CU6 Pre-Test.jpg", "CU6 Post-Test.jpg",
    "W8 D2 Pre Test.jpg", "W8 D2 Post Test.jpg",
    "W9 D2 Pre Test.jpg", "W9 D2 Post Test.jpg",
    "CU8 Pre-Test.jpg", "CU8 Post-Test.jpg",
    "PO CU8.jpg", "PR CU8.jpg",
    "CU9_Reporting_Rating.PNG",
    "PO CU9.jpg", "PR CU9.jpg",
    "CU10 Pre-Test Post Test.jpg",
    "CU11 Pre-Test Post Test.jpg",
    "CU12 Pre-Test Post Test.jpg",
    "CU13 Pre-Test.jpg", "CU13 Post Test.jpg",
    "W17 PT.jpg",
    "Wireframing.jpg"
  ],
  exam: [
    "Long Test Lecture.jpg",
    "Midterm Lecture.jpg",
    "20 Item Additional.jpg"
  ],
  uo: [
    "UO#1.jpg", "UO#2.jpg", "UO#3.jpg", "UO#4.jpg", "UO#5.jpg",
    "UO#6.jpg", "UO#7.jpg", "UO#8.jpg", "UO#9.jpg", "UO#10.jpg"
  ],
  hoa: [
    "Pre-HoA#3.jpg",
    "Preliminary_HoA#3.jpeg", "Preliminary_HoA#4.jpeg",
    "Preliminary_HoA#5.jpeg", "Preliminary_HoA#6.jpeg"
  ],
  online: [
    "PT_ DARE Event.jpeg", "PT_ GAD Event.jpeg",
    "PT_ Battle of the Bands Event (14 Feb 2025 at 16_42)(1).jpeg",
    "Student_Profile.png", "COR.PNG", "COR - Copy.PNG",
    "CU3_Reporting_Rating.png", "CU4_Reporting_Rating.png",
    "CU5_Reporting_Rating.png", "CU6_Reporting_Rating.png",
    "CU7_Pre-Test.png", "CU7_Post-Test.png", "CU7_Reporting_Rating.png",
    "CU8_Reporting_Rating.png", "CU9_Reporting_Rating.PNG",
    "CU10_Reporting_Rating.png", "CU11_Reporting_Rating.png",
    "CU12_Reporting_Rating.png", "CU13_Reporting_Rating.png",
    "100 QA Midterm Reviewer P1.jpg", "100 QA Midterm Reviewer P2.jpg",
    "Progress_Report.PNG", "Progress_Report - Copy.PNG",
    "IRS.jpg", "ORM.jpg", "GANTT_CHART.jpg"
  ]
};


  modal.style.display = "block";
  modalImg.src = images[category];
  captionText.innerHTML = category.replace(/^\w/, c => c.toUpperCase());
}

function closeModal() {
  document.getElementById("image-modal").style.display = "none";
}
