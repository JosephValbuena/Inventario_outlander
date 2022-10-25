package com.outlander.outlander.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.outlander.outlander.model.Mesa;

public interface MesaRepository extends MongoRepository<Mesa, Long>{

}
