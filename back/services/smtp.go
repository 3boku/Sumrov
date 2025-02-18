package services

//func MailSend(mail string, code int) {
//	smtpHost := os
//	smtpPort := os
//	email := os
//	password := os
//
//	// 발신자 및 수신자 이메일 주소 설정
//	from := email
//	to := mail
//
//	// 이메일 메시지 구성
//	subject := "Sumrov 임시 비밀번호 확인 이메일 입니다."
//	body := fmt.Sprintf("안녕하세요. Sumrov입니다.\n귀하의 임시 비밀번호는 '%d'입니다.", code)
//
//	// 이메일 헤더 및 내용 구성
//	message := fmt.Sprintf("From: %s\r\nTo: %s\r\nSubject: %s\r\n\r\n%s", from, to, subject, body)
//
//	// SMTP 인증 구성
//	auth := smtp.PlainAuth("", email, password, smtpHost)
//
//	// TLS 구성
//	tlsConfig := &tls.Config{
//		InsecureSkipVerify: true,
//		ServerName:         smtpHost,
//	}
//
//	// TLS 연결 설정
//	conn, err := tls.Dial("tcp", fmt.Sprintf("%s:%d", smtpHost, smtpPort), tlsConfig)
//	if err != nil {
//		fmt.Println("Error connecting to the server:", err)
//		return
//	}
//
//	// SMTP 클라이언트 생성 및 인증 및 전송
//	client, err := smtp.NewClient(conn, smtpHost)
//	if err != nil {
//		fmt.Println("Error creating SMTP client:", err)
//		return
//	}
//	defer client.Quit()
//
//	// 인증
//	if err := client.Auth(auth); err != nil {
//		fmt.Println("Error authenticating:", err)
//		return
//	}
//
//	// 메시지 전송
//	if err := client.Mail(from); err != nil {
//		fmt.Println("Error setting sender:", err)
//		return
//	}
//	if err := client.Rcpt(to); err != nil {
//		fmt.Println("Error setting recipient:", err)
//		return
//	}
//	w, err := client.Data()
//	if err != nil {
//		fmt.Println("Error getting data:", err)
//		return
//	}
//	_, err = w.Write([]byte(message))
//	if err != nil {
//		fmt.Println("Error writing message:", err)
//		return
//	}
//	err = w.Close()
//	if err != nil {
//		fmt.Println("Error closing writer:", err)
//		return
//	}
//	fmt.Println("Email sent successfully!")
//}
