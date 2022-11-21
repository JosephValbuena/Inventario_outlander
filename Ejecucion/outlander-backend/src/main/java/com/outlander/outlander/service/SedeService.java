package com.outlander.outlander.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.outlander.outlander.model.Sede;
import com.outlander.outlander.model.Usuario;
import com.outlander.outlander.repository.SedeRepository;
import com.outlander.outlander.repository.UsuarioRepository;
import com.outlander.outlander.service.api.SedeServiceApi;
import com.outlander.outlander.utils.GenericServiceImpl;

@Service
public class SedeService extends GenericServiceImpl<Sede, Long> implements SedeServiceApi {

    @Autowired
    private SedeRepository sedeRepository;
    
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public CrudRepository<Sede, Long> getDao() {
        return sedeRepository;
    }

    public ResponseEntity<Sede> crearSede(Sede sede) {
        if (validarSiExiste(sede.getNombre())) {
            return new ResponseEntity<Sede>(HttpStatus.FOUND);
        }
        for (Usuario usu : sede.getUsuarios()) {
            Optional<Usuario> usuarioOpt = this.usuarioRepository.findById(usu.getIdUsuario());
            if (usuarioOpt.isEmpty()) {
                return new ResponseEntity<Sede>(HttpStatus.NOT_FOUND);
            }
        }
        Sede nSede = new Sede();
        nSede.setNombre(sede.getNombre());
        nSede.setDescripcion(sede.getDescripcion());
        nSede.setUsuarios(sede.getUsuarios());
        Sede createdSede = sedeRepository.save(nSede);
        if (createdSede == null) {
            return new ResponseEntity<Sede>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Sede>(createdSede, HttpStatus.OK);
    }

    public ResponseEntity<Sede> actualizarSede(Sede sede) {
        Optional<Sede> sedeOpt = this.sedeRepository.findById(sede.getIdSede());
        if (sedeOpt.isEmpty()) {
            return new ResponseEntity<Sede>(HttpStatus.NOT_FOUND);
        }
        for (Usuario usu : sede.getUsuarios()) {
            Optional<Usuario> usuarioOpt = this.usuarioRepository.findById(usu.getIdUsuario());
            if (usuarioOpt.isEmpty()) {
                return new ResponseEntity<Sede>(HttpStatus.NOT_FOUND);
            }
        }
        Sede uSede = sedeOpt.get();
        uSede.setIdSede(sede.getIdSede());
        uSede.setNombre(sede.getNombre());
        uSede.setDescripcion(sede.getDescripcion());
        uSede.setUsuarios(sede.getUsuarios());
        Sede updateSede = sedeRepository.save(uSede);
        if (updateSede == null) {
            return new ResponseEntity<Sede>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Sede>(updateSede, HttpStatus.OK);
    }

    public ResponseEntity<Sede> obtenerPorNombre(String nombre) {
        List<Sede> sedes = this.sedeRepository.findByNombre(nombre);
        if (sedes.isEmpty()) {
            return new ResponseEntity<Sede>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Sede>(sedes.get(0), HttpStatus.OK);
    }
    
    public ResponseEntity<Sede> obtenerPorUsuario(Long idUsuario) {
        List<Sede> allSedes = this.sedeRepository.findAll();
        if (allSedes.isEmpty()) {
            return new ResponseEntity<Sede>(HttpStatus.NOT_FOUND);
        }
        for (Sede sede : allSedes) {
            for (Usuario usuario : sede.getUsuarios()) {
                if (usuario.getIdUsuario() == idUsuario) {
                    return new ResponseEntity<Sede>(sede, HttpStatus.OK);
                }
            }
        }
        return new ResponseEntity<Sede>(HttpStatus.NOT_FOUND);
    }
    
    private boolean validarSiExiste(String nombre) {
        List<Sede> sedes = this.sedeRepository.findByNombre(nombre);
        if (sedes.isEmpty()) {
            return false;
        }
        return true;
    }
}
