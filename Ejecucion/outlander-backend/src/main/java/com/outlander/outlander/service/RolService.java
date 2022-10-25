package com.outlander.outlander.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.outlander.outlander.model.Rol;
import com.outlander.outlander.repository.RolRepository;
import com.outlander.outlander.service.api.RolServiceApi;
import com.outlander.outlander.utils.GenericServiceImpl;

@Service
public class RolService extends GenericServiceImpl<Rol, Long> implements RolServiceApi {

    @Autowired
    private RolRepository rolRepository;

    @Autowired
    private GenerarSecuenciaService generarSecuenciaService;

    @Override
    public CrudRepository<Rol, Long> getDao() {
        return this.rolRepository;
    }

    public ResponseEntity<Rol> createRol(Rol rol) {
        Rol nRol = new Rol();
        nRol.setIdRol(generarSecuenciaService.getNextSequence(Rol.SEQUENCE_NAME));
        nRol.setNombre(rol.getNombre());
        nRol.setDescripcion(rol.getDescripcion());
        nRol.setTipo(rol.getTipo());
        nRol.setPermisos(rol.getPermisos());
        Rol createdRol = rolRepository.save(nRol);
        if (createdRol == null) {
            return new ResponseEntity<Rol>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Rol>(createdRol, HttpStatus.OK);
    }
    
    public ResponseEntity<Rol> updateRol(Rol rol) {
        Optional<Rol> rolOpt = this.rolRepository.findById(rol.getIdRol());
        if (rolOpt.isEmpty()) {
            return new ResponseEntity<Rol>(HttpStatus.NOT_FOUND);
        }
        Rol ro = rolOpt.get();
        ro.setIdRol(rol.getIdRol());
        ro.setNombre(rol.getNombre());
        ro.setDescripcion(rol.getDescripcion());
        ro.setTipo(rol.getTipo());
        ro.setPermisos(rol.getPermisos());
        Rol updatedRol = this.rolRepository.save(ro);
        return new ResponseEntity<Rol>(updatedRol, HttpStatus.OK);
        
    }
}
