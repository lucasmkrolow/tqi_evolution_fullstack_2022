package com.tqi.livraria.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Venda {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;
    public String nomeCliente;
    public String cpfCnpjCliente;
    public int idDoLivro;
    public int qtde;
    public float valorDoLivro;
    public float valorTotal;

    public Venda() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNomeCliente() {
        return nomeCliente;
    }

    public void setNomeCliente(String nomeCliente) {
        this.nomeCliente = nomeCliente;
    }

    public String getCpfCnpjCliente() {
        return cpfCnpjCliente;
    }

    public void setCpfCnpjCliente(String cpfCnpjCliente) {
        this.cpfCnpjCliente = cpfCnpjCliente;
    }

    public int getIdDoLivro() {
        return idDoLivro;
    }

    public void setIdDoLivro(int idDoLivro) {
        this.idDoLivro = idDoLivro;
    }

    public int getQtde() {
        return qtde;
    }

    public void setQtde(int qtde) {
        this.qtde = qtde;
    }

    public float getValorDoLivro() {
        return valorDoLivro;
    }

    public void setValorDoLivro(float valorDoLivro) {
        this.valorDoLivro = valorDoLivro;
    }

    public float getValorTotal() {
        return valorTotal;
    }

    public void setValorTotal(float valorTotal) {
        this.valorTotal = valorTotal;
    }
}