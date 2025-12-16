function handleSearch() {
    const query = document.getElementById("searchInput").value.trim();

    if (query === "") {
        alert("Please enter something to search");
        return false;
    }

    alert("Searching for: " + query);

    // future use:
    // window.location.href = "../pages/docs.html?search=" + query;

    return false; // prevent page reload
}