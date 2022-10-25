package com.outlander.outlander.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.outlander.outlander.model.Proveedor;
import com.outlander.outlander.service.ProveedorService;

@RestController
@CrossOrigin("*")
@RequestMapping("/core/providers")
public class ProveedorController {

    @Autowired
    private ProveedorService proveedorService;
    
    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<Proveedor> getAll() {
        return this.proveedorService.getAll();
    }

    @RequestMapping(value = "/find/{id}", method = RequestMethod.GET)
    public Proveedor findById(@PathVariable Long id) {
        return this.proveedorService.get(id);
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<Proveedor> createProveedor(@RequestBody Proveedor proveedor) {
        return this.proveedorService.createProveedor(proveedor);
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.POST)
    public ResponseEntity<Proveedor> deleteProveedor(@PathVariable Long id) {
        Proveedor proveedor = proveedorService.get(id);
        if (proveedor != null) {
            proveedorService.delete(id);
        } else {
            return new ResponseEntity<Proveedor>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<Proveedor>(proveedor, HttpStatus.OK);
    }
    
}
