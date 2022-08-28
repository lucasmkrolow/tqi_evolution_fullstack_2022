package com.tqi.livraria.controller;

import com.tqi.livraria.exception.IdNotFoundException;
import com.tqi.livraria.model.Livro;
import com.tqi.livraria.service.LivroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/livro")
@CrossOrigin
public class LivroController {
    @Autowired
    private LivroService livroService;

    @PostMapping("/add")
    public String add(@RequestBody Livro livro) {
        livroService.saveLivro(livro);
        return "Novo Livro adicionado";
    }

    @GetMapping("/getAll")
    public List<Livro> getAllLivros() {
        return livroService.getAllLivros();
    }


    @GetMapping("/{id}")
    public Livro findById(@PathVariable(value = "id") Integer id) throws IdNotFoundException {
        return livroService.findById(id);
    }

}

