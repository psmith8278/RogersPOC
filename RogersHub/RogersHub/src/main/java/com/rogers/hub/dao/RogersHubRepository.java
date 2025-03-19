package com.rogers.hub.dao;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rogers.hub.entity.RogersHub;

@Repository
public interface RogersHubRepository extends JpaRepository<RogersHub, UUID>{

}
