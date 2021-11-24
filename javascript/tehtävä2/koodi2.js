
function laskeYhteen(a,b)
{
 alert (a + b) ;
}
var taulukko =  [23,56,71, 89, 76,45];
function ekaMuuttuja()
{
  return alert(taulukko[0]);
}
function tarkista(x,y)
{
  if (x + y < 100)
  {
    return alert(" Lukujen summa on alle 100");
  }
  else
  {
    return alert(" Luvut ovat liian suuria, jotta pystyisin laskemaan niitä!");
  }
}
function sama(x, y)
{
  if (x === y)
  {
    return alert(" Samat");
  }
  else
  {
    return alert(" Eri luuvut");
  }
}
function sekuntti(t, m, s )
{
  var sek = (t*60*60) + (m*60) + s ;
  return alert ( sek + " sekuntia");
}
function paivaaolenvanha(v,k, p )
{
   var dizi = [31,59,90,120,151,181,212,243,273,304,334,365];
   var tamavuonapaiva = dizi[10-1]+3; //03.10-2021
   var syntyvuonnapaiva = dizi[k-1] + p ;
   if ( tamavuonapaiva >= syntyvuonnapaiva )
   {
      return alert ((365.25*(2021-v) + tamavuonapaiva - syntyvuonnapaiva) + " päivää (22.05.1984)");
   }
   else
   {
     return alert( 365.25*(2021-v-1) + (365 - (syntyvuonnapaiva - tamavuonapaiva)) + "Päivää");
   }
}
