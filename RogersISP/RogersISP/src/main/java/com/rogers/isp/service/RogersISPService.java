package com.rogers.isp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rogers.isp.dao.RogersISPRepository;
import com.rogers.isp.entity.RogersISP;

@Service
public class RogersISPService {
	@Autowired
	RogersISPRepository rogersISPRepository;

	public List<RogersISP> fetchRogersISP(String hubCode) {
		return rogersISPRepository.findByHubCode(hubCode);
	}
}
