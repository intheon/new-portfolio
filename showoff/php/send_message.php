<?php


if (isset($_POST['message']) && isset($_POST['from']) && isset($_POST['email']))
{
	require "db_conf.php";

	$message = $_POST['message'];
	$from = $_POST['from'];
	$email = $_POST['email'];


	$connect = mysqli_connect($host,$username,$password,$database);

	mysqli_query($connect,"INSERT INTO messages (message, email, name) VALUES ('$message','$email','$from')");

	echo "success";
}
?>