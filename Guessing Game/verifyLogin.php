<?php


include 'dbh.php';

$user = $_POST['user'];
$pwd = $_POST['pwd'];

$query = "SELECT * FROM User WHERE username='$user' AND pwd='$pwd'";

$result = mysqli_query($conn, $query);


if (!mysqli_fetch_assoc($result)) {
	echo "Your username or password is incorrect.";
} 
else {
	echo "You are logged in.";
}

header("Location: index.php");
?>