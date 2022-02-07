var sanat = [],
    sana = "",
    kokeilumaara = 0,
    loydetty = 0,
    oikeudetmaara = 7,
    score="", storesana=[];
function initialize() {
  if (localStorage.length > 0) {
  score = "<h1>Menneitä Sanoja</h1><br/>";
  let a = (localStorage.length > 10 )? localStorage.length-10:0;
   for(var i = localStorage.length;  i > a; i--)
   {
    storesana = localStorage.getItem(i-1);
     score += (storesana[0]==='v')? '<p style="color:green;"><b><u>'+ storesana.substring(1) +"</u></b></p>"
     :'<p style="color:red;"><b><u>'+ storesana.substring(1) +"</u></b></p>";
   }
 }
   document.getElementById("oikealla").innerHTML= score;

  sana = getrandomsana();
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
        buttonkiini();
        window.localStorage.setItem(localStorage.length ++, "v"+ sana);
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
           buttonkiini();
            window.localStorage.setItem(localStorage.length ++, "p"+ sana);
            document.getElementById("tulos").innerHTML = "Valitettavasti hävisit";
            for (var i = 0; i < sana.length; i++) {
                    document.getElementsByTagName("input")[i].value = sana[i];

            }
        }

    }
}
function buttonkiini()
{
  var btns = document.getElementsByTagName("button");

  for (var i = 0; i < btns.length; i++) {
      btns[i].disabled = true;
  }
  document.getElementById("nollaa").disabled= false;
}
function nollaa()
{
  window.location.reload();
}
function getrandomsana()
{
  sanat = [
  "Akaa", "Alajärvi", "Alavieska", "Alavus", "Asikkala", "Askola", "Aura", "Brändö", "Eckerö", "Enonkoski", "Enontekiö", "Espoo", "Eura", "Eurajoki", "Evijärvi", "Finström", "Forssa", "Föglö", "Geta", "Haapajärvi", "Haapavesi", "Hailuoto", "Halsua", "Hamina", "Hammarland", "Hankasalmi", "Hanko", "Harjavalta", "Hartola", "Hattula", "Hausjärvi", "Heinola", "Heinävesi", "Helsinki", "Hirvensalmi", "Hollola", "Huittinen", "Humppila", "Hyrynsalmi", "Hyvinkää", "Hämeenkyrö", "Hämeenlinna", "Iisalmi", "Iitti", "Ikaalinen", "Ilmajoki", "Ilomantsi", "Imatra", "Inari", "Inkoo", "Isojoki", "Isokyrö", "Janakkala", "Joensuu", "Jokioinen", "Jomala", "Joroinen", "Joutsa", "Juuka", "Juupajoki", "Juva", "Jyväskylä", "Jämijärvi", "Jämsä", "Järvenpää", "Kaarina", "Kaavi", "Kajaani", "Kalajoki", "Kangasala", "Kangasniemi", "Kankaanpää", "Kannonkoski", "Kannus", "Karijoki", "Karkkila", "Karstula", "Karvia", "Kaskinen", "Kauhajoki", "Kauhava", "Kauniainen", "Kaustinen", "Keitele", "Kemi", "Kemijärvi", "Keminmaa", "Kemiönsaari", "Kempele", "Kerava", "Keuruu", "Kihniö", "Kinnula", "Kirkkonummi", "Kitee", "Kittilä", "Kiuruvesi", "Kivijärvi", "Kokemäki", "Kokkola", "Kolari", "Konnevesi", "Kontiolahti", "Korsnäs", "Koski", "Tl", "Kotka", "Kouvola", "Kristiinankaupunki", "Kruunupyy", "Kuhmo", "Kuhmoinen", "Kumlinge", "Kuopio", "Kuortane", "Kurikka", "Kustavi", "Kuusamo", "Kyyjärvi", "Kärkölä", "Kärsämäki", "Kökar", "Lahti", "Laihia", "Laitila", "Lapinjärvi", "Lapinlahti", "Lappajärvi", "Lappeenranta", "Lapua", "Laukaa", "Lemi", "Lemland", "Lempäälä", "Leppävirta", "Lestijärvi", "Lieksa", "Lieto", "Liminka", "Liperi", "Lohja", "Loimaa", "Loppi", "Loviisa", "Luhanka", "Lumijoki", "Lumparland", "Luoto", "Luumäki", "Maalahti", "Maarianhamina", "–", "Mariehamn", "Marttila", "Masku", "Merijärvi", "Merikarvia", "Miehikkälä", "Mikkeli", "Muhos", "Multia", "Muonio", "Mustasaari", "Muurame", "Mynämäki", "Myrskylä", "Mäntsälä", "Mänttä-Vilppula", "Mäntyharju", "Naantali", "Nakkila", "Nivala", "Nokia", "Nousiainen", "Nurmes", "Nurmijärvi", "Närpiö", "Orimattila", "Oripää", "Orivesi", "Oulainen", "Oulu", "Outokumpu", "Padasjoki", "Paimio", "Paltamo", "Parainen", "Parikkala", "Parkano", "Pedersören", "kunta", "Pelkosenniemi", "Pello", "Perho", "Pertunmaa", "Petäjävesi", "Pieksämäki", "Pielavesi", "Pietarsaari", "Pihtipudas", "Pirkkala", "Polvijärvi", "Pomarkku", "Pori", "Pornainen", "Porvoo", "Posio", "Pudasjärvi", "Pukkila", "Punkalaidun", "Puolanka", "Puumala", "Pyhtää", "Pyhäjoki", "Pyhäjärvi", "Pyhäntä", "Pyhäranta", "Pälkäne", "Pöytyä", "Raahe", "Raasepori", "Raisio", "Rantasalmi", "Ranua", "Rauma", "Rautalampi", "Rautavaara", "Rautjärvi", "Reisjärvi", "Riihimäki", "Ristijärvi", "Rovaniemi", "Ruokolahti", "Ruovesi", "Rusko", "Rääkkylä", "Saarijärvi", "Salla", "Salo", "Saltvik", "Sastamala", "Sauvo", "Savitaipale", "Savonlinna", "Savukoski", "Seinäjoki", "Sievi", "Siikainen", "Siikajoki", "Siikalatva", "Siilinjärvi", "Simo", "Sipoo", "Siuntio", "Sodankylä", "Soini", "Somero", "Sonkajärvi", "Sotkamo", "Sottunga", "Sulkava", "Sund", "Suomussalmi", "Suonenjoki", "Sysmä", "Säkylä", "Taipalsaari", "Taivalkoski", "Taivassalo", "Tammela", "Tampere", "Tervo", "Tervola", "Teuva", "Tohmajärvi", "Toholampi", "Toivakka", "Tornio", "Turku", "Tuusniemi", "Tuusula", "Tyrnävä", "Ulvila", "Urjala", "Utajärvi", "Utsjoki", "Uurainen", "Uusikaarlepyy", "Uusikaupunki", "Vaala", "Vaasa", "Valkeakoski", "Vantaa", "Varkaus", "Vehmaa", "Vesanto", "Vesilahti", "Veteli", "Vieremä", "Vihti", "Viitasaari", "Vimpeli", "Virolahti", "Virrat", "Vårdö", "Vöyri", "Ylitornio", "Ylivieska", "Ylöjärvi", "Ypäjä", "Ähtäri", "Äänekoski"];
  var numero = randomNumber(0, sanat.length);
  sana= sanat[numero].toUpperCase();
  if (storesana.indexOf(sana) > 0)
  {
     return getrandomsana();
  }
   return sana;
}
function randomNumber(min, max)
{
    return Math.floor(Math.random() * (max - min)) + min;
}

window.onload = initialize;
