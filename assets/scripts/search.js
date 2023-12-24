let searchInput = document.getElementById('search');
let searchUrl;

chrome.storage.sync.get(['search_url'], (result) => searchUrl = result.search_url);

searchInput.addEventListener("keypress", (e) => {
	if (e.key == "Enter") { 
		console.log(searchUrl);

		window.location.href = searchUrl.replace("%s", searchInput.value);
	}
});
