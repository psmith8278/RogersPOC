package com.rogers.stubAPI.data;

import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Hub{
    public String hubCode;
    public String hubName;
    public String hubType;
    public String primaryHubId;
    public String addr1;
    public String addr2;
    public String city;
    @JsonProperty("BuhmId") 
    public String buhmId;
    public String countryCode;
    public String locality;
    public Location location;
    public String serviceStatus;
    public String state;
    public String zipCode;
    public String timezone;
    
	public String getHubCode() {
		return hubCode;
	}
	public void setHubCode(String hubCode) {
		this.hubCode = hubCode;
	}
	public String getHubName() {
		return hubName;
	}
	public void setHubName(String hubName) {
		this.hubName = hubName;
	}
	public String getHubType() {
		return hubType;
	}
	public void setHubType(String hubType) {
		this.hubType = hubType;
	}
	public String getPrimaryHubId() {
		return primaryHubId;
	}
	public void setPrimaryHubId(String primaryHubId) {
		this.primaryHubId = primaryHubId;
	}
	public String getAddr1() {
		return addr1;
	}
	public void setAddr1(String addr1) {
		this.addr1 = addr1;
	}
	public String getAddr2() {
		return addr2;
	}
	public void setAddr2(String addr2) {
		this.addr2 = addr2;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getBuhmId() {
		return buhmId;
	}
	public void setBuhmId(String buhmId) {
		this.buhmId = buhmId;
	}
	public String getCountryCode() {
		return countryCode;
	}
	public void setCountryCode(String countryCode) {
		this.countryCode = countryCode;
	}
	public String getLocality() {
		return locality;
	}
	public void setLocality(String locality) {
		this.locality = locality;
	}
	public Location getLocation() {
		return location;
	}
	public void setLocation(Location location) {
		this.location = location;
	}
	public String getServiceStatus() {
		return serviceStatus;
	}
	public void setServiceStatus(String serviceStatus) {
		this.serviceStatus = serviceStatus;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getZipCode() {
		return zipCode;
	}
	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}
	public String getTimezone() {
		return timezone;
	}
	public void setTimezone(String timezone) {
		this.timezone = timezone;
	}
}