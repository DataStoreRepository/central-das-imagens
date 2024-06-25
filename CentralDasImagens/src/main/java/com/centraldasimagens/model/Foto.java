package com.centraldasimagens.model;

import com.centraldasimagens.dto.FotoRequestDTO;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "foto")
@Entity(name = "foto")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Foto {

    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titulo;
    private String imagem;
    private String descricao;

    public Foto(FotoRequestDTO dados) {
        this.imagem = dados.imagem();
        this.titulo = dados.titulo();
        this.descricao = dados.descricao();
    }

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;
}
