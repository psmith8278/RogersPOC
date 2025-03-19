package com.rogers.isp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rogers.isp.entity.RogersISP;
import com.rogers.isp.service.RogersISPService;

@RestController
public class RogersISPController {

	@Autowired
	private RogersISPService rogersISPService;

	@GetMapping("/fetchData/{hubCode}")
	public ResponseEntity<List<RogersISP>> fetchRogersISP(@PathVariable String hubCode) {
		List<RogersISP> rogersISPs = rogersISPService.fetchRogersISP(hubCode);
		return ResponseEntity.status(200).body(rogersISPs);
	}
}
