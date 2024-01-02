let searchInput = document.getElementById('search');
let searchUrl;

chrome.storage.sync.get(['search_url'], (result) => searchUrl = result.search_url);

searchInput.addEventListener("keypress", (e) => {
	if (e.key == "Enter") {		
		if (searchInput.value === "settings") {
			window.location.href = "../settings/index.html";
			return;
		}

		window.location.href = searchUrl.replace("%s", searchInput.value);
	}
});
