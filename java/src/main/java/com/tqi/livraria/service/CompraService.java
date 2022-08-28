package com.tqi.livraria.service;

import com.tqi.livraria.exception.IdNotFoundException;
import com.tqi.livraria.model.Compra;
import com.tqi.livraria.model.Livro;
import com.tqi.livraria.repository.CompraRepository;
import com.tqi.livraria.repository.LivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompraService {


    @Autowired
    private CompraRepository compraRepository;
    private LivroRepository livroRepository;
    private LivroService livroService;

    public CompraService(CompraRepository compraRepository, LivroRepository livroRepository, LivroService livroService) {
        this.compraRepository = compraRepository;
        this.livroService = livroService;
        this.livroRepository = livroRepository;
    }


    public Compra saveCompra(Compra compra) {
        return compraRepository.save(compra);
    }



    public List<Compra> getAllCompras() {
        return compraRepository.findAll();
    }

    public void compraLivro (int idDoLivro, int qtde, float valor) throws IdNotFoundException {
        Livro livroUpdate = livroService.findById(idDoLivro);
        Integer estoqueAtual = livroUpdate.getEstoque();
        livroUpdate.setEstoque(estoqueAtual + qtde);
        livroUpdate.setPrecoCompra(valor);
        livroRepository.save(livroUpdate);
    }

}
