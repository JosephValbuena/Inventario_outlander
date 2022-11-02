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

import com.outlander.outlander.model.RegistroProveedor;
import com.outlander.outlander.service.RegistroProveedorService;

@RestController
@CrossOrigin("*")
@RequestMapping("/core/registro-proveedor")
public class RegistroProveedorController {

    @Autowired
    private RegistroProveedorService service;

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<RegistroProveedor> getAll() {
        return this.service.getAll();
    }

    @RequestMapping(value = "/find/{id}", method = RequestMethod.GET)
    public RegistroProveedor findById(@PathVariable Long id) {
        return this.service.get(id);
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<RegistroProveedor> crearRegistroProv(@RequestBody RegistroProveedor registroProveedor) {
        return this.service.crearRegistroProv(registroProveedor);
    }

    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public ResponseEntity<RegistroProveedor> actualizarRegistroProv(@RequestBody RegistroProveedor registroProveedor) {
        return this.service.actualizarRegistroProv(registroProveedor);
    }
}
