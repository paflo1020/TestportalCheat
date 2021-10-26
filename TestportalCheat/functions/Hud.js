function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

try {
    if (getCookie("timer")) {
        const informationCheat = document.createElement("span");
        informationCheat.innerHTML = "<br><b>UWAGA! Nie odświeżaj strony.\nJeżeli to zrobisz, czas zostanie przywrócony do poprawnego.</b>"
        informationCheat.style.color = "#e30e0e"
        const timeLabel = document.getElementById("remaining_time_content");
        timeLabel.appendChild(informationCheat);
    }

    const poweredTC = document.createElement("span");
    poweredTC.innerHTML = "a ściagać pomaga <b>TestportalCheat</b>";
    const footerTech = document.getElementById("techAnnotationWrap");
    footerTech.appendChild(poweredTC);
} catch (err) {
    console.log("%cPrawdopodobnie ta strona nie jest z testem.", "font-size: 10px; color: #4287f5");
}