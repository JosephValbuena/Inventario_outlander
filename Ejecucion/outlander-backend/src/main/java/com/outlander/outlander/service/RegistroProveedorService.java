package com.outlander.outlander.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.outlander.outlander.model.Producto;
import com.outlander.outlander.model.Proveedor;
import com.outlander.outlander.model.RegistroProveedor;
import com.outlander.outlander.model.Sede;
import com.outlander.outlander.repository.ProductoRepository;
import com.outlander.outlander.repository.ProveedorRepository;
import com.outlander.outlander.repository.RegistroProveedorRepository;
import com.outlander.outlander.repository.SedeRepository;
import com.outlander.outlander.service.api.RegistroProveedorServiceApi;
import com.outlander.outlander.utils.GenericServiceImpl;

@Service
public class RegistroProveedorService extends GenericServiceImpl<RegistroProveedor, Long>
        implements RegistroProveedorServiceApi {

    @Autowired
    private RegistroProveedorRepository repository;

    @Autowired
    private ProductoRepository productoRepository;

    @Autowired
    private ProveedorRepository proveedorRepository;

    @Autowired
    private SedeRepository sedeRepository;

    public ResponseEntity<RegistroProveedor> crearRegistroProv(RegistroProveedor request) {

        Optional<Producto> productoOpt = this.productoRepository.findById(request.getProducto().getIdProducto());
        if (productoOpt.isEmpty()) {
            return new ResponseEntity<RegistroProveedor>(HttpStatus.NOT_FOUND);
        }
        Optional<Proveedor> proveedorOpt = this.proveedorRepository.findById(request.getProveedor().getIdProveedor());
        if (proveedorOpt.isEmpty()) {
            return new ResponseEntity<RegistroProveedor>(HttpStatus.NOT_FOUND);
        }
        Optional<Sede> sedeOpt = this.sedeRepository.findById(request.getSede().getIdSede());
        if (sedeOpt.isEmpty()) {
            return new ResponseEntity<RegistroProveedor>(HttpStatus.NOT_FOUND);
        }
        RegistroProveedor registroProveedor = new RegistroProveedor();
        registroProveedor.setProducto(request.getProducto());
        registroProveedor.setProveedor(request.getProveedor());
        registroProveedor.setCantidad(request.getCantidad());
        registroProveedor.setSede(request.getSede());
        registroProveedor.setFecha_registro(request.getFecha_registro());
        RegistroProveedor nuevoRegistro = this.repository.save(registroProveedor);
        if (nuevoRegistro == null) {
            return new ResponseEntity<RegistroProveedor>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<RegistroProveedor>(nuevoRegistro, HttpStatus.OK);
    }

    public ResponseEntity<RegistroProveedor> actualizarRegistroProv(RegistroProveedor request) {

        Optional<RegistroProveedor> registroProvOpt = this.repository.findById(request.getIdRegistro());
        if (registroProvOpt.isEmpty()) {
            return new ResponseEntity<RegistroProveedor>(HttpStatus.NOT_FOUND);
        }
        Optional<Producto> productoOpt = this.productoRepository.findById(request.getProducto().getIdProducto());
        if (productoOpt.isEmpty()) {
            return new ResponseEntity<RegistroProveedor>(HttpStatus.NOT_FOUND);
        }
        Optional<Proveedor> proveedorOpt = this.proveedorRepository.findById(request.getProveedor().getIdProveedor());
        if (proveedorOpt.isEmpty()) {
            return new ResponseEntity<RegistroProveedor>(HttpStatus.NOT_FOUND);
        }
        Optional<Sede> sedeOpt = this.sedeRepository.findById(request.getSede().getIdSede());
        if (sedeOpt.isEmpty()) {
            return new ResponseEntity<RegistroProveedor>(HttpStatus.NOT_FOUND);
        }
        RegistroProveedor registroProveedor = registroProvOpt.get();
        registroProveedor.setIdRegistro(request.getIdRegistro());
        registroProveedor.setProducto(request.getProducto());
        registroProveedor.setProveedor(request.getProveedor());
        registroProveedor.setCantidad(request.getCantidad());
        registroProveedor.setSede(request.getSede());
        registroProveedor.setFecha_registro(request.getFecha_registro());
        RegistroProveedor actualizarRegistro = this.repository.save(registroProveedor);
        if (actualizarRegistro == null) {
            return new ResponseEntity<RegistroProveedor>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<RegistroProveedor>(actualizarRegistro, HttpStatus.OK);
    }

    @Override
    public CrudRepository<RegistroProveedor, Long> getDao() {
        return this.repository;
    }
}
