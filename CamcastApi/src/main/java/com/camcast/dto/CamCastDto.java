package com.camcast.dto;

import lombok.Builder;
import lombok.Data;

@Builder(toBuilder=true)
@Data
public class CamCastDto {
	
	private String eventId;
	
	private String eventTime;
	
	private String eventType;
	
	private EventDto event;

	public String getEventId() {
		return eventId;
	}

	public void setEventId(String eventId) {
		this.eventId = eventId;
	}

	public String getEventTime() {
		return eventTime;
	}

	public void setEventTime(String eventTime) {
		this.eventTime = eventTime;
	}

	public String getEventType() {
		return eventType;
	}

	public void setEventType(String eventType) {
		this.eventType = eventType;
	}

	public EventDto getEvent() {
		return event;
	}

	public void setEvent(EventDto event) {
		this.event = event;
	}
	
	

}
