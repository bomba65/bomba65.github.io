<?php
    $to = "bkalzhan@gmail.com";
    $Subject = "Обратная связь с massazhok.kz";

    $name = $_POST['name'];
    $phoneNumber = $_POST['phoneNumber'];
	$message = "Имя человека: $name\nНомер телефона: $phoneNumber";

	$apiToken = "554715462:AAFrf6S6RioreTm_O0S7NJ_ek-SzJdSv7DA";
	$data = [
		'chat_id' => '-237280430&parse_mode=html',
		'text' => $message
	];

	$response = file_get_contents("https://api.telegram.org/bot$apiToken/sendMessage?" . http_build_query($data) );

    $headers .= 'From: Massazhok@site.kz'."\r\n".'Content-Type: text/plain; charset=utf-8'."\r\n";

    mail($to, '=?utf-8?B?'.base64_encode($Subject).'?=', $message, $headers);
	header("Location: http://".$_SERVER['HTTP_HOST'].$formaction);
?>

/*
<?php
	require_once('PHPMailer/class.phpmailer.php');

	$mail = new PHPMailer;

	$mail->SMTPDebug = 3;                               // Enable verbose debug output

	$mail->isSMTP();                                      // Set mailer to use SMTP
	$mail->Host = 'smtp.yandex.com';  // Specify main and backup SMTP servers
	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = 'info@massazhok.kz';                 // SMTP username
	$mail->Password = 'massazhok1';                           // SMTP password
	$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
	$mail->Port = 465;                                    // TCP port to connect to

	$mail->From = 'info@massazhok.kz';
	$mail->FromName = 'info@massazhok.kz';
	$mail->addAddress('info@massazhok.kz', 'a');     // Add a recipient
	$mail->addAddress('info@massazhok.kz');               // Name is optional
	$mail->addReplyTo('info@massazhok.kz', 'a');
	//$mail->addCC('cc@example.com');
	//$mail->addBCC('bcc@example.com');

	$mail->isHTML(true);                                  // Set email format to HTML
	
	$name = $_POST['name'];
    $phoneNumber = $_POST['phoneNumber'];
	
	$mail->Subject = 'Обратная связь с Massazhok.kz';
	$mail->Body    = "Имя человека: $name <br> Номер телефона: $phoneNumber";
	$mail->AltBody = "Имя человека: $name <br> Номер телефона: $phoneNumber";
	$mail->send();
	header("Location: http://".$_SERVER['HTTP_HOST'].$formaction);
?>
*/