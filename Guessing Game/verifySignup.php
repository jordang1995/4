<?php


include 'dbh.php';

$user = $_POST['user'];
$pwd = $_POST['pwd'];
$email = $_POST['email'];

$query = "INSERT INTO User(username, pwd, email) 
				VALUES('$user', '$pwd', '$email')";

$result = mysqli_query($conn, $query);

header("Location: index.php");
?>