try {
    const question = document.querySelector(
        "#questionForm > div > div.question-container > div.question_essence > p"
    )

    question.innerHTML = '<a href="https://www.google.com/search?q=' + question.innerHTML + '" target="__blank">' + question.innerHTML + '</a>'
    console.log("%cPomyślnie zaktualizowano pytanie dodając link do wyszukiwania w google.", "font-size: 30px; color: #4287f5");
} catch (err) {
    console.log("%cNa tej podstronie nie wykryto pytania z testu.", "font-size: 10px; color: #4287f5");
}
