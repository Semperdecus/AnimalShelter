/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.animalShelter.eureka.dogGallery.controllers;

import com.animalShelter.eureka.dogGallery.entities.DogGallery;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import java.util.Arrays;
import java.util.Date;

/**
 *
 * @author teren
 */
@RestController
@RequestMapping("/")
public class DogGalleryController {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private Environment env;

    @RequestMapping("/")
    public String home() {
        return "Hello from Dog Gallery Service running at port: " + env.getProperty("local.server.port");
    }

    //@HystrixCommand(fallbackMethod = "fallback")
    @RequestMapping("/{id}")
    public DogGallery getGallery(@PathVariable final int id) {
        System.out.println("Creating Gallery Object... ");
        DogGallery gallery = new DogGallery();
        gallery.setId(id);

        // @SuppressWarnings("unchecked") // throw an exception from dog service to simulate a failure
        List<Object> dogs = restTemplate.getForObject("http://dog-service/dogs/", List.class);
        gallery.setDogs(dogs);

        return gallery;
    }

    @RequestMapping("/admin")
    public String homeAdmin() {
        return "This is the admin area of Gallery service running at port: " + env.getProperty("local.server.port");
    }

    // a fallback method to be called if failure happened
    public DogGallery fallback(int galleryId, Throwable hystrixCommand) {
        System.out.println(hystrixCommand);
        System.out.println(hystrixCommand.getMessage());
        System.out.println(galleryId);
        DogGallery fallback = new DogGallery(galleryId);
        return new DogGallery(galleryId);
    }
}
