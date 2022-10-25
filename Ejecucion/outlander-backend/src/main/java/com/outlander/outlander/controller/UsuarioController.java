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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.outlander.outlander.model.Usuario;
import com.outlander.outlander.service.UsuarioService;

@RestController
@CrossOrigin("*")
@RequestMapping("/auth/users")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<Usuario> getAll() {
        return this.usuarioService.getAll();
    }

    @RequestMapping(value = "/find/{id}", method = RequestMethod.GET)
    public Usuario findById(@PathVariable Long id) {
        return this.usuarioService.get(id);
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<Usuario> createPermise(@RequestBody Usuario usuario) {
        return this.usuarioService.createUsuario(usuario);
    }
    
    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public ResponseEntity<Usuario> updateUser(@RequestBody Usuario usuario) {
        return this.usuarioService.updateUser(usuario);
    }
    
    @RequestMapping(value = "/delete/{id}", method = RequestMethod.POST)
    public ResponseEntity<Usuario> createPermise(@PathVariable Long id) {
        Usuario rol = usuarioService.get(id);
        if (rol != null) {
            usuarioService.delete(id);
        } else {
            return new ResponseEntity<Usuario>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<Usuario>(rol, HttpStatus.OK);
    }

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public ResponseEntity<Usuario> loginUser(@RequestParam String username, @RequestParam String password) {
        return this.usuarioService.loginUser(username, password);
    }

}
