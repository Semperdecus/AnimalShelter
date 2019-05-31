/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.animalshelter.dog.entities;

import java.util.Date;

/**
 *
 * @author teren
 */
public class Dog {

    private int id;
    private String name;
    private String url;
    private String description;
    private Date birthday;

    public Dog(int id, String name, String url, String description, Date birthday) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.description = description;
        this.birthday = birthday;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

}
