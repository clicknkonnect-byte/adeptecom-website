<?php
$to      = "info@adeptecom.com";
$subject = "New enquiry from adeptecom.com";

if ($_SERVER["REQUEST_METHOD"] !== "POST") { header("Location: index.html"); exit; }
if (!empty($_POST["company_url"])) { header("Location: index.html?sent=1#contact"); exit; }

function clean($k){ return isset($_POST[$k]) ? trim(strip_tags($_POST[$k])) : ""; }

$name=clean("name"); $brand=clean("brand");
$email=filter_var(clean("email"), FILTER_SANITIZE_EMAIL);
$whatsapp=clean("whatsapp"); $service=clean("service"); $market=clean("market"); $message=clean("message");

if ($name==="" || $email==="" || $message==="" || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header("Location: index.html?error=1#contact"); exit;
}

$body  = "New enquiry from the Adeptecom website\n";
$body .= "----------------------------------------\n";
$body .= "Name:      $name\n";
$body .= "Brand:     $brand\n";
$body .= "Email:     $email\n";
$body .= "WhatsApp:  $whatsapp\n";
$body .= "Service:   $service\n";
$body .= "Market:    $market\n";
$body .= "----------------------------------------\n";
$body .= "Message:\n$message\n";

$headers  = "From: Adeptecom Website <info@adeptecom.com>\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (@mail($to, $subject, $body, $headers)) { header("Location: index.html?sent=1#contact"); }
else { header("Location: index.html?error=1#contact"); }
exit;
