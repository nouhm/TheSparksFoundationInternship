<?php 

$server = "localhost";
$username = "root";
$password = "";
$database = "OnlineBank";

$conn = mysqli_connect('127.0.0.1','root','','OnlineBank');

if (!$conn) {
    die("<script> alert('Connection Failed.') </script>");
}

$result = mysqli_query($con,"SELECT * FROM users");

echo "<table border='1'>
<tr>
<th>Account Number</th>
<th>Country</th>
<th>Name</th>
<th>Current Balance (in $)</th>
</tr>";

while($row = mysqli_fetch_array($result))
{
echo "<tr>";
echo "<td>" . $row[0] . "</td>";
echo "<td>" . $row[1] . "</td>";
echo "<td>" . $row[2] . "</td>";
echo "<td>" . $row[3] . "</td>";
echo "</tr>";
}
echo "</table>";

mysqli_close($con);

?>