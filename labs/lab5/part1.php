<?php
		$hits = "hit";
		if(!isset($_COOKIE[$hits]))
			setcookie($hits,1,time()+(86400*30),"/");
		else
			setcookie($hits,$_COOKIE[$hits]+1,time()+(86400*30),"/")
?>
<!DOTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="stylesheet.css">
		<title>Lab#5 Part1</title>
	</head>
	<body>
		<pre>
Name: Alpha Mai
Student #: 500704607
		</pre>
		<hr>
		<?php
		$rows = $_GET["rows"];
		$cols = $_GET["cols"];
		echo "<table>";
		for($r = 0; $r-1 < $rows; $r++)
		{
			echo "<tr>";
			for($c = 0; $c-1 < $cols; $c++){
			       	if($c == 0)
					echo "<td class='red'>$r</td>";
				else if($r == 0)
					echo "<td class='red'>$c</td>";

			       	else
					echo "<td>".$r*$c."</td>";
			}
			echo "</tr>";
		}
		echo "</table>";
		?>
		<form action="part1.php" method="get">
		<pre>
Select the number of rows and cols to display
(must be between 3x3 up to 12x12).

Rows:    <input type="number" name="rows" min="3" max="12" value="3">
Cols:    <input type="number" name="cols" min="3" max="12" value="3">

<input type="submit" value="Submit">
		</pre>
		</form>
		<?php
		echo "You visited this page ". $_COOKIE[$hits]." time(s)";
		?>
	</body>
</html>
