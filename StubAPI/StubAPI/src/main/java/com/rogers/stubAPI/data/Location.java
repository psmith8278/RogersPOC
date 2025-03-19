package com.rogers.stubAPI.data;

import java.util.ArrayList;

public class Location{
    public String type;
    public ArrayList<Double> coordinates;
    
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public ArrayList<Double> getCoordinates() {
		return coordinates;
	}
	public void setCoordinates(ArrayList<Double> coordinates) {
		this.coordinates = coordinates;
	}
}