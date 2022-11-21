package com.outlander.outlander.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.outlander.outlander.model.InventarioProducto;
import com.outlander.outlander.model.Producto;
import com.outlander.outlander.model.Sede;
import com.outlander.outlander.repository.InvetarioProductoRepository;
import com.outlander.outlander.repository.ProductoRepository;
import com.outlander.outlander.repository.SedeRepository;
import com.outlander.outlander.service.api.InventarioProductoServiceApi;
import com.outlander.outlander.utils.GenericServiceImpl;

@Service
public class InventarioProductoService extends GenericServiceImpl<InventarioProducto, Long>
        implements InventarioProductoServiceApi {

    @Autowired
    private InvetarioProductoRepository repository;

    @Autowired
    private ProductoRepository productoRepository;

    @Autowired
    private SedeRepository sedeRepository;

    public ResponseEntity<InventarioProducto> crearInventarioProducto(InventarioProducto request) {
        List<InventarioProducto> inventarios = this.repository.findInventariosByProductosAndSede(
                request.getProducto().getIdProducto(), request.getSede().getIdSede());
        if (!inventarios.isEmpty()) {
            return new ResponseEntity<InventarioProducto>(HttpStatus.FOUND);
        }
        Optional<Producto> productoOpt = this.productoRepository.findById(request.getProducto().getIdProducto());
        if (productoOpt.isEmpty()) {
            return new ResponseEntity<InventarioProducto>(HttpStatus.NOT_FOUND);
        }
        Optional<Sede> sedeOpt = this.sedeRepository.findById(request.getSede().getIdSede());
        if (sedeOpt.isEmpty()) {
            return new ResponseEntity<InventarioProducto>(HttpStatus.NOT_FOUND);
        }
        InventarioProducto inventarioProducto = new InventarioProducto();
        inventarioProducto.setProducto(request.getProducto());
        inventarioProducto.setSede(request.getSede());
        inventarioProducto.setCantidad(request.getCantidad());
        InventarioProducto inventarioCreated = this.repository.save(inventarioProducto);
        if (inventarioCreated == null) {
            return new ResponseEntity<InventarioProducto>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<InventarioProducto>(inventarioCreated, HttpStatus.OK);

    }

    public ResponseEntity<InventarioProducto> actualizarInventarioProducto(InventarioProducto request) {
        Optional<InventarioProducto> inventarioOpt = this.repository.findById(request.getIdInventario());
        if (inventarioOpt.isEmpty()) {
            return new ResponseEntity<InventarioProducto>(HttpStatus.NOT_FOUND);
        }
        Optional<Producto> productoOpt = this.productoRepository.findById(request.getProducto().getIdProducto());
        if (productoOpt.isEmpty()) {
            return new ResponseEntity<InventarioProducto>(HttpStatus.NOT_FOUND);
        }
        Optional<Sede> sedeOpt = this.sedeRepository.findById(request.getSede().getIdSede());
        if (sedeOpt.isEmpty()) {
            return new ResponseEntity<InventarioProducto>(HttpStatus.NOT_FOUND);
        }
        InventarioProducto inventarioProducto = inventarioOpt.get();
        inventarioProducto.setIdInventario(request.getIdInventario());
        inventarioProducto.setProducto(request.getProducto());
        inventarioProducto.setSede(request.getSede());
        inventarioProducto.setCantidad(request.getCantidad());
        InventarioProducto inventarioCreated = this.repository.save(inventarioProducto);
        if (inventarioCreated == null) {
            return new ResponseEntity<InventarioProducto>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<InventarioProducto>(inventarioCreated, HttpStatus.OK);

    }

    public ResponseEntity<InventarioProducto> findInventarioBySedeAndProducto(Long idProducto, Long idSede) {
        List<InventarioProducto> inventarios = this.repository.findInventariosByProductosAndSede(idProducto, idSede);
        if (inventarios.isEmpty()) {
            return new ResponseEntity<InventarioProducto>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<InventarioProducto>(inventarios.get(0), HttpStatus.OK);
    }

    @Override
    public CrudRepository<InventarioProducto, Long> getDao() {
        return this.repository;
    }
}
