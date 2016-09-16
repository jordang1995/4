<?php
	session_start();
?>

<!DOCTYPE html>
<html>
<head>
	<title>SAEZ - Login</title>
	<link rel="stylesheet" type="text/css" href="css/normalize.css">
	<link rel="stylesheet" type="text/css" href="css/test_essay.css">
	<script type="text/javascript" src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
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
		<form action="verifySignup.php" method="POST">
			<h3>Sign Up</h3>
			<input type="text" name="user" placeholder="Username"><br>
			<input type="email" name="email" placeholder="E-mail"><br>
			<input type="password" name="pwd" placeholder="Password"><br>
			<button type="submit">Sign Up</button>
		</form>
		<hr>
		<form action="verifyLogin.php" method="post">
			<label>Username:</label><input type="text" name="user">
			<label>Password:</label><input type="password" name="pwd">
			<button type="submit">Login</button>
		</form>
		<br><br>
		<?php
			if(isset($_SESSION['id'])) {
				echo 'You are logged in with id:'.$_SESSION['id'];
			}
			else {
				echo 'You are not logged in.';
			}
		?>
	</main>
</body>
</html>