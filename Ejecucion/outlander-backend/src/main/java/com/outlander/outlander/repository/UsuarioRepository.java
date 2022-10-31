package com.outlander.outlander.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.outlander.outlander.model.Usuario;

@Repository
public interface UsuarioRepository extends CrudRepository<Usuario, Long> {
    
    Optional<Usuario> findByIdUsuario(Long id);

    Optional<Usuario> findByNombreUsuario(String nombreUsuario);
    
    Optional<Usuario> findByNombreUsuarioAndContrasena(String nombreUsuario, String contrasena);
}
