package com.centraldasimagens.model;

import java.util.List;

import com.centraldasimagens.dto.UsuarioRequestDTO;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Table(name = "usuario")
@Entity(name = "usuario")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String senha;

    public Usuario(UsuarioRequestDTO dados) {
        this.senha = dados.senha();
        this.email = dados.email();
        this.name = dados.name();
    }

    public Usuario(Long id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL)
    private List<Foto> fotos;
}
