package com.outlander.outlander.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.outlander.outlander.model.Proveedor;
import com.outlander.outlander.repository.ProveedorRepository;
import com.outlander.outlander.service.api.ProveedorServiceApi;
import com.outlander.outlander.utils.GenericServiceImpl;

@Service
public class ProveedorService extends GenericServiceImpl<Proveedor, Long> implements ProveedorServiceApi {

    @Autowired
    private ProveedorRepository proveedorRepository;

    @Override
    public CrudRepository<Proveedor, Long> getDao() {
        return this.proveedorRepository;
    }

    public ResponseEntity<Proveedor> createProveedor(Proveedor proveedor) {
        Proveedor nProveedor = new Proveedor();
        nProveedor.setNombre(proveedor.getNombre());
        nProveedor.setDescripcion(proveedor.getDescripcion());
        Proveedor createdProveedor = proveedorRepository.save(nProveedor);
        if (createdProveedor == null) {
            return new ResponseEntity<Proveedor>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Proveedor>(createdProveedor, HttpStatus.OK);
    }

}
