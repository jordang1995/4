<?php
	session_start();
?>

<!doctype HTML>
<html>
<head>
	<title>SAEZ - Home</title>
	<link rel="stylesheet" type="text/css" href="css/normalize.css">
</head>
<body>
	<header>
		<h2>Essay Practice - Currently testing...</h2>
	</header>
	<nav id='primary'>
		<a href="index.php"><li>Home Page</li></a>
		<a href="essay_write.php"><li>Write</li></a>
		<a href="#"><li>Browse</li></a>
		<a href="#"><li>Tips</li></a>
		<div id='loginNav'>
			<a href="login.php">
				<li>
				<?php
					if(isset($_SESSION['id'])) {
						echo 'Profile';
					} 
					else {
						echo 'Sign in';
					}
				?>
				</li>
			</a>
			<?php 
				if(isset($_SESSION['id'])) {
					echo '<a href="logout.php"><li>Logout</li></a>';
				}
			?>
		</div>
	</nav>
	<main>
	</main>
</body>
</html>