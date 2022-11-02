package com.outlander.outlander.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.outlander.outlander.model.RegistrarVenta;

@Repository
public interface RegistrarVentaRepository extends CrudRepository<RegistrarVenta, Long>{

}
