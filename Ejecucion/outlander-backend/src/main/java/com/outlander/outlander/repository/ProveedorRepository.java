package com.outlander.outlander.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.outlander.outlander.model.Proveedor;

public interface ProveedorRepository extends MongoRepository<Proveedor, Long>{

}
