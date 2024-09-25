package com.swevos_marksu.whatever_api.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class GenderService {

    public String getGender(String name) {
        RestTemplate restTemplate = new RestTemplate();
        String API_URL = "https://api.genderize.io/";
        String url = API_URL + "?name=" + name;
        return restTemplate.getForObject(url, String.class);
    }
}
