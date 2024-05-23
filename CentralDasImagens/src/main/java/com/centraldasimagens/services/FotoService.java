package com.centraldasimagens.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
