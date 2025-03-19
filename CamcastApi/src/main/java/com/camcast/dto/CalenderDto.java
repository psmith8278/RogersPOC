package com.camcast.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class CalenderDto {
	
  private String day;
  
  private String status;
  
  private String timeZone;
  
  @JsonProperty("@type")
  private String type;

public String getDay() {
	return day;
}

public void setDay(String day) {
	this.day = day;
}

public String getStatus() {
	return status;
}

public void setStatus(String status) {
	this.status = status;
}

public String getTimeZone() {
	return timeZone;
}

public void setTimeZone(String timeZone) {
	this.timeZone = timeZone;
}

public String getType() {
	return type;
}

public void setType(String type) {
	this.type = type;
}

  
}
