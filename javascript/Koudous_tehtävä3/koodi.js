

function armstrong()
{
  var arr = [];

  for(var say= 100 ; say < 1000; say++)
  {
    var a = say.toString().split('');

    if (say === (Math.pow(a[0],3) + Math.pow(a[1],3)+ Math.pow(a[2],3)))
    {
      arr.push(say);
    }
  }
  return document.getElementById("demo").innerHTML = arr.toString();
}

function tähti()
{
  var el="";
  var top="";
  for(var i = 0 ; i< 10; i++){
    el = el + ' *'
    top= top + el + "<br>"
  }
 document.getElementById("btn2").innerHTML= top;
}
function koodikieeli()
{
  var de = "deneme";
   de = document.getElementById("giris").value.toString();
   de = de.replace(/o/g, '0');
   de= de.replace(/a/g,'4');
   de=de.replace(/e/g,'3');
   de=de.replace(/i/g,'1');
   de=de.replace(/s/g,'5');
   return document.getElementById("kielei1").innerHTML=de;
}

function neljas()
{
  var don= "";
 var i= 1;
  do {
if( i%3 ==  0  && i%5 == 0){

  don = don + "hik-up, ";}

else if (i%5 == 0) {
    don = don +"up, ";
  }
  else if (i%3 == 0) {

      don = don +"hik, ";
  }
  else {
    don  = don + i +", ";
  }
  i ++;
}
while (i < 101);
  return document.getElementById("neljas1").innerHTML= don;
}
