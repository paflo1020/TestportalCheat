const mfst = chrome.runtime.getManifest();

function run() {
    //Timer
    chrome.storage.local.get("timer", function ({ timer }) {
        document.getElementById("timer").checked = timer;
    })
    //Focus
    chrome.storage.local.get("focus", function ({ focus }) {
        document.getElementById("focus").checked = focus;
    })
    //Links
    chrome.storage.local.get("links", function ({ links }) {
        document.getElementById("links").checked = links;
    })
    //RealTest
    chrome.storage.local.get("realTest", function ({ realTest }) {
        document.getElementById("realTest").checked = realTest;
    })
    //Updates checker
    // try{ 
    //     fetch('https://raw.githubusercontent.com/pawlo1020/testportalcheat/chrome/manifest.json/').then(response => response.json()).then(data => {
    //         if(!(data.version == mfst.version)) {
    //             document.getElementById("update").innerText = "Wymagana jest aktuzalizacja wtyczki z wersji<b>"+mfst.version+"</b> do <b>"+data.version+"</b>"
    //         }
    //     });
    // } catch(err) {
    //     document.getElementById("update").innerText = "Wystąpił błąd podczas pobierania informacji o aktualizacji."
    // }

}
run();

//Click functions 
document.getElementById("timer").onclick = () => {
    const x = document.getElementById("timer").checked
    chrome.storage.local.set({ timer: x })
}

document.getElementById("focus").onclick = () => {
    const x = document.getElementById("focus").checked
    chrome.storage.local.set({ focus: x })
}

document.getElementById("links").onclick = () => {
    const x = document.getElementById("links").checked
    chrome.storage.local.set({ links: x })
}

document.getElementById("realTest").onclick = () => {
    const x = document.getElementById("realTest").checked
    chrome.storage.local.set({ realTest: x })
}

document.getElementById("goToDiscord").onclick = () => {
    chrome.tabs.create({
        url: "http://paflo.pl/dc",
        active: true
    })
}

document.getElementById("goToGithub").onclick = () => {
    chrome.tabs.create({
        url: "http://paflo.pl/github",
        active: true
    })
}
