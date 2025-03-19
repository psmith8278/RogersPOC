package com.rogers.stubAPI.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.rogers.stubAPI.data.ErrorResponse;
import com.rogers.stubAPI.exception.StubAPIException;
import static java.util.Objects.nonNull;

import jakarta.servlet.http.HttpServletRequest;

@ControllerAdvice
public class StubAPIControllerAdvice {

	@ExceptionHandler(StubAPIException.class)
	public ResponseEntity<ErrorResponse> processStubAPIException(HttpServletRequest req, StubAPIException exception) {
		HttpStatus httpStatus = null;
		ErrorResponse error = new ErrorResponse();
		if (exception instanceof StubAPIException) {
			httpStatus = HttpStatus.PRECONDITION_FAILED;
			error.setErrorMessage(exception.getErrorResponse().getErrorMessage());
		} else {
			httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
		}
		
		return new ResponseEntity<>(error, httpStatus);
	}
}
