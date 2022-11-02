package com.outlander.outlander.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.outlander.outlander.model.Producto;
import com.outlander.outlander.repository.ProductoRepository;
import com.outlander.outlander.service.api.ProductoServiceApi;
import com.outlander.outlander.utils.GenericServiceImpl;

@Service
public class ProductoService extends GenericServiceImpl<Producto, Long> implements ProductoServiceApi {

    @Autowired
    private ProductoRepository repository;

    public ResponseEntity<Producto> crearProducto(Producto request) {
        Producto producto = new Producto();
        producto.setMarca(request.getMarca());
        producto.setNombre(request.getNombre());
        Producto crearProducto = this.repository.save(producto);
        if (crearProducto == null) {
            return new ResponseEntity<Producto>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Producto>(crearProducto, HttpStatus.OK);
    }

    public ResponseEntity<Producto> actualizarProducto(Producto request) {
        Optional<Producto> productoOpt = this.repository.findById(request.getIdProducto());
        if (productoOpt.isEmpty()) {
            return new ResponseEntity<Producto>(HttpStatus.NOT_FOUND);
        }
        Producto producto = productoOpt.get();
        producto.setIdProducto(request.getIdProducto());
        producto.setMarca(request.getMarca());
        producto.setNombre(request.getNombre());
        Producto actualizarProducto = this.repository.save(producto);
        if (actualizarProducto == null) {
            return new ResponseEntity<Producto>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Producto>(actualizarProducto, HttpStatus.OK);
    }

    @Override
    public CrudRepository<Producto, Long> getDao() {
        return this.repository;
    }
}
