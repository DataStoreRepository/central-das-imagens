package com.centraldasimagens.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.centraldasimagens.dto.FotoRequestDTO;
import com.centraldasimagens.dto.FotoRespostaDTO;
import com.centraldasimagens.model.Foto;
import com.centraldasimagens.repository.FotoRepository;
import com.centraldasimagens.model.Usuario;
import com.centraldasimagens.repository.UsuarioRepository;

import jakarta.transaction.Transactional;

@Service
public class FotoService {

    @Autowired
    private UsuarioRepository userRepository;

    @Autowired
    private FotoRepository photoRepository;

    @Transactional
    public void savePhotoWithUser(Foto photo, Usuario user) {
        Usuario existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser != null) {
            existingUser.setName(user.getName());
            existingUser.setSenha(user.getSenha());
            user = existingUser;
        } else {
            user = userRepository.save(user);
        }
        photo.setUsuario(user);
        photoRepository.save(photo);
    }

    public List<FotoRespostaDTO> getAll() {
        List<FotoRespostaDTO> listaFotos = photoRepository.findAll().stream().map(FotoRespostaDTO::new).toList();

        return listaFotos;
    }

    public ResponseEntity<FotoRespostaDTO> getById(@PathVariable Long id) {
        Optional<Foto> fotoOptional = photoRepository.findById(id);

        if (fotoOptional.isPresent()) {
            FotoRespostaDTO fotoRespostaDTO = new FotoRespostaDTO(fotoOptional.get());
            return ResponseEntity.ok(fotoRespostaDTO);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    public void saveFoto(@RequestBody FotoRequestDTO dados) {

        Usuario usuario = new Usuario();
        usuario.setEmail(dados.usuario().email());
        usuario.setName(dados.usuario().name());
        usuario.setSenha(dados.usuario().senha());

        Foto foto = new Foto();
        foto.setImagem(dados.imagem());
        foto.setDescricao(dados.descricao());
        foto.setTitulo(dados.titulo());

        savePhotoWithUser(foto, usuario);
    }

    public ResponseEntity<Foto> updateFoto(@RequestBody Foto foto) {

        Optional<Foto> fotoOptional = photoRepository.findById(foto.getId());
        Usuario usuario = new Usuario();
        usuario.setEmail(foto.getUsuario().getEmail());
        usuario.setName(foto.getUsuario().getName());
        usuario.setSenha(foto.getUsuario().getSenha());

        if (fotoOptional.isPresent()) {
           savePhotoWithUser(foto, usuario);
            return ResponseEntity.ok(foto);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    public ResponseEntity<Void> deleteFoto(@PathVariable Long id) {
        Optional<Foto> fotoOptional = photoRepository.findById(id);

        if (fotoOptional.isPresent()) {
            photoRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

