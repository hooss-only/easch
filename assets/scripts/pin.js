const pinContainers = document.getElementsByClassName('pin');

const getFaviconUrl = 'https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=%s&size=64'; // replace %s

// load pins
chrome.storage.sync.get(['pins'], (result) => {load(result.pins)});

function load(pins) {
	console.log(pins)
	let i = 0;
	pins.forEach((pin) => {
		console.log(pin)
		if (typeof pin.url != 'undefined') {
			pinContainers[i].style.backgroundImage = "url('" + getFaviconUrl.replace('%s', pin.url) + "')";
			pinContainers[i].addEventListener("click", () => {
				window.location.href = pin.url;
			});
		} else {
			pinContainers[i].addEventListener("click", (e) => {
				url = prompt('저장할 사이트의 url을 입력하세요.', 0);
				if (url !== 0) {
					if (url.startsWith('http://') || url.startsWith('https://')) {
						// get index
						let index = 0;
						for (let i=0;i<5;i++) {
							if (pinContainers[i] == e.target) {
								index = i;
							}
						}

						pins[index] = {url: url}
						
						chrome.storage.sync.set({pins: pins});

						window.location.reload()

					} else {
						alert("url must has http or https")
					}
				}
			});
		}
		i++;
	});
}
