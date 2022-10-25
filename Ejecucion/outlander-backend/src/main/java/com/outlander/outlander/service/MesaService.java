package com.outlander.outlander.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.outlander.outlander.model.Mesa;
import com.outlander.outlander.repository.MesaRepository;
import com.outlander.outlander.utils.GenericServiceImpl;

@Service
public class MesaService extends GenericServiceImpl<Mesa, Long> {

    @Autowired
    private MesaRepository mesaRepository;
    
    @Autowired
    private GenerarSecuenciaService generarSecuenciaService;

    @Override
    public CrudRepository<Mesa, Long> getDao() {
        return this.mesaRepository;
    }
    
    public ResponseEntity<Mesa> createMesa(Mesa mesa) {
        Mesa nMesa = new Mesa();
        nMesa.setIdMesa(generarSecuenciaService.getNextSequence(Mesa.SEQUENCE_NAME));
        nMesa.setDescripcion(mesa.getDescripcion());
        nMesa.setNumMesa(mesa.getNumMesa());
        nMesa.setEstado(mesa.getEstado());
        Mesa createdMesa = mesaRepository.save(nMesa);
        if (createdMesa == null) {
            return new ResponseEntity<Mesa>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Mesa>(createdMesa, HttpStatus.OK);
    }
    
    public ResponseEntity<Mesa> updateMesa(Mesa mesa) {
        Optional<Mesa> mesaOpt = this.mesaRepository.findById(mesa.getIdMesa());
        if (mesaOpt.isEmpty()) {
            return new ResponseEntity<Mesa>(HttpStatus.NOT_FOUND);
        }
        Mesa mesap = mesaOpt.get();
        mesap.setIdMesa(mesa.getIdMesa());
        mesap.setDescripcion(mesa.getDescripcion());
        mesap.setNumMesa(mesa.getNumMesa());
        mesap.setEstado(mesa.getEstado());
        Mesa updatedMesa = mesaRepository.save(mesap);
        if (updatedMesa == null) {
            return new ResponseEntity<Mesa>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Mesa>(updatedMesa, HttpStatus.OK);
    }
}
