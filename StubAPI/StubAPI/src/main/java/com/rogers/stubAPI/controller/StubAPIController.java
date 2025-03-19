package com.rogers.stubAPI.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.rogers.stubAPI.data.StubAPIResponse;
import com.rogers.stubAPI.entity.RogersHub;
import com.rogers.stubAPI.service.StubAPIService;


@RestController
public class StubAPIController {

	@Autowired
	private StubAPIService stubAPIService;
	
	@PostMapping(value = "/submit")
	public ResponseEntity<StubAPIResponse> submitRogersHub(@RequestBody RogersHub rogersHub){
		StubAPIResponse response = stubAPIService.getRogersHub(rogersHub);
		return ResponseEntity.status(200)
				.body(response);
		
	}
	
}
