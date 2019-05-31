/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.animalShelter.cat.controllers;

import com.google.gson.Gson;
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
public class CatController {

    @Autowired
    private Environment env;

    private int generatedRandomCats;
    private boolean allowRandomCats = true;

    @RequestMapping("/randomCat")
    public String getRandomCat() throws Exception {
        Gson g = new Gson();

        if (allowRandomCats == true) {
            generatedRandomCats++;
            return g.toJson("https://cataas.com/cat/says/Generated a whopping total of " + generatedRandomCats + " random cats!");
        } else {
            return g.toJson("https://memegenerator.net/img/instances/69140357/no-more-cat-memes.jpg");
        }
    }

    @RequestMapping("/admin/toggleRandomCat")
    public String toggleRandomCat() throws Exception {
        this.allowRandomCats = !allowRandomCats;
        Gson g = new Gson();
        return g.toJson(allowRandomCats);
    }
}
