package com.outlander.outlander.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.outlander.outlander.model.Permiso;
import com.outlander.outlander.repository.PermisoRepository;
import com.outlander.outlander.service.api.PermisoServiceApi;
import com.outlander.outlander.utils.GenericServiceImpl;

@Service
public class PermisoService extends GenericServiceImpl<Permiso, Long> implements PermisoServiceApi {

    @Autowired
    private PermisoRepository permisoRepository;
    
    @Autowired
    private GenerarSecuenciaService generarSecuenciaService;

    @Override
    public CrudRepository<Permiso, Long> getDao() {
        return permisoRepository;
    }
    
    public ResponseEntity<Permiso> createPermise(Permiso permiso) {
        Permiso nPermiso = new Permiso();
        nPermiso.setIdPermiso(generarSecuenciaService.getNextSequence(Permiso.SEQUENCE_NAME));
        nPermiso.setNombre(permiso.getNombre());
        nPermiso.setDescripcion(permiso.getDescripcion());
        Permiso createdPermise = permisoRepository.save(nPermiso);
        if (createdPermise == null) {
            return new ResponseEntity<Permiso>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Permiso>(createdPermise, HttpStatus.OK);
    }
    
    public ResponseEntity<Permiso> updatePermiso(Permiso permiso) {
        Optional<Permiso> perOpt = this.permisoRepository.findById(permiso.getIdPermiso());
        if (perOpt.isEmpty()) {
            return new ResponseEntity<Permiso>(HttpStatus.NOT_FOUND);
        }
        Permiso per = perOpt.get();
        per.setIdPermiso(permiso.getIdPermiso());
        per.setNombre(permiso.getNombre());
        per.setDescripcion(permiso.getDescripcion());
        Permiso updatedPer = this.permisoRepository.save(per);
        return new ResponseEntity<Permiso>(updatedPer, HttpStatus.OK);
    }
    
    

}
