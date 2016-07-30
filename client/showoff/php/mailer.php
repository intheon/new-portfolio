<?php
require "vendor/autoload.php";
use Mailgun\Mailgun;


if ( isset($_POST["message"]) && isset($_POST["from"]) && isset($_POST["email"]) ){

	# Instantiate the client.
	$mgClient = new Mailgun('key-820ec8fedd020cd2c1e32edfa345779b');
	//$domain = "Sandbox231ef7c0b0a24a31b509f2e2b3d3e849.Mailgun.Org";
	$domain = "intheon.uk";

	$message = $_POST["message"];
	$from = $_POST["from"];
	$email = $_POST["email"];

	# Make the call to the client.
	$result = $mgClient->sendMessage($domain, array(
	    'from'    => $from . ' <' . $email .  '>',
	    'to'      => 'Ben <allobon@gmail.com>',
	    'subject' => 'Hello',
	    'text'    => $message . " || from: " . $from . " || email:  " . $email
	));


	echo "success";

}


?>