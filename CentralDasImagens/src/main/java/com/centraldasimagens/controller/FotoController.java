package com.centraldasimagens.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.centraldasimagens.model.Foto;
import com.centraldasimagens.repository.FotoRepository;
import com.centraldasimagens.dto.FotoRequestDTO;
import com.centraldasimagens.dto.FotoRespostaDTO;
import com.centraldasimagens.services.FotoService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/foto")
public class FotoController {

    @Autowired
    private FotoService fotoService;

    @Autowired
    private FotoRepository fotoRepository;

    @GetMapping
    public List<FotoRespostaDTO> listarTodasFotos() {
        return fotoService.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<FotoRespostaDTO> pegarFotoPorId(@PathVariable Long id) {
        return fotoService.getById(id);
    }

    @PostMapping
    public void salvarFoto(@RequestBody FotoRequestDTO dados) {
        fotoService.saveFoto(dados);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Foto> atualizarFoto(@RequestBody Foto foto) {
        return fotoService.updateFoto(foto);
    }
    
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarFoto(@PathVariable Long id) {
        return fotoService.deleteFoto(id);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Foto>> searchFotosByTitulo(@RequestParam String query) {
        List<Foto> fotos = fotoRepository.findByTituloContainingIgnoreCase(query);
        return ResponseEntity.ok(fotos);
    }
}
