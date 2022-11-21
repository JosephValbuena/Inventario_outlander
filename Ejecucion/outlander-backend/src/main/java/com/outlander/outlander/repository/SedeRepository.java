package com.outlander.outlander.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.outlander.outlander.model.Sede;

@Repository
public interface SedeRepository extends CrudRepository<Sede, Long> {

    List<Sede> findByNombre(String nombre);
    
    @Query(value = "select s from Sede s")
    List<Sede> findAll();
}
