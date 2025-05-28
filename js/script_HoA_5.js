document.addEventListener("DOMContentLoaded", function () {
    const blackImageUrl = "images/black.png"; // Make sure this path is correct

    const items = document.querySelectorAll(".item");

    items.forEach(item => {
        const img = item.querySelector("img");
        const title = item.querySelector("p");

        if (!img || !title) return; // Skip if either element is missing

        // Save the original source
        const originalSrc = img.getAttribute("src");
        img.setAttribute("data-original", originalSrc);
        img.setAttribute("data-visible", "false");

        // Set image to black initially and show the text
        img.setAttribute("src", blackImageUrl);
        title.style.opacity = "1";

        // Toggle image and text on click
        img.addEventListener("click", function () {
            const isVisible = img.getAttribute("data-visible") === "true";

            if (isVisible) {
                // Go back to black image and show the text
                img.setAttribute("src", blackImageUrl);
                title.style.opacity = "1";
                img.setAttribute("data-visible", "false");
            } else {
                // Show the original image and hide the text
                img.setAttribute("src", img.getAttribute("data-original"));
                title.style.opacity = "0";
                img.setAttribute("data-visible", "true");
            }
        });
    });
});
