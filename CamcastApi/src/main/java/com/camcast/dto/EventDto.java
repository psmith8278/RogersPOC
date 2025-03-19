package com.camcast.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class EventDto {
	
	private GeographicSiteDto geographicSite;

	public GeographicSiteDto getGeographicSite() {
		return geographicSite;
	}

	public void setGeographicSite(GeographicSiteDto geographicSite) {
		this.geographicSite = geographicSite;
	}
	
}
