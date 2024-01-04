chrome.storage.sync.get(["pins"], (result) => startup(result.pins));

function startup(pins) {
	const pinTexts = document.getElementsByTagName('li');

	for (let i=0; i<6; i++) {
		console.log(pins[i]);
		if (typeof pins[i].url != "undefined") {
			pinTexts[i].innerText = pins[i].url;
		}
	}
}
