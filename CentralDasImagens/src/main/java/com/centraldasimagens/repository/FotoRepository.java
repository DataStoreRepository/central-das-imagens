package com.centraldasimagens.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.centraldasimagens.model.Foto;

public interface FotoRepository extends JpaRepository<Foto, Long>{
    List<Foto> findByTituloContainingIgnoreCase(String titulo);
}
