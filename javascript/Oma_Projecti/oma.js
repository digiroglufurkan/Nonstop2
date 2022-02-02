var sanat = [],
    sana = "",
    kokeilumaara = 0,
    loydetty = 0,
    oikeudetmaara = 7,
    results = null;
sanat = ["Koira", "Helsinki", "Tikkurilla", "Ohjalmointi", "ville",
"kotona", "kajani","urheilu", "Sanna", "Turku", "Arvo"];
function initialize() {
    results = document.getElementById("results");
    var numero = randomNumber(0, sanat.length);
    sana= sanat[numero].toUpperCase();

    for (var i = 0; i < sana.length; i++) {
        var input = document.createElement("input");
        input.type = "text";
        input.maxLength = 1;
        input.readOnly = true;
        document.getElementById("sana").appendChild(input);
    }
}
function tarkista(val) {
        var onko = true;

    for (var i = 0; i < sana.length; i++) {
        if (sana[i] == val) {
            document.getElementsByTagName("input")[i].value = val;
            onko = false;
            loydetty++;
        }
    }

    if (loydetty == sana.length) {
        document.getElementById("tulos").innerHTML = "ONNEA VOITTE !!!";
        return;
    }
    document.getElementById(val).disabled= true;

    if (onko) {
        kokeilumaara++;
        document.getElementById("img1").src = "img/" + kokeilumaara + ".gif";
        document.getElementById("tulos").innerHTML = "Kokeilu" + kokeilumaara + " kertaa." + "<br />";
        document.getElementById("tulos").innerHTML += "Sinulla on " + (oikeudetmaara - kokeilumaara) + " kokeilu jäljellä";

        if (kokeilumaara == oikeudetmaara) {
            var btns = document.getElementsByTagName("button");

            for (var i = 0; i < btns.length; i++) {
                btns[i].disabled = true;
            }
            document.getElementById("tulos").innerHTML = "Valitettavasti hävisit";
            for (var i = 0; i < sana.length; i++) {
                    document.getElementsByTagName("input")[i].value = sana[i];

            }
        }

    }
}
function nollaa()
{
  window.location.reload();
}
function randomNumber(min, max)
{
    return Math.floor(Math.random() * (max - min)) + min;
}

window.onload = initialize;
