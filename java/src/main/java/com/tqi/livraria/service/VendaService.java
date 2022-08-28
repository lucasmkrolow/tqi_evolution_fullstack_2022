package com.tqi.livraria.service;

import com.tqi.livraria.exception.IdNotFoundException;
import com.tqi.livraria.model.Livro;
import com.tqi.livraria.model.Venda;
import com.tqi.livraria.repository.CompraRepository;
import com.tqi.livraria.repository.LivroRepository;
import com.tqi.livraria.repository.VendaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VendaService {
    @Autowired
    private VendaRepository vendaRepository;
    private LivroRepository livroRepository;
    private LivroService livroService;


    public VendaService(VendaRepository vendaRepository, LivroRepository livroRepository, LivroService livroService) {
        this.vendaRepository = vendaRepository;
        this.livroService = livroService;
        this.livroRepository = livroRepository;
    }

    public Venda saveVenda(Venda venda) {
        return vendaRepository.save(venda);
    }



    public List<Venda> getAllVendas() {
        return vendaRepository.findAll();
    }


    public void vendaLivro (int idDoLivro, int qtde, float valor) throws IdNotFoundException {
        Livro livroUpdate = livroService.findById(idDoLivro);
        Integer estoqueAtual = livroUpdate.getEstoque();
        livroUpdate.setEstoque(estoqueAtual - qtde);
        livroUpdate.setPrecoVenda(valor);
        livroRepository.save(livroUpdate);
    }
}
