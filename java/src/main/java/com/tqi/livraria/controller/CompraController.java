package com.tqi.livraria.controller;

import com.tqi.livraria.exception.IdNotFoundException;
import com.tqi.livraria.model.Compra;
import com.tqi.livraria.model.Livro;
import com.tqi.livraria.service.CompraService;
import com.tqi.livraria.service.LivroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/compra")
@CrossOrigin
public class CompraController {

    @Autowired
    private CompraService compraService;
    private LivroService livroService;



    @PostMapping("/add")
    public String add(@RequestBody Compra compra) throws IdNotFoundException {
        compraService.saveCompra(compra);
        Integer idDoLivro = compra.getIdDoLivro();
        Integer qtdeComprada = compra.getQtde();
        Float precoCompra = compra.getValor();
        compraService.compraLivro(idDoLivro, qtdeComprada, precoCompra);
        return "Nova Compra adicionada";
    }

    @GetMapping("/getAll")
    public List<Compra> getAllCompras() {
        return compraService.getAllCompras();
    }

}
