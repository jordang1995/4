<!DOCTYPE html>
<html>
<head>
	<title>SAEZ - Essay Write</title>
	<link rel="stylesheet" type="text/css" href="css/normalize.css">
	<link rel="stylesheet" type="text/css" href="css/test_essay.css">
	<script type="text/javascript" src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
	<script type="text/javascript" src="js/essay_write.js"></script>
</head>
<body>	
	<header>
		<h2>Essay Practice - Currently testing...</h2>
	</header>
	<nav id='primary'>
		<a href="index.php"><li>Home Page</li></a>
		<a href="essay_write.php"><li>Write Essay</li></a>
		<a href="login.php"><li>Login</li></a>
	</nav>
	<main>
		<figure id='collage'>
			<strong>I am an Image</strong>
		</figure>
		<div class="clearfix"></div>
		<form id='collageSettings'>
			<label for='topic'>Topic:</label>
			<select id='topic'>
					<option>Politics</option>
					<option>Religion</option>
			</select>
			<button type='submit' id='submitCollage' disabled="disabled">Submit</button>
			<button type='button' id='generateCollage'>Generate</button>
		</form>
		<form id='essay'>
			<div id='essayStatistics'>
				Word Count: <span id='wordCount'>0000</span>
				Time Spent: <span id='timer'>00:00:00</span>
			</div>
			<textarea id='textEditor' disabled="disabled"></textarea>
			<button type='submit' id='submitEssay' disabled="disabled">Submit</button>
			<button type='save' id='saveEssay' disabled="disabled">Save</button>
		</form>
	</main>
	<footer class='clearfix'>......</footer>
</body>
</html>