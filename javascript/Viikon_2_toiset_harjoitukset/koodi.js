
function tarkista()
{

  var luku = document.getElementById("numero1").value;
  if (luku < 0)
  {
    return document.getElementById("tulos1").innerHTML=" Luku on negativinen";
  }

  return document.getElementById("tulos1").innerHTML=" Luku on positivinen";
 }

function summakeskiarvo()
{
  let luku = 0;
  luku += (parseInt(document.getElementById("snumero1").value));
  luku +=(parseInt(document.getElementById("snumero2").value));
  luku+=(parseInt(document.getElementById("snumero3").value));
  luku+=(parseInt(document.getElementById("snumero4").value));
  luku +=(parseInt(document.getElementById("snumero5").value));
  let keskiarvo = luku/5;
return document.getElementById("tulos4").innerHTML= "lukujen summa on:  "
+ luku + "j a keskiarvo on: " + keskiarvo;

}

function viikonpaivan()
{
  let luku = document.getElementById("inputteh2").value;
  switch (parseInt(luku)) {
    case 1:
      document.getElementById("tulos2").innerHTML= "Manantai";
      break;
      case 2:
      document.getElementById("tulos2").innerHTML="Tiistai";
        break;
        case 3:
      document.getElementById("tulos2").innerHTML="Keskiviikko";
      break;
      case 4:
      document.getElementById("tulos2").innerHTML="Torstai";
      break;
      case 5:
      document.getElementById("tulos2").innerHTML="Perjantai";
      break;
      case 6:
      document.getElementById("tulos2").innerHTML="Lauantai";
      break;
      default:
      document.getElementById("tulos2").innerHTML="Sununtai";
  }

}

function karkousvuosi()
{
  let luku = parseInt( document.getElementById("inputteh3").value);
  if (luku%4 == 0&& luku%100 ==0)
  {
    document.getElementById("tulos3").innerHTML= "Vuosi On KarkousVuosi (vuosi jaoille seka 4 että 100)";
  }
  else if (luku%4==0)
  {
    document.getElementById("tulos3").innerHTML= "Vuosi On KarkousVuosi (vuosi jaoille  4 )";
  }
  else {
    document.getElementById("tulos3").innerHTML= "Vuosi ei ole KarkousVuosi ";
  }
  }


function laske5()
{
  let luku = parseInt(document.getElementById("inputteh5").value);
  let lause="";
  for (var i = 1;i < 11  ; i++)
  {
    lause += luku + " x " + i +"= " + luku * i+ "<br>";

  }
  document.getElementById("tulos5").innerHTML= lause;
}
