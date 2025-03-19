package com.rogers.isp.entity;

import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "ROGERS_ISP")
public class RogersISP {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	@Column(name = "HUB_ID")
	private UUID hubId;
	@Column(name = "HUB_CODE")
	private String hubCode;
	@Column(name = "HUB_NAME")
	private String hubName;
	@Column(name = "HUB_TYPE")
	private String hubType;
	@Column(name = "PRIMARY_HUB_ID")
	private String primaryHubId;
	@Column(name = "ADDRESS1")
	private String addr1;
	@Column(name = "ADDRESS2")
	private String addr2;
	@Column(name = "CITY")
	private String city;
	@Column(name = "STATE")
	private String state;
	@Column(name = "ZIP_CODE")
	private String zipCode;
	@Column(name = "SERVICE_STATUS")
	private String serviceStatus;
	@Column(name = "LATTITUDE")
	private String lattitude;
	@Column(name = "LONGITUDE")
	private String logitude;
	@Column(name = "PARENT_BHUM_ID")
	private String parentBhumId;
	@Column(name = "STATUS")
	private String status;
	@Column(name = "MESSAGE_STATUS")
	private String messageStatus;
	@Column(name = "SOURCE")
	private String source;
	

	public UUID getHubId() {
		return hubId;
	}

	public void setHubId(UUID hubId) {
		this.hubId = hubId;
	}

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

	public String getServiceStatus() {
		return serviceStatus;
	}

	public void setServiceStatus(String serviceStatus) {
		this.serviceStatus = serviceStatus;
	}

	public String getLattitude() {
		return lattitude;
	}

	public void setLattitude(String lattitude) {
		this.lattitude = lattitude;
	}

	public String getLogitude() {
		return logitude;
	}

	public void setLogitude(String logitude) {
		this.logitude = logitude;
	}

	public String getParentBhumId() {
		return parentBhumId;
	}

	public void setParentBhumId(String parentBhumId) {
		this.parentBhumId = parentBhumId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String satus) {
		this.status = satus;
	}

	public String getMessageStatus() {
		return messageStatus;
	}

	public void setMessageStatus(String messageStatus) {
		this.messageStatus = messageStatus;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

}
