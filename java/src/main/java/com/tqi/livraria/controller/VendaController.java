package com.tqi.livraria.controller;

import com.tqi.livraria.exception.IdNotFoundException;
import com.tqi.livraria.model.Venda;
import com.tqi.livraria.service.VendaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/venda")
@CrossOrigin
public class VendaController {

    @Autowired
    private VendaService vendaService;

    @PostMapping("/add")
    public String add(@RequestBody Venda venda) throws IdNotFoundException {
        vendaService.saveVenda(venda);
        Integer idDoLivro = venda.getIdDoLivro();
        Integer qtdeVendida = venda.getQtde();
        Float precoVenda = venda.getValorDoLivro();
        vendaService.vendaLivro(idDoLivro, qtdeVendida, precoVenda);
        return "Nova Venda adicionada";
    }

    @GetMapping("/getAll")
    public List<Venda> getAllVendas() {
        return vendaService.getAllVendas();
    }

}
