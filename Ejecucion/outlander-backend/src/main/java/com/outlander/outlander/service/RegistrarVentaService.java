package com.outlander.outlander.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.outlander.outlander.model.Pedido;
import com.outlander.outlander.model.RegistrarVenta;
import com.outlander.outlander.model.Usuario;
import com.outlander.outlander.repository.PedidoRepository;
import com.outlander.outlander.repository.RegistrarVentaRepository;
import com.outlander.outlander.repository.UsuarioRepository;
import com.outlander.outlander.service.api.RegistrarVentaServiceApi;
import com.outlander.outlander.utils.GenericServiceImpl;

@Service
public class RegistrarVentaService extends GenericServiceImpl<RegistrarVenta, Long>
        implements RegistrarVentaServiceApi {

    @Autowired
    private RegistrarVentaRepository repository;

    @Autowired
    private PedidoRepository pedidoRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    public ResponseEntity<RegistrarVenta> crearRegistroVenta(RegistrarVenta request) {
        Optional<Pedido> pedidoOpt = this.pedidoRepository.findById(request.getPedido().getIdPedido());
        if (pedidoOpt.isEmpty()) {
            return new ResponseEntity<RegistrarVenta>(HttpStatus.NOT_FOUND);
        }
        Optional<Usuario> usuarioOpt = this.usuarioRepository.findById(request.getCajero().getIdUsuario());
        if (usuarioOpt.isEmpty()) {
            return new ResponseEntity<RegistrarVenta>(HttpStatus.NOT_FOUND);
        }
        RegistrarVenta registrarVenta = new RegistrarVenta();
        registrarVenta.setPedido(request.getPedido());
        registrarVenta.setCajero(request.getCajero());
        registrarVenta.setFecha_venta(request.getFecha_venta());
        RegistrarVenta nuevoRegistro = this.repository.save(registrarVenta);
        if (nuevoRegistro == null) {
            return new ResponseEntity<RegistrarVenta>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<RegistrarVenta>(nuevoRegistro, HttpStatus.OK);
    }

    public ResponseEntity<RegistrarVenta> actualizarRegistroVenta(RegistrarVenta request) {
        Optional<Pedido> pedidoOpt = this.pedidoRepository.findById(request.getPedido().getIdPedido());
        if (pedidoOpt.isEmpty()) {
            return new ResponseEntity<RegistrarVenta>(HttpStatus.NOT_FOUND);
        }
        Optional<Usuario> usuarioOpt = this.usuarioRepository.findById(request.getCajero().getIdUsuario());
        if (usuarioOpt.isEmpty()) {
            return new ResponseEntity<RegistrarVenta>(HttpStatus.NOT_FOUND);
        }
        Optional<RegistrarVenta> registrarVentaOpt = this.repository.findById(request.getIdVenta());
        if (registrarVentaOpt.isEmpty()) {
            return new ResponseEntity<RegistrarVenta>(HttpStatus.NOT_FOUND);
        }
        RegistrarVenta registrarVenta = registrarVentaOpt.get();
        registrarVenta.setIdVenta(request.getIdVenta());
        registrarVenta.setPedido(request.getPedido());
        registrarVenta.setCajero(request.getCajero());
        registrarVenta.setFecha_venta(request.getFecha_venta());
        RegistrarVenta actualizarRegistro = this.repository.save(registrarVenta);
        if (actualizarRegistro == null) {
            return new ResponseEntity<RegistrarVenta>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<RegistrarVenta>(actualizarRegistro, HttpStatus.OK);
    }

    @Override
    public CrudRepository<RegistrarVenta, Long> getDao() {
        return this.repository;
    }
}
