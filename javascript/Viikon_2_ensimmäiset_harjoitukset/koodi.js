
function deneme()
{
  let talukko1 = [];
  talukko1.push(document.getElementById("numero1").value.toString());
  talukko1.push(document.getElementById("numero2").value.toString());
  talukko1.push(document.getElementById("numero3").value.toString());
  talukko1 = talukko1.sort(function(a,b){return a-b});
  return document.getElementById("kirjoitus1").innerHTML = talukko1;
 }

function suurii()
{
  let talukko2 = [];
  talukko2.push(document.getElementById("snumero1").value);
  talukko2.push(document.getElementById("snumero2").value);
  talukko2.push(document.getElementById("snumero3").value);
  talukko2.push(document.getElementById("snumero4").value);
  talukko2.push(document.getElementById("snumero5").value);
  let suuriluku = Math.max(...talukko2);
  return document.getElementById("suurinnumero").innerHTML= suuriluku;
}

function pari()
{
  let luku = document.getElementById("pari1").value;
  return (luku%2) ? document.getElementById("paritulos").innerHTML= "luku on pariton":
  document.getElementById("paritulos").innerHTML = "luku on pari" ;
}

function ikaa()
{
  let luku = document.getElementById("ikaa1").value;
  return (luku > 17 ) ? document.getElementById("ikaa2").innerHTML= "Voit ajaa auto":
  (luku > 15 ) ? document.getElementById("ikaa2").innerHTML= " Voit ajaa motoa":
  document.getElementById("ikaa2").innerHTML= "Voit ajaa polkupyörä ";
}

function kieli()
{

  switch (document.getElementById("kieli1").value) {
  case "Englanti":
  return document.getElementById("kieli2").innerHTML = "Hello world !";
  break;
  case "Espanja":
  return document.getElementById("kieli2").innerHTML = "Hola Mundo !";
  break;
  case "Turkki":
  return document.getElementById("kieli2").innerHTML = "Merhaba Dunya !";
  break;
  case "Ruotsi":
  return document.getElementById("kieli2").innerHTML = "Hej världen !";
  break
  default:
  return document.getElementById("kieli2").innerHTML = "Hei Maailma";
  
}
}
