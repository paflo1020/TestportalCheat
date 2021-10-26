
chrome.storage.local.get("timer", function({timer}){
    if(timer) {
        const element = document.createElement("script");
        element.src = chrome.extension.getURL("functions/Timer.js");
        (document.head || document.body).appendChild(element);
        document.cookie = "timer=true";
    } else {
        document.cookie = "timer=; Max-Age=-99999999;";
    }
})

chrome.storage.local.get("focus", function({focus}){
    if(focus) {
        const element = document.createElement("script");
        element.src = chrome.extension.getURL("functions/Focus.js");
        (document.head || document.body).appendChild(element);
    }
})

chrome.storage.local.get("links", function({links}){
    if(links) {
        const element = document.createElement("script");
        element.src = chrome.extension.getURL("functions/Questions.js");
        (document.head || document.body).appendChild(element);
    }
})

chrome.storage.local.get("realTest", function({realTest}){
    if(realTest == false || !realTest) {
        const element = document.createElement("script");
        element.src = chrome.extension.getURL("functions/Hud.js");
        (document.head || document.body).appendChild(element);
    }
})


console.log("%cZaimplementowano skrypt(y) pomyślnie na stronie. Oczekuj na dalsze działania...", "font-size: 15px; color: #4287f5");
