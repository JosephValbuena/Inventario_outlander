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

import com.outlander.outlander.model.Rol;
import com.outlander.outlander.service.RolService;

@RestController
@CrossOrigin("*")
@RequestMapping("/auth/roles")
public class RolController {

    @Autowired
    private RolService rolService;

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<Rol> getAll() {
        return this.rolService.getAll();
    }

    @RequestMapping(value = "/find/{id}", method = RequestMethod.GET)
    public Rol findById(@PathVariable Long id) {
        return this.rolService.get(id);
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<Rol> createPermise(@RequestBody Rol rol) {
        return this.rolService.createRol(rol);
    }

    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public ResponseEntity<Rol> updateRol(@RequestBody Rol rol) {
        return this.rolService.updateRol(rol);
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.POST)
    public ResponseEntity<Rol> createPermise(@PathVariable Long id) {
        Rol rol = rolService.get(id);
        if (rol != null) {
            rolService.delete(id);
        } else {
            return new ResponseEntity<Rol>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<Rol>(rol, HttpStatus.OK);
    }
}
