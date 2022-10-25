package com.outlander.outlander.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.outlander.outlander.model.Rol;

public interface RolRepository extends MongoRepository<Rol, Long>{

}
