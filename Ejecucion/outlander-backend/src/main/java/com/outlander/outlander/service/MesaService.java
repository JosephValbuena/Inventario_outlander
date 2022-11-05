package com.outlander.outlander.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.outlander.outlander.model.Mesa;
import com.outlander.outlander.model.Sede;
import com.outlander.outlander.repository.MesaRepository;
import com.outlander.outlander.repository.SedeRepository;
import com.outlander.outlander.service.api.MesaServiceApi;
import com.outlander.outlander.utils.GenericServiceImpl;

@Service
public class MesaService extends GenericServiceImpl<Mesa, Long> implements MesaServiceApi {

    @Autowired
    private MesaRepository mesaRepository;

    @Autowired
    private SedeRepository sedeRepository;

    @Override
    public CrudRepository<Mesa, Long> getDao() {
        return this.mesaRepository;
    }

    public ResponseEntity<Mesa> crearMesa(Mesa mesa) {
        Mesa nMesa = new Mesa();
        Optional<Sede> sedeOpt = this.sedeRepository.findById(mesa.getSede().getIdSede());
        if (sedeOpt.isEmpty()) {
            return new ResponseEntity<Mesa>(HttpStatus.NOT_FOUND);
        }
        nMesa.setDescripcion(mesa.getDescripcion());
        nMesa.setNumMesa(mesa.getNumMesa());
        nMesa.setSede(sedeOpt.get());
        Mesa createdMesa = mesaRepository.save(nMesa);
        if (createdMesa == null) {
            return new ResponseEntity<Mesa>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Mesa>(createdMesa, HttpStatus.OK);
    }

    public ResponseEntity<Mesa> actualizarMesa(Mesa mesa) {
        Optional<Mesa> mesaOpt = this.mesaRepository.findById(mesa.getIdMesa());
        if (mesaOpt.isEmpty()) {
            return new ResponseEntity<Mesa>(HttpStatus.NOT_FOUND);
        }
        Optional<Sede> sedeOpt = this.sedeRepository.findById(mesa.getSede().getIdSede());
        if (sedeOpt.isEmpty()) {
            return new ResponseEntity<Mesa>(HttpStatus.NOT_FOUND);
        }
        Mesa mesaUpd = mesaOpt.get();
        mesaUpd.setIdMesa(mesa.getIdMesa());
        mesaUpd.setDescripcion(mesa.getDescripcion());
        mesaUpd.setNumMesa(mesa.getNumMesa());
        mesaUpd.setSede(sedeOpt.get());
        Mesa updatedMesa = mesaRepository.save(mesaUpd);
        if (updatedMesa == null) {
            return new ResponseEntity<Mesa>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Mesa>(updatedMesa, HttpStatus.OK);
    }
    
    public ResponseEntity<List<Mesa>> obtenerMesasPorSede(Long idSede) {
        List<Mesa> mesas = null;
        try {
            mesas = this.mesaRepository.obtenerMesasPorIdSede(idSede);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<List<Mesa>>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (mesas.size() == 0) {
            return new ResponseEntity<List<Mesa>>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<List<Mesa>>(mesas, HttpStatus.OK);
    }
}
