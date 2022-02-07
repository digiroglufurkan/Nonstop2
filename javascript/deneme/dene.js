var dizi ;
function deneme5()
{

fetch('text.html')
 .then(response => response.text())
    .then(data => {
      var a = data.split(" ");
      document.getElementById("deneme").innerHTML= a[0];
      dizi =a;
  })
  .catch(eror => console.log(eror));
  //document.getElementById("deneme2").innerHTML= dizi;
}

window.onload = deneme5;
