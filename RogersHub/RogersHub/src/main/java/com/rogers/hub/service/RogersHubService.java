package com.rogers.hub.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rogers.hub.dao.RogersHubRepository;
import com.rogers.hub.entity.RogersHub;

@Service
public class RogersHubService {
	@Autowired
	RogersHubRepository rogersRepository;

	public RogersHub saveRogershub(RogersHub rogersHub) {
		return rogersRepository.save(rogersHub);
	}

	public List<RogersHub> fetchRogersHub() {
		return rogersRepository.findAll();
	}

}
