var xmlHttp;
if (window.XMLHttpRequest) {
    xmlHttp = new XMLHttpRequest();
    window.alert("xml");
}
else if (window.ActiveXObject)  {
  xmlHttp= new ActiveXObject("Microsoft.XMLHTTP");
    window.alert("active");
}

xmlHttp.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200)
    {
	window.alert(this.responseText);
    display(this);
  }
}
xmlHttp.open("GET", "cache_yr2.xml", true);
xmlHttp.send();
function display(xml){
    window.alert(xml.reponseText);
  var xmlDoc = xml.responseXML;
  var track = xmlDoc.getElementsByTagName("track")[0];
  document.getElementById("radioName").innerHTML = xmlDoc.getElementsByTagName("radioname")[0].firstChild.nodeValue;
  document.getElementById("title").innerHTML = "Song: "+track.getElementsByTagName("title")[0].firstChild.nodeValue;
  document.getElementById("artist").innerHTML = "By: "+track.getElementsByTagName("artists")[0].firstChild.nodeValue;
  document.getElementById("url").href = xmlDoc.getElementsByTagName("radurl")[0].firstChild.nodeValue;
  document.getElementById("cover").src = track.getElementsByTagName("cover")[0].firstChild.nodeValue;
  document.getElementById("startTime").innerHTML = "Start Time: "+ track.getElementsByTagName("starttime")[0].firstChild.nodeValue+" CET";
}
