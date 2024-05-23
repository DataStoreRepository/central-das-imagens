package com.centraldasimagens.dto;

import com.centraldasimagens.model.Foto;

public record FotoRespostaDTO(Long id, String titulo, String descricao, String foto) {
    public FotoRespostaDTO(Foto foto) {
        this(foto.getId(),foto.getTitulo(), foto.getDescricao(), foto.getImagem());
    }
}
