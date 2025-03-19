package com.camcast.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ValidForDto {
	
	private String endDateTime;
	
	private String startDateTime;

	public String getEndDateTime() {
		return endDateTime;
	}

	public void setEndDateTime(String endDateTime) {
		this.endDateTime = endDateTime;
	}

	public String getStartDateTime() {
		return startDateTime;
	}

	public void setStartDateTime(String startDateTime) {
		this.startDateTime = startDateTime;
	}
	
	

}
