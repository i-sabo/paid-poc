package com.example.demobe;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @Value("${server.message}")
    private String message;

    @GetMapping("/api")
    public ResponseEntity<String> sayHello() {
        return new ResponseEntity<String>(message, HttpStatus.OK);
    }
}
