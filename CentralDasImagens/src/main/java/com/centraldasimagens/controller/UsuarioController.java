package com.centraldasimagens.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.centraldasimagens.model.Foto;
import com.centraldasimagens.model.Usuario;
import com.centraldasimagens.repository.UsuarioRepository;
import com.centraldasimagens.dto.UsuarioRequestDTO;
import com.centraldasimagens.dto.UsuarioRespostaDTO;


@RestController
@RequestMapping("/usuario")


public class UsuarioController {

    @Autowired
    private UsuarioRepository repository;

    @GetMapping
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public List<UsuarioRespostaDTO> getAll() {
        List<UsuarioRespostaDTO> listaUsuarios = repository.findAll().stream().map(UsuarioRespostaDTO::new).toList();
        
        return listaUsuarios;
    }
    
    @PostMapping
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public void saveUsuario(@RequestBody UsuarioRequestDTO dados) {

        Usuario dadosUsuario = new Usuario(dados);
        if(dadosUsuario.getFotos() != null) {
            for(Foto foto : dadosUsuario.getFotos()) {
                foto.setUsuario(dadosUsuario);
            }
        }

        repository.save(dadosUsuario);
    }

    @DeleteMapping("/{id}")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public ResponseEntity<Void> deleteUsuario(@PathVariable Long id) {
        Optional<Usuario> usuarioOptional = repository.findById(id);

        if(usuarioOptional.isPresent()) {
            repository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/id")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public ResponseEntity<Usuario> updateUsuario(@RequestBody Usuario usuario) {
        Optional<Usuario> usuarioOptional = repository.findById(usuario.getId());
        
        if(usuarioOptional.isPresent()) {
            repository.save(usuario);
            return ResponseEntity.ok(usuario);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
