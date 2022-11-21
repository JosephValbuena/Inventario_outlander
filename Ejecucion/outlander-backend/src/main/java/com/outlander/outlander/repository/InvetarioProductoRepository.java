package com.outlander.outlander.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.outlander.outlander.model.InventarioProducto;

@Repository
public interface InvetarioProductoRepository extends CrudRepository<InventarioProducto, Long> {

    @Query(value = "SELECT * FROM outlander.inventario_productos ip WHERE ip.prod_id = ?1 AND ip.sede_id = ?2", nativeQuery = true)
    List<InventarioProducto> findInventariosByProductosAndSede(Long idProducto, Long idSede);
}
