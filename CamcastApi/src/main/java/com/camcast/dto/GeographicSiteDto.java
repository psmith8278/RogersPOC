package com.camcast.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class GeographicSiteDto {

	private String id;
	
	private String href;
	
	private String code; 
	
	private String description;
	
	private String name;
	
	private String status;
	
	private List<CalenderDto> calendar;
	
	private List<PlaceDto> place;
	
	private List<RelatedPartyDto> relatedParty;
	
	private List<SiteRelationshipDto> siteRelationship;
	
	@JsonProperty("@type")
	private String type;

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

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public List<CalenderDto> getCalendar() {
		return calendar;
	}

	public void setCalendar(List<CalenderDto> calendar) {
		this.calendar = calendar;
	}

	public List<PlaceDto> getPlace() {
		return place;
	}

	public void setPlace(List<PlaceDto> place) {
		this.place = place;
	}

	public List<RelatedPartyDto> getRelatedParty() {
		return relatedParty;
	}

	public void setRelatedParty(List<RelatedPartyDto> relatedParty) {
		this.relatedParty = relatedParty;
	}

	public List<SiteRelationshipDto> getSiteRelationship() {
		return siteRelationship;
	}

	public void setSiteRelationship(List<SiteRelationshipDto> siteRelationship) {
		this.siteRelationship = siteRelationship;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
	
	
}

