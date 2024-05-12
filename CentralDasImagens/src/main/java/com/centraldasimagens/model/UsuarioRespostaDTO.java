package com.centraldasimagens.model;

public record UsuarioRespostaDTO(Long id, String name, String email, String senha) {
    public UsuarioRespostaDTO(Usuario usuario) {
        this(usuario.getId(), usuario.getName(), usuario.getEmail(), usuario.getSenha());
    }
}
