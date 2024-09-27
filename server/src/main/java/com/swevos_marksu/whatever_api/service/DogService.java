package com.swevos_marksu.whatever_api.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class DogService {

    public String getDog() {
        RestTemplate restTemplate = new RestTemplate();
        String API_URL = "https://dog.ceo/api/breeds/image/random";
        return restTemplate.getForObject(API_URL, String.class);
    }
}
