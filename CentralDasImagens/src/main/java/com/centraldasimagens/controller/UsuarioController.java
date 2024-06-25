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
import com.centraldasimagens.services.UsuarioService;
import com.centraldasimagens.dto.UsuarioRequestDTO;
import com.centraldasimagens.dto.UsuarioRespostaDTO;


@RestController
@RequestMapping("/usuario")

@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*")
public class UsuarioController {
    @Autowired
    private UsuarioService usuarioService;
  

    @GetMapping
    public List<UsuarioRespostaDTO> listarUsuarios() {
        return usuarioService.getAll();
    }
    
    @PostMapping
    public void salvarUsuario(@RequestBody UsuarioRequestDTO dados) {
        usuarioService.saveUsuario(dados);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarUsuario(@PathVariable Long id) {
        return usuarioService.deleteUsuario(id);
    }

    @PutMapping("/id")
    public ResponseEntity<Usuario> atualizarUsuario(@RequestBody Usuario usuario){
        return usuarioService.updateUsuario(usuario);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UsuarioRespostaDTO> pegarUsuarioPorId(@PathVariable Long id) {
        return usuarioService.getById(id);
    }
}
