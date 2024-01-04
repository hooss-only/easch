chrome.storage.sync.get(["pins"], (result) => setupPin(result.pins));

function setupPin(pins) {
	const pinTexts = document.getElementsByTagName('li');

	for (let i=0;i<5;i++) {
		console.log(pins[i]);
		if (typeof pins[i].url != "undefined") {
			pinTexts[i].innerText = pins[i].url;
		}
	}

	const buttons = document.getElementsByClassName('edit');
	
	for (let i=0;i<5;i++) {
		let button = buttons[i]
		button.addEventListener('click', (e) => {
			// get index
			let index = 0
			for (let i=0;i<5;i++) {
				if (e.target === buttons[i]) {
					index = i;
				}
			}

			url = prompt('저장할 사이트의 url을 입력하세요 (0을 입력하면 삭제합니다).', 0);

			if (url != 0) {
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
			} else {
				pins[index] = {}
				
				chrome.storage.sync.set({pins: pins});
			
				window.location.reload()
			}

		});
	}
}

function setupSchool() {
	// TODO: setup school, select school feature
}
