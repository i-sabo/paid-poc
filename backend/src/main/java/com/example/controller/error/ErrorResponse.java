package com.example.controller.error;

/**
 * Body for error responses from the REST API.
 */
public class ErrorResponse {

    private String error;
    private String desc;

    public ErrorResponse(String error, String desc) {
        this.error = error;
        this.desc = desc;
    }

    @SuppressWarnings("unused")
    public String getError() {
        return error;
    }

    @SuppressWarnings("unused")
    public String getDesc() {
        return desc;
    }

}
