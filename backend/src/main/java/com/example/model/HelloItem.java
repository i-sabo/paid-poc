package com.example.model;

/**
 * A simple model object.
 */
public class HelloItem {

    private final String id;
    private final String name;

    public HelloItem(String id, String name) {
        this.id = id;
        this.name = name;
    }

    @SuppressWarnings("unused")
    public String getName() {
        return name;
    }

    @SuppressWarnings("unused")
    public String getId() {
        return id;
    }

}
