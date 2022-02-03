var dizi ;
function deneme5()
{

  var fs = require("fs");
  fs.readFile('text.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   document.getElementById("deneme").innerHTML="Eszamansiz okuma: "+ data.toString();
});
 /*fetch('text.txt')
 .then(response => response.text())
    .then(data => {
      var a = data.split(",");
      document.getElementById("deneme").innerHTML= a[0];
      dizi =a;
  })
  .catch(eror => console.log(eror));
  document.getElementById("deneme2").innerHTML= dizi[1]; */
}
window.onload = deneme5;
