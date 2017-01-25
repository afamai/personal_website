#!/usr/bin/ruby -w
puts "Content-type: text/html\n\n"
require 'cgi'
cgi = CGI.new
name = cgi['name']
phone = cgi['phone'].split("-")
address = cgi['address'].split(" ").map(&:capitalize).join(" ")
print <<EOF
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script>
$(document).ready(function(){

$(".nameInfo").click(function(){
$(".name").fadeToggle()
})

$(".phoneInfo").click(function(){
$(".phone1").fadeToggle()
$(".phone2").fadeToggle(1000)
$(".phone3").fadeToggle(2000)
})

$(".addressInfo").click(function(){
$(".address").fadeToggle()
})

})
</script>
<style>
body{
font-family: Arial;
}
h3{
display: inline;
font-size:22;
}
.nameInfo, .phoneInfo, .addressInfo{
border: 2px black solid;
background-color: lightgrey;
padding: 5px;
}
.phone1{
color:red;
}
.phone2{
color:green;
}
.phone3{
color:blue;
}
</style>
<title>hello</title>
</head>
<body>
<h1>Here is the information you entered</h1>
<h4>click on the boxes to hide/show the information</h4>
EOF
puts "<h3 class=\"nameInfo\">Name</h3>"
puts "<h3 class=\"name\"> "+name+"</h3><br><br>"
puts "<h3 class=\"phoneInfo\">Phone number</h3>"
puts "<h3 class=\"phone1\"> ("+phone[0]+") </h3><h3 class=\"phone2\">"+phone[1]+"-</h3><h3 class=\"phone3\">"+phone[2]+"</h3><br><br>"
puts "<h3 class=\"addressInfo\">Address</h3>"
puts "<h3 class=\"address\"> "+address+"</h3><body></html>"
