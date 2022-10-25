package com.outlander.outlander.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.outlander.outlander.model.Usuario;

public interface UsuarioRepository extends MongoRepository<Usuario, Long> {
    
    Optional<Usuario> findByIdUsuario(Long id);

    Optional<Usuario> findByNombreUsuario(String nombreUsuario);
    
    Optional<Usuario> findByNombreUsuarioAndContrasena(String nombreUsuario, String contrasena);
}
