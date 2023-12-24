// if its first startup, make initial datas
function isNotSetted(result) {
	return typeof result.key == 'undefined';
}

chrome.storage.sync.get(['search_url'], (result) => {
	if (isNotSetted(result)) {
		chrome.storage.sync.set({search_url: 'http://www.google.com/search?q=%s'});
	}
});
