package com.rogers.mapper;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.camcast.dto.CamCastDto;
import com.rogers.entity.RogersHub;

@Component
public class CamCastMapper {
	private static final Logger logger = LoggerFactory.getLogger(CamCastMapper.class);
	
	@Autowired
	private RogersHub roggerHub;

	/*
	 * HUB_ID Hub Code Hub Name SERVICE_STATUS
	 */
	public String validator(CamCastDto camcastDto) {
		logger.info("Inside validatior");
		String status = null;
		if (camcastDto.getEvent().getGeographicSite().getId() == null
				|| camcastDto.getEvent().getGeographicSite().getId().isEmpty()) {
			status = "Hub Id field is mandatory";
			logger.info("Hub Id field is mandatory");
		}
		if (camcastDto.getEvent().getGeographicSite().getCode() == null
				|| camcastDto.getEvent().getGeographicSite().getCode().isEmpty()) {
			status = "Hub Code field is mandatory";
			logger.info("Hub code field is mandatory");
		}
		if (camcastDto.getEvent().getGeographicSite().getName() == null
				|| camcastDto.getEvent().getGeographicSite().getName().isEmpty()) {
			status = "Hub Name field is mandatory";
			logger.info("Hub Name field is mandatory");
		}
		return status;
	}

	public RogersHub camcastMapper(CamCastDto camcastDto) {
		String status = validator(camcastDto);
		if (status.isEmpty()) {
			logger.info("Performing mapping operation");
			roggerHub.setAddr1(
					camcastDto.getEvent().getGeographicSite().getPlace().get(0).getGeographicAddress().getStreetNr());
			roggerHub.setHubId(Long.valueOf(camcastDto.getEvent().getGeographicSite().getId()));
			roggerHub.setHubCode(Integer.parseInt(camcastDto.getEvent().getGeographicSite().getCode()));
			roggerHub.setHubName(camcastDto.getEvent().getGeographicSite().getName());
			roggerHub.setHubType(
					camcastDto.getEvent().getGeographicSite().getSiteRelationship().get(0).getRelationshipType());
			roggerHub.setPrimaryHubId(camcastDto.getEvent().getGeographicSite().getSiteRelationship().get(0).getId());
			roggerHub.setAddr2(
					camcastDto.getEvent().getGeographicSite().getPlace().get(0).getGeographicAddress().getStreetName());
			roggerHub.setCity(
					camcastDto.getEvent().getGeographicSite().getPlace().get(0).getGeographicAddress().getCity());
			roggerHub.setState(camcastDto.getEvent().getGeographicSite().getPlace().get(0).getGeographicAddress()
					.getStateOrProvince());
			roggerHub.setZipCode(
					camcastDto.getEvent().getGeographicSite().getPlace().get(0).getGeographicAddress().getPostcode());
			roggerHub.setServiceStatus(camcastDto.getEvent().getGeographicSite().getStatus());
			roggerHub.setLattitude(
					camcastDto.getEvent().getGeographicSite().getPlace().get(0).getGeographicAddress().getLatitude());
			roggerHub.setLogitude(
					camcastDto.getEvent().getGeographicSite().getPlace().get(0).getGeographicAddress().getLongitude());
			roggerHub.setParentBhumId(camcastDto.getEvent().getGeographicSite().getRelatedParty().get(0).getId());
			roggerHub.setPartner(camcastDto.getEvent().getGeographicSite().getRelatedParty().get(0).getName());
			roggerHub.setTimezone(camcastDto.getEvent().getGeographicSite().getCalendar().get(0).getTimeZone());
			roggerHub.setLocality(
					camcastDto.getEvent().getGeographicSite().getPlace().get(0).getGeographicAddress().getLocality());
			roggerHub.setCountryCode(
					camcastDto.getEvent().getGeographicSite().getPlace().get(0).getGeographicAddress().getCountry());
			logger.info("Mapping operation completed");
		}else {
			logger.info("validation failed");
			roggerHub.setSatus(status);
		}
		return roggerHub;
	}
}
