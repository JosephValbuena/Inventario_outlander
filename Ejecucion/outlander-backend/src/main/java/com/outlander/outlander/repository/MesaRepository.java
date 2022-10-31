package com.outlander.outlander.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.outlander.outlander.model.Mesa;

@Repository
public interface MesaRepository extends CrudRepository<Mesa, Long> {

}
