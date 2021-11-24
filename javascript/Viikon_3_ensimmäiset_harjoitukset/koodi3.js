
function teh1function()
{


  let luku = document.getElementById("teh1input").value;
  let lukua =[];
  if(luku%2 == 0 && luku !== "")
  {
     for (let i = 0; i <= luku  ; i = i + 2 )
     {
       lukua.push(i);
     }
     return document.getElementById("teh1tulos").innerHTML = lukua;
  }

  return document.getElementById("teh1tulos").innerHTML= "Sytää parilllinen luku";
}

function teh2function()
{
  let sana = document.getElementById("teh2input").value.toString();
  let sana1 =[];
  if (sana.length > 0 )
  {
    for( let i = 0; i < sana.length ; i++)
    {
      sana1.push(sana[i]);
      sana1.push('Ö');
    }
    let sana2 = sana1.toString();
    sana2 = sana2.replace(/,/g, "");
    return document.getElementById("teh2tulos").innerHTML= sana2;
  }
  return document.getElementById("teh2tulos").innerHTML= "Sytää sana";
}

function teh3function()
{
  let sana = document.getElementById("teh3input").value.toString();
  //let sana ="sana"
  let myrege= /ö/gi;
  if (sana !== "" && myrege.test(sana))
  {
    //console.log("on");
    return document.getElementById("teh3tulos").innerHTML= "On";
  }
  return document.getElementById("teh3tulos").innerHTML= "Ei ole";
}

function teh4function()
{

  let luku = document.getElementById("teh4input").value.toString();
  if  (luku !== "")
  {
    var a = 1;
    function factorial(n)
    {
      if (n == 0){ return a;}
      a= a*n;
      return factorial(n-1)
    }
    return document.getElementById("teh4tulos").innerHTML= factorial(luku);
  }
  return document.getElementById("teh4tulos").innerHTML= "Sytää luku";
}
function teh5function()
{
  var don= "";
 var i= 1;
  do {
if( i%3 ==  0  && i%5 == 0){

  don = don + "hipheijaa, ";}

else if (i%5 == 0) {
    don = don +"heijaa, ";
  }
  else if (i%3 == 0) {

      don = don +"hip, ";
  }
  else {
    don  = don + i +", ";
  }
  i ++;
}
while (i < 101);
  return document.getElementById("teh5tulos").innerHTML= don;
}

function teh6function()
{
  let tulos= "";
  for (i =0 ; i< 11; i ++)
  {
    tulos= tulos +i +", ";
  }
  return document.getElementById("teh6tulos").innerHTML =tulos;

}

function teh7function()
{
  let tulos = 0;
  for ( i =0 ; i< 11; i ++)
  {
    tulos = tulos +i ;
  }
  return document.getElementById("teh7tulos").innerHTML =tulos;
}

function teh8function()
{
  let a = document.getElementById("teh8input1").value;
  let b = document.getElementById("teh8input2").value;
  return document.getElementById("teh8tulos").innerHTML = Math.pow(a,b);
}

function teh9function()
{
  let a = [];
   a.push(document.getElementById("teh9input1").value);
   a.push(document.getElementById("teh9input2").value);
   a.push(document.getElementById("teh9input3").value);
   a.push(document.getElementById("teh9input4").value);
   a.push(document.getElementById("teh9input5").value);
   let suur = parseInt(a[0]);
   let pieni = parseInt(a[0]);
   for (let i = 0; i < a.length ; i ++)
   {
        if (suur < parseInt(a[i]) )
        {
          suur = a[i];
        }

     if ( pieni > parseInt(a[i]) )
     {
       pieni = a[i] ;
     }
   }
  return document.getElementById("teh9tulos").innerHTML = "Suurin:" + suur + " Pieni: " +pieni;
}

function teh10function()
{
  let sana =[];
  let kirjaa = ["a","ä", "b", "c", "d", "e", "f", "g", "h", "l","k", "y", "ö", "u","r", "t", "c","s","z","v"];
  sana = document.getElementById("teh10input").value;
  let sanauusi ="";
  for(let i = 0; i < (sana.length); i++)
  {
    sanauusi = sanauusi + sana[i] + kirjaa[Math.floor(Math.random() * 20)]; //Math.random(0, 19)

  }
  return document.getElementById("teh10tulos").innerHTML= sanauusi;
}

function teh11function()
{

  let lukus = parseInt(document.getElementById("teh11input2").value);
  let lukup = parseInt(document.getElementById("teh11input1").value);
  let lukupari = [];
  let lukupariton = [];
  let lukuparisum = 0;
  let lukuparitonsum = 0;

  for(let i = lukup; i < lukus + 1; i++)
  {
    if (i%2 == 0)
    {
      lukupari.push(i);
      lukuparisum= lukuparisum +i;
    }
    else {

      lukupariton.push(i);
      lukuparitonsum = lukuparitonsum +i;
    }

  }
  return document.getElementById("teh11tulos").innerHTML= "Pari lukua: " + lukupari + "<br>" + "Parisumma: " + lukuparisum
  + "<br>" + "Pariton lukua: " + lukupariton + "<br>" + " Pariton summa: " +lukuparitonsum; 
}
