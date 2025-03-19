package com.rogers.stubAPI.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rogers.stubAPI.data.StubAPIResponse;
import com.rogers.stubAPI.entity.RogersHub;
import com.rogers.stubAPI.service.mapper.StubAPIResponseMapper;
import com.rogers.stubAPI.service.validator.StubAPIServiceValidator;

@Service
public class StubAPIService {
	@Autowired
	StubAPIResponseMapper mapper;
	
	@Autowired
	StubAPIServiceValidator validator;

	public StubAPIResponse getRogersHub(RogersHub rogersHub) {
		validator.validateHubCode(rogersHub.getHubCode());;
		StubAPIResponse stubAPIResponse = mapper.mapStubAPIResponse(rogersHub);
		return stubAPIResponse;
	}

}
