package com.outlander.outlander.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.outlander.outlander.model.Producto;
import com.outlander.outlander.service.ProductoService;

@RestController
@CrossOrigin("*")
@RequestMapping("/core/producto")
public class ProductoController {

    @Autowired
    private ProductoService service;
    
    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<Producto> getAll() {
        return this.service.getAll();
    }

    @RequestMapping(value = "/find/{id}", method = RequestMethod.GET)
    public Producto findById(@PathVariable Long id) {
        return this.service.get(id);
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<Producto> crearProducto(@RequestBody Producto producto) {
        return this.service.crearProducto(producto);
    }

    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public ResponseEntity<Producto> actualizarProducto(@RequestBody Producto producto) {
        return this.service.actualizarProducto(producto);
    }
}
