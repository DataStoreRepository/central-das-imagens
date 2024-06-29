package com.centraldasimagens.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.centraldasimagens.dto.UsuarioRequestDTO;
import com.centraldasimagens.dto.UsuarioRespostaDTO;
import com.centraldasimagens.model.Foto;
import com.centraldasimagens.model.LoginRequest;
import com.centraldasimagens.model.Usuario;
import com.centraldasimagens.repository.UsuarioRepository;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository repository;
    
    public List<UsuarioRespostaDTO> getAll() {
        List<UsuarioRespostaDTO> listaUsuarios = repository.findAll().stream().map(UsuarioRespostaDTO::new).toList();
        
        return listaUsuarios;
    }

    public void saveUsuario(@RequestBody UsuarioRequestDTO dados) {

        Usuario dadosUsuario = new Usuario(dados);
        if(dadosUsuario.getFotos() != null) {
            for(Foto foto : dadosUsuario.getFotos()) {
                foto.setUsuario(dadosUsuario);
            }
        }

        repository.save(dadosUsuario);
    }

    public ResponseEntity<Void> deleteUsuario(@PathVariable Long id) {
        Optional<Usuario> usuarioOptional = repository.findById(id);

        if(usuarioOptional.isPresent()) {
            repository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    public ResponseEntity<Usuario> updateUsuario(@RequestBody Usuario usuario) {
        Optional<Usuario> usuarioOptional = repository.findById(usuario.getId());
        
        if(usuarioOptional.isPresent()) {
            repository.save(usuario);
            return ResponseEntity.ok(usuario);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    public ResponseEntity<UsuarioRespostaDTO> getById(@PathVariable Long id) {
        Optional<Usuario> usuarioOptional = repository.findById(id);

        if (usuarioOptional.isPresent()) {
            UsuarioRespostaDTO usuarioRespostaDTO = new UsuarioRespostaDTO(usuarioOptional.get());
            return ResponseEntity.ok(usuarioRespostaDTO);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    public ResponseEntity<Usuario> getByEmail(String email) {
    Usuario existingUser = repository.findByEmail(email);
        if (existingUser != null) {
            return ResponseEntity.ok(existingUser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    public ResponseEntity<Usuario> login(@RequestBody LoginRequest loginRequest) {
        Usuario existingUser = repository.findByEmail(loginRequest.getEmail());
        if (existingUser != null && existingUser.getSenha().equals(loginRequest.getSenha())) {
            return ResponseEntity.ok(existingUser);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    public boolean existsByEmail(String email) {
        return repository.findByEmail(email) != null;
    }

    public boolean existsByName(String name) {
        return repository.findByName(name) != null;
    }

    public Usuario save(Usuario usuario) {
        return repository.save(usuario);
    }
}
