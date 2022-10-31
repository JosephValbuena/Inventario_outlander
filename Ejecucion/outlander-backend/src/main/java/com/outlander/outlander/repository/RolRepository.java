package com.outlander.outlander.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.outlander.outlander.model.Rol;

@Repository
public interface RolRepository extends CrudRepository<Rol, Long>{

}
