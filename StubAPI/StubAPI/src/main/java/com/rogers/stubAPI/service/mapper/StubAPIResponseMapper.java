package com.rogers.stubAPI.service.mapper;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.rogers.stubAPI.data.Hub;
import com.rogers.stubAPI.data.Location;
import com.rogers.stubAPI.data.StubAPIResponse;
import com.rogers.stubAPI.entity.RogersHub;

@Component
public class StubAPIResponseMapper {

	public StubAPIResponse mapStubAPIResponse(RogersHub rogersHub) {
		StubAPIResponse response = new StubAPIResponse();
		ArrayList<String> partners = new ArrayList<String>();
		partners.add("comcast");
		partners.add("rogers");
		response.setPartner(partners);
		
		response.setCreatedBy("CreatedBy");
		response.setModifiedBy("ModifiedBy");
		response.setHub_id(rogersHub.getHubId());
		
		Hub hub = new Hub();
		hub.setHubCode(rogersHub.getHubCode());
		hub.setHubName(rogersHub.getHubName());
		hub.setHubType(rogersHub.getHubType());
		hub.setPrimaryHubId(rogersHub.getPrimaryHubId());
		hub.setAddr1(rogersHub.getAddr1());
		hub.setAddr2(rogersHub.getAddr2());
		hub.setCity(rogersHub.getCity());
		hub.setBuhmId(rogersHub.getParentBhumId());
		hub.setCountryCode("CAN");
		hub.setLocality("Specific information for hubsite");
		
		Location location = new Location();
		location.setType("Point");
		
		List<Double> coordinates = new ArrayList<>();
		coordinates.add(-84.16322687);
		coordinates.add(33.88408157);
		
		hub.setLocation(location);
		hub.setServiceStatus(rogersHub.getServiceStatus());
		hub.setState(rogersHub.getState());
		hub.setZipCode(rogersHub.getZipCode());
		hub.setTimezone("");
		response.setHub(hub);
		
		return response;
	}

}
