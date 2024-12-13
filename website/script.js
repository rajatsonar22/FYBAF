function toggleNavbar() {
    const navbar = document.getElementById("navbar");
    const content = document.getElementById("content");

    if (navbar.style.right === "0px") {
        navbar.style.right = "-250px"; // Close the sidebar
        content.style.marginRight = "0"; // Adjust content when sidebar is hidden
    } else {
        navbar.style.right = "0px"; // Open the sidebar
        content.style.marginRight = "250px"; // Push content when sidebar is visible
    }
}
