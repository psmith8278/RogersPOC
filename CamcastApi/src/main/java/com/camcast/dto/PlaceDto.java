package com.camcast.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class PlaceDto {
	@JsonProperty("@type")
	private String type;
	
	private GeographicAddressDto geographicAddress;

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public GeographicAddressDto getGeographicAddress() {
		return geographicAddress;
	}

	public void setGeographicAddress(GeographicAddressDto geographicAddress) {
		this.geographicAddress = geographicAddress;
	}
	
	
}
