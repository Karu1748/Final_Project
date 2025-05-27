document.addEventListener("DOMContentLoaded", function () {
    // Set this directly in the script
    const blackImageUrl = "/static/images/black.png"; 

    const items = document.querySelectorAll(".item");

    items.forEach(item => {
        const img = item.querySelector("img");
        const title = item.querySelector("p");

        // Save the original source
        const originalSrc = img.getAttribute("src");
        img.setAttribute("data-original", originalSrc);
        img.setAttribute("data-visible", "false");

        // Set to black initially
        img.setAttribute("src", blackImageUrl);
        title.style.opacity = 1;

        // Toggle image and textt
        img.addEventListener("click", function () {
            const isOriginal = img.getAttribute("data-visible") === "true";

            if (isOriginal) {
                img.setAttribute("src", blackImageUrl);
                title.style.opacity = 1;
                img.setAttribute("data-visible", "false");
            } else {
                img.setAttribute("src", img.getAttribute("data-original"));
                title.style.opacity = 0;
                img.setAttribute("data-visible", "true");
            }
        });
    });
});
