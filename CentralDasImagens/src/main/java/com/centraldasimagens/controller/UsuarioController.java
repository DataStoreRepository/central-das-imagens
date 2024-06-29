package com.centraldasimagens.controller;

import java.util.List;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.centraldasimagens.model.LoginRequest;
import com.centraldasimagens.model.Usuario;
import com.centraldasimagens.services.UsuarioService;
import com.centraldasimagens.dto.UsuarioRequestDTO;
import com.centraldasimagens.dto.UsuarioRespostaDTO;


@RestController
@RequestMapping("/usuario")

@CrossOrigin(origins = "*", allowedHeaders = "*")
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

    @PutMapping("/{id}")
    public ResponseEntity<Usuario> atualizarUsuario(@RequestBody Usuario usuario){
        return usuarioService.updateUsuario(usuario);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UsuarioRespostaDTO> pegarUsuarioPorId(@PathVariable Long id) {
        return usuarioService.getById(id);
    }

    @GetMapping("/login/{email}")
    public ResponseEntity<Usuario> pegarUsuarioPorEmail(@PathVariable String email) {
        return usuarioService.getByEmail(email);
    }

    @PostMapping("/login")
    public ResponseEntity<Usuario> login(@RequestBody LoginRequest loginRequest) {
        return usuarioService.login(loginRequest);
    }

    @GetMapping("/check")
    public ResponseEntity<?> checkExistence(@RequestParam String email, @RequestParam String name) {
        boolean emailExists = usuarioService.existsByEmail(email);
        boolean nameExists = usuarioService.existsByName(name);
        if (emailExists || nameExists) {
            return ResponseEntity.ok().body("{\"exists\": true}");
        } else {
            return ResponseEntity.ok().body("{\"exists\": false}");
        }
    }

}
