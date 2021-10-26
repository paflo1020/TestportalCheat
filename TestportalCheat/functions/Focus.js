try {

    const rexpt = RegExp.prototype.test;
    RegExp.prototype.test = function (fct) {
        if (this.toString().includes("function") && this.toString().includes("native code")) {
            return true;
        }
        let cb = rexpt.call(this, fct);
        return cb;
    }

    document.hasFocus = function () {
        return true;
    }

    console.log("%cZaimplementowano funkcje blokujące pomyślnie.", "font-size: 30px; color: #4287f5");

} catch (err) {
    console.log("%cWystąpił błąd podczas implementowania funkcji na stronie. Skontaktuj się z developerem na serwerze discord.", "font-size: 30px; color: #4287f5");
}