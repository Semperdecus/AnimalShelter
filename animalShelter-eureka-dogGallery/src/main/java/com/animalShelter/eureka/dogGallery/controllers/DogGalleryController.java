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
        // This is useful for debugging
        // When having multiple instance of gallery service running at different ports.
        // We load balance among them, and display which instance received the request.
        return "Hello from Dog Gallery Service running at port: " + env.getProperty("local.server.port");
    }

    @HystrixCommand(fallbackMethod = "fallback")
    @RequestMapping("/{id}")
    public DogGallery getGallery(@PathVariable final int id) {
        System.out.println("Creating Gallery Object... ");
        // create gallery object
        DogGallery gallery = new DogGallery();
        gallery.setId(id);

        // get list of available images 
        @SuppressWarnings("unchecked") // throw an exception from image service to simulate a failure
        List<Object> dogs = restTemplate.getForObject("http://dog-service/dogs/", List.class);
        gallery.setImages(dogs);

        return gallery;
    }

    // -------- Admin Area --------
    // This method should only be accessed by users with role of 'admin'
    // We'll add the logic of role based auth later
    @RequestMapping("/admin")
    public String homeAdmin() {
        return "This is the admin area of Gallery service running at port: " + env.getProperty("local.server.port");
    }

    // a fallback method to be called if failure happened
    public DogGallery fallback(int galleryId, Throwable hystrixCommand) {
        return new DogGallery(galleryId);
    }
}
