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

import com.outlander.outlander.model.Sede;
import com.outlander.outlander.service.SedeService;

@RestController
@CrossOrigin("*")
@RequestMapping("/space/campus")
public class SedeController {

    @Autowired
    private SedeService sedeService;

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<Sede> getAll() {
        return this.sedeService.getAll();
    }

    @RequestMapping(value = "/find/{id}", method = RequestMethod.GET)
    public Sede findById(@PathVariable Long id) {
        return this.sedeService.get(id);
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<Sede> crearSede(@RequestBody Sede sede) {
        return this.sedeService.crearSede(sede);
    }

    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public ResponseEntity<Sede> actualizarSede(@RequestBody Sede sede) {
        return this.sedeService.actualizarSede(sede);
    }

    @RequestMapping(value = "/obtener-por-nombre/{nombre}", method = RequestMethod.GET)
    public ResponseEntity<Sede> obtenerPorNombre(@PathVariable String nombre) {
        return this.sedeService.obtenerPorNombre(nombre);
    }

    @RequestMapping(value = "/obtener-por-usuario/{usuario}", method = RequestMethod.GET)
    public ResponseEntity<Sede> obtenerPorUsuario(@PathVariable Long idUsuario) {
        return this.sedeService.obtenerPorUsuario(idUsuario);
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.POST)
    public ResponseEntity<Sede> deleteSede(@PathVariable Long id) {
        Sede sede = sedeService.get(id);
        if (sede != null) {
            sedeService.delete(id);
        } else {
            return new ResponseEntity<Sede>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<Sede>(sede, HttpStatus.OK);
    }

}
