package com.centraldasimagens.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.centraldasimagens.model.Foto;

public interface FotoRepository extends JpaRepository<Foto, Long>{
    
}
