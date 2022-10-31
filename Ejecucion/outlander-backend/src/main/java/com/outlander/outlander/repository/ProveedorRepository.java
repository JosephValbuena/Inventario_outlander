package com.outlander.outlander.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.outlander.outlander.model.Proveedor;

@Repository
public interface ProveedorRepository extends CrudRepository<Proveedor, Long> {

}
