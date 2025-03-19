package com.rogers.hub.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.rogers.hub.data.RogersHubResponse;
import com.rogers.hub.entity.RogersHub;
import com.rogers.hub.service.RogersHubService;

@RestController
public class RogersHubController {

	@Autowired
	private RogersHubService rogersHubService;

	@PostMapping("/save")
	public ResponseEntity<RogersHubResponse> saveRogerHub(@RequestBody RogersHub rogerHub) {
		RogersHub rogershub = rogersHubService.saveRogershub(rogerHub);
		RogersHubResponse response = new RogersHubResponse();
		if (rogershub != null && rogershub.getHubId() != null) {
			response.setMessage("Successfully Saved");
			return ResponseEntity.status(201).body(response);
		} else {
			response.setMessage("HubSite ID is not Found");
			return ResponseEntity.status(204).body(response);
		}
	}

	@GetMapping("/getRogers")
	public ResponseEntity<List<RogersHub>> getRogerHub() {
		List<RogersHub> rogersHubList = rogersHubService.fetchRogersHub();
		return ResponseEntity.status(201).body(rogersHubList);

	}
}
