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

import com.outlander.outlander.model.Permiso;
import com.outlander.outlander.service.PermisoService;

@RestController
@CrossOrigin("*")
@RequestMapping("/auth/permises")
public class PermisoController {

    @Autowired
    private PermisoService permisoService;

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<Permiso> getAll() {
        return this.permisoService.getAll();
    }

    @RequestMapping(value = "/find/{id}", method = RequestMethod.GET)
    public Permiso findById(@PathVariable Long id) {
        return this.permisoService.get(id);
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<Permiso> createPermise(@RequestBody Permiso permiso) {
        return this.permisoService.crearPermiso(permiso);
    }
    
    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public ResponseEntity<Permiso> updatePermise(@RequestBody Permiso permiso) {
        return this.permisoService.updatePermiso(permiso);
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.POST)
    public ResponseEntity<Permiso> createPermise(@PathVariable Long id) {
        Permiso permiso = permisoService.get(id);
        if (permiso != null) {
            permisoService.delete(id);
        } else {
            return new ResponseEntity<Permiso>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<Permiso>(permiso, HttpStatus.OK);
    }
}
