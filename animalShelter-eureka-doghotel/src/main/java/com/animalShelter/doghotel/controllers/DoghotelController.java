/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.animalShelter.doghotel.controllers;

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
public class DoghotelController {
    
    @Autowired
    private Environment env;

    @RequestMapping("/")
    public String home() {
        // Shows the load balancer in action when multiple instances are running at once on different ports
        return env.getProperty("local.server.port");
    }
}
