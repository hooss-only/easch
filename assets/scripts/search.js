let searchInput = document.getElementById('search');

searchInput.addEventListener("keypress", (e) => {
	if (e.key == "Enter") { 
		window.location.href = "http://www.google.com/search?q=" + searchInput.value;
	}
});
