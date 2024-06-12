<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Send email notification
    $to = "coluc8440@gmail.com"; // Change this to your email address
    $subject = "New message from $name";
    $body = "Name: $name\nEmail: $email\nSubject: $subject\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully. We'll get back to you soon!";
    } else {
        echo "Sorry, there was an error sending your message.";
    }
} else {
    echo "Oops! Something went wrong.";
}
?>
