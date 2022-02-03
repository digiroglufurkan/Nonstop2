function isokirjain()
{
  var text1= document.getElementById("isokirjain1").value.toString();
  if (text1 == "")
  {
    return document.getElementById("isokirjain2").innerHTML = "Kirjoita Teksti";
  }
  return (text1[0] == text1[0].toUpperCase())?  document.getElementById("isokirjain2").innerHTML="Ensimainen kirjain on iso" :
  document.getElementById("isokirjain2").innerHTML="Ensimainen kirjain on pieni";
}

function siistii ()
{
  var text = document.getElementById("siistii1").value.toString();
  text = text.trim();
 return document.getElementById("siistii1").value = text;

}
function laskeevokalit()
{

  var text2 = document.getElementById("laskeevokalit1").value.toString();

  if (text2 == "")
  {
    return document.getElementById("laskeevokalit2").innerHTML = "Kirjoita Teksti";
  }
  var laske =0;
  var vokaali = ['a', 'A', 'ä', 'Ä','I','i','e','E','o','O','u','U', 'y', 'Y','ö','Ö'];
  for(var i =0; i< text2.length ; i++ )
  {
     if (vokaali.indexOf(text2[i]) > -1)
     {
       laske ++;
     }
  }
  return document.getElementById("laskeevokalit2").innerHTML= "Tässä teksdissä on " + laske + " vokaalia";
}

function alfanumarainen()
{

  var  text = document.getElementById("alfanumarainen1").value.toString();
 if (text.replace(/[A-z]/gi,"").length == 0 )
{
  return document.getElementById("alfanumarainen2").innerHTML= "Teksti sisältää vain kirjain";
}

else if (text.replace(/[0-9]/g,"").length == 0 )
{
    return document.getElementById("alfanumarainen2").innerHTML= "Teksti sisältää vain luku";
}

else if (text.replace(/[0-9]/g,"").replace(/[A-z]/gi,"").length > 0)
{
  return document.getElementById("alfanumarainen2").innerHTML= "Teksti sisältää erikoismerkkejä";
}

  return document.getElementById("alfanumarainen2").innerHTML= "Teksti sisältää luku ja kirjain";
}
function postinumero()
{

  var postinum = document.getElementById("postinumero1").value.toString();
  if (postinum.length == 5 && postinum.replace(/[0-9]/g, "").length == 0 )
  {
    return document.getElementById("postinumero2").innerHTML= "Tämä on pätävä postinumero";
  }

  return document.getElementById("postinumero2").innerHTML= "Tämä ei pätävä postinumeroa";
}

function henkilotunnus()
{
  var tunnus = document.getElementById("henkilotunnus1").value.toString();

  if(tunnus.substring(0,6).replace(/[0-9]/g,"").length == 0  && /(A|-)/.test(tunnus[6]) && tunnus.substring(7,10).replace(/[0-9]/g,"").length == 0  && tunnus.length == 11 )
  {
    if (/[0-9]/.test(tunnus[10]) || /[A-Z]/.test(tunnus[10]))
    {
      return document.getElementById("henkilotunnus2").innerHTML = "Tämä on pätävä henkilotunnus";
    }

  }
   return document.getElementById("henkilotunnus2").innerHTML = "Tämä ei ole pätävä henkilotunnuksia";
}


function htmltagscheck ()
{
  var text1 = document.getElementById("input1").value.toString();
  var tags = ["<!--...-->", "<!doctype>", "<a>", "<abbr>", "<acronym>", "<address>", "<applet>", "<area>", "<article>", "<aside>",
  "<audio>", "<b>", "<base>", "<basefont>", "<bb>", "<bdo>", "<big>", "<blockquote>", "<body>", "<br />", "<button>", "<canvas>", "<caption>",
   "<center>", "<cite>", "<code>", "<col>", "<colgroup>", "<command>", "<datagrid>", "<datalist>", "<dd>", "<del>", "<details>", "<dfn>", "<dialog>",
   "<dir>", "<div>", "<dl>", "<dt>", "<em>", "<embed>", "<eventsource>", "<fieldset>", "<figcaption>", "<figure>", "<font>", "<footer>", "<form>",
   "<frame>", "<frameset>", "<h1> to <h6>", "<head>", "<header>", "<hgroup>", "<hr />", "<html>", "<i>", "<iframe>", "<img>", "<input>", "<ins>",
    "<isindex>", "<kbd>", "<keygen>", "<label>", "<legend>", "<li>", "<link>", "<map>", "<mark>", "<menu>", "<meta>", "<meter>", "<nav>", "<noframes>",
     "<noscript>", "<object>", "<ol>", "<optgroup>", "<option>", "<output>", "<p>", "<param>", "<pre>", "<progress>", "<q>", "<rp>", "<rt>", "<ruby>",
     "<s>", "<samp>", "<script>", "<section>", "<select>", "<small>", "<source>", "<span>", "<strike>", "<strong>", "<style>", "<sub>", "<sup>",
     "<table>", "<tbody>", "<td>", "<textarea>", "<tfoot>",
    "<th>", "<thead>", "<time>", "<title>", "<tr>", "<track>", "<tt>", "<u>", "<ul>", "<var>", "<video>", "<wbr>",];
for(var i = 0 ;  i < tags.length ; i++)
{
  if (text1.indexOf(tags[i]) > -1 )
  {
    return document.getElementById("tags2").innerHTML= "tässä teksissä on Html tag";
  }

}
 return document.getElementById("tags2").innerHTML= "tässä teksissä ei ole Html tag";
}
