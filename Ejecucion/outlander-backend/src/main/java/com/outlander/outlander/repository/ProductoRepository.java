package com.outlander.outlander.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.outlander.outlander.model.Producto;

@Repository
public interface ProductoRepository extends CrudRepository<Producto, Long>{

}
