package com.centraldasimagens.controller;

import java.util.List;
import java.util.Optional;

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
import org.springframework.web.bind.annotation.RestController;

import com.centraldasimagens.model.Foto;
import com.centraldasimagens.model.FotoRepository;
import com.centraldasimagens.model.FotoRequestDTO;
import com.centraldasimagens.model.FotoRespostaDTO;

@RestController
@RequestMapping("/foto")
public class FotoController {

    @Autowired
    private FotoRepository repository;
    
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<FotoRespostaDTO> getAll() {

        List<FotoRespostaDTO> listaFotos = repository.findAll().stream().map(FotoRespostaDTO::new).toList();

        return listaFotos;

    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/{id}")
    public ResponseEntity<FotoRespostaDTO> getById(@PathVariable Long id) {
    Optional<Foto> fotoOptional = repository.findById(id);
    
        if (fotoOptional.isPresent()) {
            FotoRespostaDTO fotoRespostaDTO = new FotoRespostaDTO(fotoOptional.get());
            return ResponseEntity.ok(fotoRespostaDTO);
        } else {
            return ResponseEntity.notFound().build();
        }
    }   

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void saveFoto(@RequestBody FotoRequestDTO dados) {

        Foto dadosFoto = new Foto(dados);

        repository.save(dadosFoto);

    }
    

    //delete e update
    //PathVariable pela URL
    //RequestBody pelo corpo
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFoto(@PathVariable Long id) {
        Optional<Foto> fotoOptional = repository.findById(id); 

        if (fotoOptional.isPresent()) {
            repository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/{id}")
    public ResponseEntity<Foto> updateFoto(@RequestBody Foto foto) {

        Optional<Foto> fotoOptional = repository.findById(foto.getId());

        if(fotoOptional.isPresent()) {
            // //PathVariable
            // foto.setId(id);
            
            //RequestBody
            repository.save(foto);

            return ResponseEntity.ok(foto);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
}
