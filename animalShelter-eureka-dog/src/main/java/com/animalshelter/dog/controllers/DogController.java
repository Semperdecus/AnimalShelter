/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.animalshelter.dog.controllers;

import com.animalshelter.dog.entities.Dog;
import java.util.Arrays;
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
                new Dog(1, "Sparky en Blitz", "http://schotsecollie.nl/wp-content/uploads/2015/07/schotse-collie-2.jpg"),
                new Dog(2, "Zippo", "https://i.pinimg.com/originals/4c/14/bc/4c14bcb540dfbfebfa68fa0663c0dc29.jpg"),
                new Dog(3, "Bijoux", "https://www.yarrah.com/wp-content/uploads/2018/12/Puppy-aanschaffen-header-800x600.png"));
        return dogs;
        
        // throw new Exception("Dogs can't be fetched"); // Simulate error

    }
}
