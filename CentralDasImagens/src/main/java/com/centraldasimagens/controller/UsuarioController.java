package com.centraldasimagens.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.centraldasimagens.model.Usuario;
import com.centraldasimagens.model.UsuarioRepository;
import com.centraldasimagens.model.UsuarioRequestDTO;

@RestController
@RequestMapping("/usuario")

public class UsuarioController {

    @Autowired
    private UsuarioRepository repository;

    public void saveUsuario(@RequestBody UsuarioRequestDTO dados) {

        Usuario dadosUsuario = new Usuario(dados);

        repository.save(dadosUsuario);
    }
}
