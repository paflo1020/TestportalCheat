chrome.runtime.onStartup.addListener((e) => {
    chrome.tabs.create({
        url: 'https://paflo.pl/extensions/testportalcheat/welcome',
        active: true
    })
});