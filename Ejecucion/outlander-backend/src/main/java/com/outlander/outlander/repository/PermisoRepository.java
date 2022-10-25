package com.outlander.outlander.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.outlander.outlander.model.Permiso;

public interface PermisoRepository extends MongoRepository<Permiso, Long> {

}
