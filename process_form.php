<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load PHPMailer autoloader
require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    $computerid = $_POST["computerid"];

    // Configure PHPMailer
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.email';  // Specify your SMTP server
    $mail->SMTPAuth = true;
    $mail->Username = 'coluc8440@gmail.com'; // Your SMTP username
    $mail->Password = "liyycloibjqcnvhb"; // Your SMTP password
    $mail->SMTPSecure = 'ssl'; // Enable TLS encryption, 'ssl' also accepted
    $mail->Port = 465; // TCP port to connect to

    // Set sender and recipient
    $mail->setFrom("coluc8440@gmail.com", $name);
    $mail->addAddress('coluc8440@gmail.com'); // Recipient email address

    // Email content
    $mail->isHTML(false); // Set email format to plain text
    $mail->Subject = $subject;
    $mail->Body = "Name: $name\nEmail: $email\nSubject: $subject\nComputerID: $computerid\nMessage:\n$message";

    try {
        // Send email
        $mail->send();
        header("Location: thank_you.html");
        exit();
    } catch (Exception $e) {
        echo "Email sending failed. Error: {$mail->ErrorInfo}";
    }
} else {
    // Redirect back to the form if accessed directly
    header("Location: index.html");
    exit();
}
?>
