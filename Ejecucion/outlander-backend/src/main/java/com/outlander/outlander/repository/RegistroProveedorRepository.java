package com.outlander.outlander.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.outlander.outlander.model.RegistroProveedor;
import com.outlander.outlander.model.Sede;

@Repository
public interface RegistroProveedorRepository extends CrudRepository<RegistroProveedor, Long>{

    List<RegistroProveedor> findBySede(Sede sede);
}
