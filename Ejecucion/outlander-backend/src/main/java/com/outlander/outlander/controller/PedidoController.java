package com.outlander.outlander.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.outlander.outlander.model.Pedido;
import com.outlander.outlander.service.PedidoService;

@RestController
@CrossOrigin("*")
@RequestMapping("/core/pedido")
public class PedidoController {

    @Autowired
    private PedidoService service;

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<Pedido> getAll() {
        return this.service.getAll();
    }

    @RequestMapping(value = "/find/{id}", method = RequestMethod.GET)
    public Pedido findById(@PathVariable Long id) {
        return this.service.get(id);
    }
    
    @RequestMapping(value = "/findByMesa/{id}", method = RequestMethod.GET)
    public ResponseEntity<Pedido> findByMesa(@PathVariable Long id) {
        return this.service.obtenerPedidoPorMesaActivo(id);
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<Pedido> createPedido(@RequestBody Pedido pedido) {
        return this.service.crearPedido(pedido);
    }

    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public ResponseEntity<Pedido> updatePedido(@RequestBody Pedido Pedido) {
        return this.service.editarPedido(Pedido);
    }
}
