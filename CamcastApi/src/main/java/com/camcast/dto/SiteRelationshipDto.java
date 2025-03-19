package com.camcast.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class SiteRelationshipDto {

	private String id;
	
	private String href;
	
	private String relationshipType;
	
	private String role;
	
	@JsonProperty("@type")
	private String type;
	
	private ValidForDto validFor;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getHref() {
		return href;
	}

	public void setHref(String href) {
		this.href = href;
	}

	public String getRelationshipType() {
		return relationshipType;
	}

	public void setRelationshipType(String relationshipType) {
		this.relationshipType = relationshipType;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public ValidForDto getValidFor() {
		return validFor;
	}

	public void setValidFor(ValidForDto validFor) {
		this.validFor = validFor;
	}
	
	
}
