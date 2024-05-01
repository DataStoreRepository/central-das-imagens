package com.centraldasimagens.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.centraldasimagens.model.FotoRepository;
import com.centraldasimagens.model.FotoRespostaDTO;

@RestController
@RequestMapping("/foto")
public class FotoController {

    @Autowired
    private FotoRepository repository;
    
    @GetMapping
    public List<FotoRespostaDTO> getAll() {

        List<FotoRespostaDTO> listaFotos = repository.findAll().stream().map(FotoRespostaDTO::new).toList();

        return listaFotos;

    }
}
