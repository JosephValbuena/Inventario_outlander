package com.outlander.outlander.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.outlander.outlander.model.RegistroProveedor;

@Repository
public interface RegistroProveedorRepository extends CrudRepository<RegistroProveedor, Long>{

}
