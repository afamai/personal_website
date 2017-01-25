<html>
	<head>
	<title>Lab5 Part2</title>
	</head>
	<body style="font-family: Arial; font-size: 18;">
	<%
	if(request.cookies("visit") = "") then
		response.cookies("visit")("hits") = 1
		response.cookies("visit").expires = Date() + 10
		response.write("This is your first time here!")
	else
		response.write("You have visited this page " & request.cookies("visit")("hits")  & " times. Last visit was on " & request.cookies("visit")("time") &"<br>")
        response.cookies("visit")("hits") = request.cookies("visit")("hits") + 1
	end if
	response.cookies("visit")("time") = date()&" "& DateAdd("h",3,time())

	background = request.querystring("background")
	if background = "" then
		response.write("<form action='part2.asp' method='get'><br>Select a background:<br>")
		response.write("<input type='image' name='background' value='cityBgd.jpg' src='cityBgd.jpg' width='240' height='135'><br><br>")
		response.write("<input type='image' name='background' value='natureBgd.jpg' src='natureBgd.jpg' width='240' height='135'><br><br>")
		response.write("<input type='image' name='background' value='starBgd.jpg' src='starBgd.jpg' width='240' height='135'></form>")
	else
		response.write("<style>body{background: url('" & background & "') no-repeat center center fixed;background-size: cover;color: white} </style>")
		response.write("<a style=""color:white"" href=""http://webdev.scs.ryerson.ca:8080/a4mai/labs/lab5/part2.asp"">Go back</a>")
	end if
%>
	</body>
</html>