<?php

session_start();

include 'dbh.php';

$user = $_POST['user'];
$pwd = $_POST['pwd'];

$query = "SELECT * FROM User WHERE username='$user' AND pwd='$pwd'";

$result = mysqli_query($conn, $query);

if (!$row = mysqli_fetch_assoc($result)) {
	echo "Your username or password is incorrect.";
} 
else {
	$_SESSION['id'] = $row['id'];
}

header("Location: index.php");
?>