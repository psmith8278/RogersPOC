package com.rogers.controller;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.camcast.dto.CamCastDto;
import com.rogers.entity.RogersHub;
import com.rogers.mapper.CamCastMapper;

@RestController
public class CamCastController {
	private static final Logger logger = LoggerFactory.getLogger(CamCastController.class);
	
	@Autowired
	CamCastMapper mapper;
	
	@PostMapping("/mapToRegersHub")
	public ResponseEntity<RogersHub> getRegersHub(@RequestBody CamCastDto camcastDto) {
		logger.info("Calling camcastMapper");
		RogersHub rogersHub = mapper.camcastMapper(camcastDto);
		logger.info("Successfully converted to Rogershub");
		return ResponseEntity.status(201).body(rogersHub);
	}

}
