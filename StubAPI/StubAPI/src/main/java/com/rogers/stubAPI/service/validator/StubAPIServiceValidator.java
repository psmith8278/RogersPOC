package com.rogers.stubAPI.service.validator;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.rogers.stubAPI.data.ErrorResponse;
import com.rogers.stubAPI.exception.StubAPIException;

@Service
public class StubAPIServiceValidator {

	public void validateHubCode(String hubCode) {
		ErrorResponse errorResponse = new ErrorResponse();
		if(hubCode.length() > 4) {
			errorResponse.setErrorMessage("Invalid Hub Code");
			throw new StubAPIException(errorResponse, HttpStatus.PRECONDITION_FAILED);
		}
	}

}
