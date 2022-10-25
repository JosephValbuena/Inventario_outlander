package com.outlander.outlander.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.outlander.outlander.model.Sede;
import com.outlander.outlander.repository.SedeRepository;
import com.outlander.outlander.utils.GenericServiceImpl;

@Service
public class SedeService extends GenericServiceImpl<Sede, Long>{

    @Autowired
    private SedeRepository sedeRepository;
    
    @Autowired
    private GenerarSecuenciaService generarSecuenciaService;

    @Override
    public CrudRepository<Sede, Long> getDao() {
        return sedeRepository;
    }
    
    public ResponseEntity<Sede> createSede(Sede sede) {
        Sede nSede = new Sede();
        nSede.setIdSede(generarSecuenciaService.getNextSequence(Sede.SEQUENCE_NAME));
        nSede.setNombre(sede.getNombre());
        nSede.setDescripcion(sede.getDescripcion());
        nSede.setMesas(sede.getMesas());
        nSede.setUsuarios(sede.getUsuarios());
        Sede createdSede = sedeRepository.save(nSede);
        if (createdSede == null) {
            return new ResponseEntity<Sede>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Sede>(createdSede, HttpStatus.OK);
    }
    
    public ResponseEntity<Sede> updateSede(Sede sede) {
        Optional<Sede> sedeOpt = this.sedeRepository.findById(sede.getIdSede());
        if (sedeOpt.isEmpty()) {
            return new ResponseEntity<Sede>(HttpStatus.NOT_FOUND);
        }
        Sede uSede = sedeOpt.get();
        
        uSede.setIdSede(sede.getIdSede());
        uSede.setNombre(sede.getNombre());
        uSede.setDescripcion(sede.getDescripcion());
        uSede.setMesas(sede.getMesas());
        uSede.setUsuarios(sede.getUsuarios());
        Sede updateSede = sedeRepository.save(uSede);
        if (updateSede == null) {
            return new ResponseEntity<Sede>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Sede>(updateSede, HttpStatus.OK);
    }
    
}
