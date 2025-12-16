const techItems = document.querySelectorAll(".tech");
const contents = document.querySelectorAll(".content-box");

techItems.forEach(item => {
    item.addEventListener("click", () => {

        // Remove active from all
        techItems.forEach(i => i.classList.remove("active-tech"));
        contents.forEach(c => c.classList.remove("active"));

        // Add active to clicked
        item.classList.add("active-tech");

        // Show matching content
        const target = item.getAttribute("data-tech");
        document.getElementById(target).classList.add("active");
    });
});