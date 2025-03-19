package com.rogers.isp.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rogers.isp.entity.RogersISP;

@Repository
public interface RogersISPRepository extends JpaRepository<RogersISP, String> {
	List<RogersISP> findByHubCode(String hubCode);
}
