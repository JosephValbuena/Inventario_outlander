package com.outlander.outlander.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.outlander.outlander.model.Usuario;
import com.outlander.outlander.repository.UsuarioRepository;
import com.outlander.outlander.service.api.UsuarioServiceApi;
import com.outlander.outlander.utils.GenericServiceImpl;

@Service
public class UsuarioService extends GenericServiceImpl<Usuario, Long> implements UsuarioServiceApi {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public CrudRepository<Usuario, Long> getDao() {
        return usuarioRepository;
    }

    public ResponseEntity<Usuario> createUsuario(Usuario usuario) {
        Usuario nUsuario = new Usuario();
        nUsuario.setNombre(usuario.getNombre());
        nUsuario.setCorreo(usuario.getCorreo());
        nUsuario.setApellido(usuario.getApellido());
        nUsuario.setRoles(usuario.getRoles());
        nUsuario.setNombreUsuario(usuario.getNombreUsuario());
        nUsuario.setContrasena(usuario.getContrasena());
        Usuario createdUser = usuarioRepository.save(nUsuario);
        if (createdUser == null) {
            return new ResponseEntity<Usuario>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Usuario>(createdUser, HttpStatus.OK);
    }

    public ResponseEntity<Usuario> updateUser(Usuario usuario) {
        Optional<Usuario> usuarioOpt = this.usuarioRepository.findById(usuario.getIdUsuario());
        if (usuarioOpt.isEmpty()) {
            return new ResponseEntity<Usuario>(HttpStatus.NOT_FOUND);
        }
        Usuario usu = usuarioOpt.get();
        usu.setIdUsuario(usuario.getIdUsuario());
        usu.setNombre(usuario.getNombre());
        usu.setCorreo(usuario.getCorreo());
        usu.setApellido(usuario.getApellido());
        usu.setRoles(usuario.getRoles());
        usu.setNombreUsuario(usuario.getNombreUsuario());
        usu.setContrasena(usuario.getContrasena());
        Usuario updatedUsu = this.usuarioRepository.save(usu);
        return new ResponseEntity<Usuario>(updatedUsu, HttpStatus.OK);
    }

    public ResponseEntity<Usuario> loginUser(String username, String password) {
        Optional<Usuario> usuario;
        try {
            usuario = this.usuarioRepository.findByNombreUsuarioAndContrasena(username, password);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<Usuario>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (usuario.isEmpty()) {
            return new ResponseEntity<Usuario>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Usuario>(usuario.get(), HttpStatus.OK);
    }
}
