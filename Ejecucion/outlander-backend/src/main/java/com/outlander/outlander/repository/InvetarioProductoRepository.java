package com.outlander.outlander.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.outlander.outlander.model.InventarioProducto;

@Repository
public interface InvetarioProductoRepository extends CrudRepository<InventarioProducto, Long> {

}
