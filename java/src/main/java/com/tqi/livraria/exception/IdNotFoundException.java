package com.tqi.livraria.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND)
public class IdNotFoundException extends Exception {

    public IdNotFoundException(Integer id){
        super("Item not found with Id: " + id);
    }
}