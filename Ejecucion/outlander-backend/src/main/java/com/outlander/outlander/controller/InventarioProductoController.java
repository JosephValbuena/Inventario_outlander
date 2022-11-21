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

import com.outlander.outlander.model.InventarioProducto;
import com.outlander.outlander.service.InventarioProductoService;

@RestController
@CrossOrigin("*")
@RequestMapping("/core/inventario-producto")
public class InventarioProductoController {
    
    @Autowired
    private InventarioProductoService service;
    
    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<InventarioProducto> obtenerTodas() {
        return this.service.getAll();
    }
    
    @RequestMapping(value = "/find/{id}", method = RequestMethod.GET)
    public InventarioProducto obtenerUna(@PathVariable Long id) {
        return this.service.get(id);
    }
    
    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<InventarioProducto> crear(@RequestBody InventarioProducto inventarioProducto) {
        return this.service.crearInventarioProducto(inventarioProducto);
    }
    
    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public ResponseEntity<InventarioProducto> actualizar(@RequestBody InventarioProducto inventarioProducto) {
        return this.service.actualizarInventarioProducto(inventarioProducto);
    }
    
    @RequestMapping(value = "/findBySedeAndProducto/{sede}/{producto}", method = RequestMethod.PUT)
    public ResponseEntity<InventarioProducto> actualizar(@PathVariable(name = "sede") Long idSede, @PathVariable(name = "producto") Long idProducto) {
        return this.service.findInventarioBySedeAndProducto(idProducto, idSede);
    }
}
