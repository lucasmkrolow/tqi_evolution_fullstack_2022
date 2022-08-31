package com.tqi.livraria.service;

import com.tqi.livraria.exception.IdNotFoundException;
import com.tqi.livraria.model.Livro;
import com.tqi.livraria.repository.LivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class LivroService {


    @Autowired
    private LivroRepository livroRepository;


    public Livro saveLivro(Livro livro) {
        return livroRepository.save(livro);
    }

    public List<Livro> getAllLivros() {
        return livroRepository.findAll();
    }

@Transactional
    public Livro findById(int id) throws IdNotFoundException {
        return livroRepository.findById(id).orElseThrow(() -> new IdNotFoundException(id));
    }


}
