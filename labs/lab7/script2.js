var xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200)
  {
    var arr = JSON.parse(this.responseText);
    display(arr);
  }
}
xmlHttp.open("GET", "cache_yr4.json", true);
xmlHttp.send();
function display(array)
{
  document.getElementById("radioName").innerHTML = array.radioname;
  document.getElementById("title").innerHTML = "Song: "+array.track.title;
  document.getElementById("artist").innerHTML = "By: "+array.track.artists;
  document.getElementById("url").href = array.radurl;
  document.getElementById("cover").src = array.track.cover;
  document.getElementById("startTime").innerHTML = "Start Time: "+array.track.starttime + " CET";
}
