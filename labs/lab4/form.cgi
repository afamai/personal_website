#!/usr/bin/perl
use CGI ':standard';
print "Content-type: text/html\n\n";

$name = param('name');
$color = param('color');
$animal = param('animal');
$background = param('bdg');
print << "EOF";
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="http://webdev.scs.ryerson.ca/~a4mai/labs/lab4/stylesheet.css">
<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Bowlby+One+SC">
<style>
body{
font-family: 'Bowlby One SC';
background-color:$color;
}
</style>
<title>Custom Animal</title>
</head>
<body>
<div class="center">
<h1>$name</h1>
<img class="top center" src="http://webdev.scs.ryerson.ca/~a4mai/labs/lab4/$animal.png" alt="$animal.png">
<img class="bottom" src="http://webdev.scs.ryerson.ca/~a4mai/labs/lab4/$background.png" alt="$background.png">
<div>
</body>
</html>
EOF
