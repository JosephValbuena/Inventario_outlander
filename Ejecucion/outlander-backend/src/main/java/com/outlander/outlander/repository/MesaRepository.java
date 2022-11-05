package com.outlander.outlander.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.outlander.outlander.model.Mesa;

@Repository
public interface MesaRepository extends CrudRepository<Mesa, Long> {

    @Query(value = "SELECT * FROM mesas m WHERE m.sede_id = ?1", nativeQuery = true)
    List<Mesa> obtenerMesasPorIdSede(Long idSede);
}
