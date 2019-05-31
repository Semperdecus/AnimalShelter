/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.animalshelter.dog.controllers;

import com.animalshelter.dog.entities.Dog;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author teren
 */
@RestController
@RequestMapping("/")
public class DogController {

    @Autowired
    private Environment env;

    @RequestMapping("/")
    public String home() {
        // Shows the load balancer in action when multiple instances are running at once on different ports
        return "Hello from Dog Service running at port: " + env.getProperty("local.server.port");
    }

    @RequestMapping("/dogs")
    public List<Dog> getDogs() throws Exception {

        List<Dog> dogs = Arrays.asList(
                new Dog(1, "Sparky en Blitz", "http://schotsecollie.nl/wp-content/uploads/2015/07/schotse-collie-2.jpg",
                        "These dogs were born on the same day, that makes them twins! 1+1 GRATIS! Lekker hamsterééén. Rip Sparky 2004-2018 truly best boy.", new Date()),
                new Dog(2, "Zippo", "https://previews.123rf.com/images/artverau/artverau1707/artverau170700047/82827722-little-puppy-beagle-sitting-in-grass-bright-sunny-day-vertical-photo.jpg",
                        "Zippo is the name Richie gave to his charmander in Pokemon! It's also the name I gave to a kitten I found and sold to the neighbours. Valuable information!", new Date()),
                new Dog(3, "Bijoux", "https://image.shutterstock.com/image-photo/vertical-portrait-one-puppy-teenager-450w-461847166.jpg",
                        "Bijoux is the french word for jewels and the name of a hamster in Hamtaro! \n\n Rip my hamster - Bisous - 2008-2012", new Date()),
                new Dog(4, "Ace", "https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images-medium/labrador-puppy-with-red-ball-sergey-ryumin.jpg",
                        "I was sitting at the court playing basketball when this pupper showed up. He blew us out of the park! This could be a movie. Air bud sounds like a good title.", new Date())
        );
        
        throw new Exception("Dogs can't be fetched"); // Simulate error
        // return dogs;

    }
}
