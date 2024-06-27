package com.centraldasimagens.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.centraldasimagens.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
  Usuario findByEmail(String email);  
  Usuario findByName(String name);
}
