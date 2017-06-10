<?php
$sendto   = "mosmary@mail.ru"; // Обязательно измените e-mail на свой

$username = $_POST['name'];
$usersurname = $_POST['surname'];
$userfirm = $_POST['firm'];
$usertel = $_POST['tel'];
$useraddress = $_POST['address'];
$usernumber = $_POST['number'];
$userdate = $_POST['date'];
$userwishes = $_POST['wishes'];


// Формирование заголовка письма
$subject  = "Новый заказ";
$headers  = "From: " . strip_tags($username) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Новый заказ</h2>\r\n";
$msg .= "<p><strong>Имя:</strong> ".$username."</p>\r\n";
$msg .= "<p><strong>Фамилия:</strong> ".$usersurname."</p>\r\n";
$msg .= "<p><strong>Фирма:</strong> ".$userfirm."</p>\r\n";
$msg .= "<p><strong>Телефон:</strong> ".$usertel."</p>\r\n";
$msg .= "<p><strong>Адрес:</strong> ".$useraddress."</p>\r\n";
$msg .= "<p><strong>Количество баллонов:</strong> ".$usernumber."</p>\r\n";
$msg .= "<p><strong>Желаемая дата доставки:</strong> ".$userdate."</p>\r\n";
$msg .= "<p><strong>Пожелания:</strong> ".$userwishes."</p>\r\n";
$msg .= "</body></html>";

// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
	echo /*"<span>Спасибо за Ваш заказ. Мы с Вами свяжемся в ближейшее время.</span>"*/"Эрроррррр";
} else {
	echo "false";
}

?>