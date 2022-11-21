package com.outlander.outlander.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.outlander.outlander.model.Pedido;

@Repository
public interface PedidoRepository extends CrudRepository<Pedido, Long>{

    @Query(value = "SELECT * FROM pedidos p WHERE p.mesa_id = ?1 AND p.pedido_estado = ?2", nativeQuery = true)
    Pedido findByMesaActivo(Long idMesa, String estado);
}
