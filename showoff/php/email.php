<?php

// requires swiftmailer
// http://swiftmailer.org/
require_once("swift/swift_required.php");

if (isset($_POST['nameFrom']) && isset($_POST['emailFrom']) && isset($_POST['messageFrom']))
{
	// create some params
	$nameFrom  		= $_POST['nameFrom'];
	$emailFrom  	= $_POST['emailFrom'];
	$messageFrom  	= $_POST['messageFrom'];
	$destinationTo  = "allobon@gmail.com";

	// this plays nice with the swiftmailer plugin
	$transport = Swift_SmtpTransport::newInstance("smtp.gmail.com", 465)
		->setUsername("edhallsmtpmailer@gmail.com")
		->setPassword("edhallsmtpmailer11")
		->setEncryption("ssl");

	$mailer = Swift_Mailer::newInstance($transport);

	$message = Swift_Message::newInstance()
		->setSubject("New message from user of intheon.uk")
		->setFrom(array($emailFrom => $nameFrom))
		->setTo(array($destinationTo => "Ben"))
		->setBody($messageFrom);

	$result = $mailer->send($message);

}
?>