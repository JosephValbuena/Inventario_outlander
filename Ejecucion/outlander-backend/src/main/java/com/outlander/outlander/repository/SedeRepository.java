package com.outlander.outlander.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.outlander.outlander.model.Sede;

public interface SedeRepository extends MongoRepository<Sede, Long>{

}
