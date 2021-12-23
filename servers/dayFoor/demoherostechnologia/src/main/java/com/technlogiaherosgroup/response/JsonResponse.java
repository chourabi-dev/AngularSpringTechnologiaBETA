package com.technlogiaherosgroup.response;

public class JsonResponse {

	boolean success;

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public JsonResponse(boolean success) {
		super();
		this.success = success;
	}
	
	
	public JsonResponse() {
		super(); 
	}
	
}
