package com.rogers.stubAPI.exception;

import org.springframework.http.HttpStatus;

import com.rogers.stubAPI.data.ErrorResponse;

public class StubAPIException extends RuntimeException {

	private static final long serialVersionUID = 1L;
	
	private final ErrorResponse errorResponse;
	
	private final HttpStatus httpStatus;
	
	public StubAPIException(ErrorResponse errorResponse, HttpStatus httpStatus) {
		super();
		this.errorResponse = errorResponse;
		this.httpStatus = httpStatus;
	}

	public ErrorResponse getErrorResponse() {
		return errorResponse;
	}

	public HttpStatus getHttpStatus() {
		return httpStatus;
	}

	

}
