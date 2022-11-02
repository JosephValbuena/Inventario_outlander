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

import com.outlander.outlander.model.RegistrarVenta;
import com.outlander.outlander.service.RegistrarVentaService;

@RestController
@CrossOrigin("*")
@RequestMapping("/core/registrar-venta")
public class RegistrarVentaController {

    @Autowired
    private RegistrarVentaService service;
    
    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<RegistrarVenta> getAll() {
        return this.service.getAll();
    }

    @RequestMapping(value = "/find/{id}", method = RequestMethod.GET)
    public RegistrarVenta findById(@PathVariable Long id) {
        return this.service.get(id);
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<RegistrarVenta> crearRegistroVenta(@RequestBody RegistrarVenta registrarVenta) {
        return this.service.crearRegistroVenta(registrarVenta);
    }

    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public ResponseEntity<RegistrarVenta> actualizarRegistroVenta(@RequestBody RegistrarVenta registrarVenta) {
        return this.service.actualizarRegistroVenta(registrarVenta);
    }
}
