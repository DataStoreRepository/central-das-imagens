package com.centraldasimagens.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.centraldasimagens.model.Usuario;
import com.centraldasimagens.model.UsuarioRepository;
import com.centraldasimagens.model.UsuarioRequestDTO;
import com.centraldasimagens.model.UsuarioRespostaDTO;

@RestController
@RequestMapping("/usuario")

public class UsuarioController {

    @Autowired
    private UsuarioRepository repository;

    @GetMapping
    public List<UsuarioRespostaDTO> getAll() {
        List<UsuarioRespostaDTO> listaUsuarios = repository.findAll().stream().map(UsuarioRespostaDTO::new).toList();
        
        return listaUsuarios;
    }
    
    @PostMapping
    public void saveUsuario(@RequestBody UsuarioRequestDTO dados) {

        Usuario dadosUsuario = new Usuario(dados);

        repository.save(dadosUsuario);
    }
}
