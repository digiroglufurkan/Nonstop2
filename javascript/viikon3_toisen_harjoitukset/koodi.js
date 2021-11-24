
function teh1function()
{

 let talukko = ["AEINST" ,1,"OÄKL",2,"UM",3, "YHJPRV", 4, "ÖD",7,"BFG",8,"C",10];
 let sana = document.getElementById("teh1input").value.toString();
 if (sana == ""){ return document.getElementById("teh1tulos").innerHTML= "Sytää sana";}
 sana = sana.toUpperCase();
 let deger= 0;
     for (let j = 0; j < sana.length; j++ )
     {
       let a =0;
     for (let i = 0;  i < talukko.length  ; i ++ )
     {
       if (talukko[i].toString().indexOf(sana[j]) > -1)
       {
         deger = deger + talukko[i +1]
         a ++;
       }
     }
     if ( a == 0){deger = deger +12;}
   }
     return document.getElementById("teh1tulos").innerHTML = deger;
}

function teh2function()
{

  let lukua =[];

    for( let i = 0; i < 7 ; i++)
    {
      lukua.push(Math.floor(Math.random() * 100));
    }
    return document.getElementById("teh2tulos").innerHTML= lukua;
}

function teh3function()
{
   let talukko =[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
   let taulu = "";
    for (var r = 0; r < talukko.length ; r++) {
      taulu += "<tr>";
       for (var c = 0 ; c < talukko[r].length; c++ ) {
        taulu += "<td>" + talukko[r][c] + "</td>";
      }
    taulu += "</tr>";
    }
 return document.getElementById("teh3tulos").innerHTML =  taulu ;
}

function teh4function()
{
  let arvo = ['2','3','4','5','6','7','8','9','10', 'A','J','Q', 'K'];
  let rhma =  ['&#9826;', '&#9825;', '&#9828;', '&#9827;'];
  let kart52 = [];
  let kart5=[];
  for (let i =0; i < rhma.length ; i++)
  {
    for (let j = 0; j < arvo.length; j ++)
    {
      kart52.push(rhma[i] + arvo[j]);

    }
  }
  for (let k = 0; k < 5 ; k++)
  {
    let say = Math.floor(Math.random() * 52);
    kart5[k]=kart52[say-k];
    kart52 = kart52.slice(0,say-k).concat(kart52.slice((say-k+1)));
  }

 console.log(kart5);
    return document.getElementById("teh4tulos").innerHTML= kart5;

}
