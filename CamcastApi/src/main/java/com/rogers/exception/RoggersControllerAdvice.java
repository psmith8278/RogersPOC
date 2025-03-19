package com.rogers.exception;

import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;

public class RoggersControllerAdvice {

	@ExceptionHandler(Exception.class)
	public ResponseEntity<String> HandleException(Exception ex) {
		return ResponseEntity.status(HttpStatusCode.valueOf(500)).body("An error occurred: " + ex.getMessage());
	}

	@ExceptionHandler(NullPointerException.class)
	public ResponseEntity<String> NullPointerException(NullPointerException ex) {
		return ResponseEntity.status(HttpStatusCode.valueOf(500)).body("Null pointer exception: " + ex.getMessage());
	}

}
