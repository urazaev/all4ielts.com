<?php
session_start();
$rand == rand(1, 999999999);
if( isset($_POST['name']) )
{
$to = 'info@all4ielts.com'; // Replace with your email
$subject = 'Message from website'; // Replace with your $subject
$headers = 'From: ' . 'no-reply' .rand(1, 999999999999999) .'@all4ielts.com'.  "\r\n" . 'Reply-To: ' . $_POST['email'];
$message = 'Name: ' . $_POST['name'] . "\n" .
          'E-mail: ' . $_POST['email'] . "\n" .
          'Message: ' . $_POST['message'];
mail($to, $subject, $message, $headers);

}
?>