// if its first startup, make initial datas
function isNotSetted(result) {
	return typeof result == 'undefined';
}

chrome.storage.sync.get(['search_url'], (result) => {
	if (isNotSetted(result.search_url)) {
		chrome.storage.sync.set({search_url: 'http://www.google.com/search?q=%s'});
	}
});

chrome.storage.sync.get(['pins'], (result) => {
	if (isNotSetted(result.pins)) {
		chrome.storage.sync.set({pins: [{}, {}, {}, {}, {}]});
	}
});
