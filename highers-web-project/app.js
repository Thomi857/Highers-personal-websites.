// Function to toggle the sidebar visibility
function toggleSidebar() {
    // Get the sidebar element
    const sidebar = document.querySelector('.sidebar');
    
    // Toggle the display of the sidebar (show or hide)
    if (sidebar.style.display === "none" || sidebar.style.display === "") {
        sidebar.style.display = "flex"; // Show the sidebar
    } else {
        sidebar.style.display = "none"; // Hide the sidebar
    }
}
