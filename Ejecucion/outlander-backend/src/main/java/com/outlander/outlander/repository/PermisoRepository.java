package com.outlander.outlander.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.outlander.outlander.model.Permiso;

@Repository
public interface PermisoRepository  extends CrudRepository<Permiso, Long>{

}
