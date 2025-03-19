package com.rogers.stubAPI.data;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;


public class StubAPIResponse {
    public List<String> partner;
    public String createdBy;
    public String modifiedBy;
    public UUID hub_id;
    public Hub hub;
    
	public List<String> getPartner() {
		return partner;
	}
	public void setPartner(ArrayList<String> partner) {
		this.partner = partner;
	}
	public String getCreatedBy() {
		return createdBy;
	}
	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}
	public String getModifiedBy() {
		return modifiedBy;
	}
	public void setModifiedBy(String modifiedBy) {
		this.modifiedBy = modifiedBy;
	}
	public UUID getHub_id() {
		return hub_id;
	}
	public void setHub_id(UUID hub_id) {
		this.hub_id = hub_id;
	}
	public Hub getHub() {
		return hub;
	}
	public void setHub(Hub hub) {
		this.hub = hub;
	}
}

