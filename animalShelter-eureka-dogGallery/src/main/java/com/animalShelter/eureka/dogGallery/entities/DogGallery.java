/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.animalShelter.eureka.dogGallery.entities;

import java.util.List;

/**
 *
 * @author teren
 */
public class DogGallery {

    private int id;
    private List<Object> dogs;

    public DogGallery() {
    }    
    
    public DogGallery(int galleryId) {
        this.id = galleryId;
    }
    
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public List<Object> getDogs() {
        return dogs;
    }

    public void setDogs(List<Object> dogs) {
        this.dogs = dogs;
    }
}
