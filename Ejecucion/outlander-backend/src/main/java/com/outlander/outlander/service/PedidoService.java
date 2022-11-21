package com.outlander.outlander.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.outlander.outlander.model.Mesa;
import com.outlander.outlander.model.Pedido;
import com.outlander.outlander.repository.MesaRepository;
import com.outlander.outlander.repository.PedidoRepository;
import com.outlander.outlander.service.api.PedidoServiceApi;
import com.outlander.outlander.utils.GenericServiceImpl;

@Service
public class PedidoService extends GenericServiceImpl<Pedido, Long> implements PedidoServiceApi {

    @Autowired
    private PedidoRepository repository;

    @Autowired
    private MesaRepository mesaRepository;

    public ResponseEntity<Pedido> crearPedido(Pedido request) {
        Optional<Mesa> mesaOpt = this.mesaRepository.findById(request.getMesa().getIdMesa());
        if (mesaOpt.isEmpty()) {
            return new ResponseEntity<Pedido>(HttpStatus.NOT_FOUND);
        }
        Pedido pedido = new Pedido();
        pedido.setMesa(request.getMesa());
        pedido.setMeseros(request.getMeseros());
        pedido.setProductos(request.getProductos());
        pedido.setCantidades(request.getCantidades());
        pedido.setEstado(request.getEstado());
        Pedido pedidoCreate = this.repository.save(pedido);
        if (pedidoCreate == null) {
            return new ResponseEntity<Pedido>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Pedido>(pedidoCreate, HttpStatus.OK);
    }

    public ResponseEntity<Pedido> editarPedido(Pedido request) {
        Optional<Mesa> mesaOpt = this.mesaRepository.findById(request.getMesa().getIdMesa());
        if (mesaOpt.isEmpty()) {
            return new ResponseEntity<Pedido>(HttpStatus.NOT_FOUND);
        }
        Optional<Pedido> pedidoOpt = this.repository.findById(request.getIdPedido());
        if (pedidoOpt.isEmpty()) {
            return new ResponseEntity<Pedido>(HttpStatus.NOT_FOUND);
        }
        Pedido pedido = pedidoOpt.get();
        pedido.setIdPedido(request.getIdPedido());
        pedido.setMesa(request.getMesa());
        pedido.setMeseros(request.getMeseros());
        pedido.setProductos(request.getProductos());
        pedido.setCantidades(request.getCantidades());
        pedido.setEstado(request.getEstado());
        Pedido pedidoUpdate = this.repository.save(pedido);
        if (pedidoUpdate == null) {
            return new ResponseEntity<Pedido>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Pedido>(pedidoUpdate, HttpStatus.OK);
    }

    public ResponseEntity<Pedido> obtenerPedidoPorMesaActivo(Long idMesa) {
        Pedido pedido = null;
        try {
            pedido = this.repository.findByMesaActivo(idMesa, "abierto");
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<Pedido>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (pedido == null) {
            return new ResponseEntity<Pedido>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Pedido>(pedido, HttpStatus.OK);
    }
    @Override
    public CrudRepository<Pedido, Long> getDao() {
        return this.repository;
    }
}
