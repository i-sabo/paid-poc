package com.example.demofe;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class Controller {

    @Value("${api.endpoint}")
    private String apiEndpoint;

    @GetMapping("/")
    public ResponseEntity<String> sayHello() {

        final String uri = apiEndpoint;

        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(uri, String.class);

        return new ResponseEntity<String>(String.format("Connected to: %s, message received: %1s", apiEndpoint, result), HttpStatus.OK);
    }
}
