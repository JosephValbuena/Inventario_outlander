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

import com.outlander.outlander.model.Mesa;
import com.outlander.outlander.service.MesaService;

@RestController
@CrossOrigin("*")
@RequestMapping("/space/tables")
public class MesaController {

    @Autowired
    private MesaService mesaService;
    
    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<Mesa> getAll() {
        return this.mesaService.getAll();
    }
    
    @RequestMapping(value = "/find/{id}", method = RequestMethod.GET)
    public Mesa findById(@PathVariable Long id) {
        return this.mesaService.get(id);
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<Mesa> createMesa(@RequestBody Mesa mesa) {
        return this.mesaService.crearMesa(mesa);
    }
    
    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public ResponseEntity<Mesa> updateMesa(@RequestBody Mesa mesa) {
        return this.mesaService.actualizarMesa(mesa);
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.POST)
    public ResponseEntity<Mesa> deleteMesa(@PathVariable Long id) {
        Mesa mesa = mesaService.get(id);
        if (mesa != null) {
            mesaService.delete(id);
        } else {
            return new ResponseEntity<Mesa>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<Mesa>(mesa, HttpStatus.OK);
    }
}
