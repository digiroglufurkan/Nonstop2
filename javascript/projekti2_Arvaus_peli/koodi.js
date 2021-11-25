
var kokeilu = 0;
var arvo =  Math.floor(Math.random() * 11);
function alka()
{
  arvo= Math.floor(Math.random() * 11);
  kokeilu =0;
  for(let i = 0; i < 11; i++)
  {
  document.getElementById(i).disabled = false;
  }
  //return document.getElementById("tulos").innerHTML = arvo.toString();
}

function paina (a)
{
  kokeilu ++;
  if (kokeilu > 3)
  {
    alka();
    return alert( "Tämä olet kokeilut 4 kertaa Valitettavasti hävisi kilpailun ");
  }
  if( parseInt(a) === arvo)
  {
    let ukokeilu = kokeilu;
    alka();
    return alert(" Onnea Voitte " + ukokeilu + " Kertaa" );

  }
  else if (a > arvo)
  {
   for(let i = a; i < 11; i++)
   {
   document.getElementById(i).disabled = true;
   }

    return alert("  liian suuri  ");
  }

  for(let i = 0; i <= a; i++)
  {
  document.getElementById(i).disabled = true;
  }
   return  alert("  liian pieni  ");
}
