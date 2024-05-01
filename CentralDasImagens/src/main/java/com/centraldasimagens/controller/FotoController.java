package com.centraldasimagens.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.centraldasimagens.model.Foto;
import com.centraldasimagens.model.FotoRepository;

@RestController
@RequestMapping("foto")
public class FotoController {

    @Autowired
    private FotoRepository repository;
    
    @GetMapping
    public List<Foto> getAll() {

        List<Foto> listaFotos = repository.findAll();

        return listaFotos;

    }
}
