package com.outlander.outlander.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.outlander.outlander.enums.EstadoPedido;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "pedidos")
public class Pedido {

    @Id
    @Column(name = "pedido_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPedido;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "mesa_id")
    private Mesa mesa;

    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinTable(name = "pedidos_usuarios", joinColumns = { @JoinColumn(name = "pedido_id") }, inverseJoinColumns = {
            @JoinColumn(name = "usu_id") })
    private List<Usuario> meseros;

    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinTable(name = "pedidos_productos", joinColumns = { @JoinColumn(name = "pedido_id") }, inverseJoinColumns = {
            @JoinColumn(name = "prod_id") })
    private List<Producto> productos;

    @Column(name = "pedido_cants")
    private Integer[] cantidades;

    @Column(name = "pedido_estado")
    private EstadoPedido estado;

    public Long getIdPedido() {
        return idPedido;
    }

    public void setIdPedido(Long idPedido) {
        this.idPedido = idPedido;
    }

    public Mesa getMesa() {
        return mesa;
    }

    public void setMesa(Mesa mesa) {
        this.mesa = mesa;
    }

    public List<Usuario> getMeseros() {
        return meseros;
    }

    public void setMeseros(List<Usuario> meseros) {
        this.meseros = meseros;
    }

    public List<Producto> getProductos() {
        return productos;
    }

    public void setProductos(List<Producto> productos) {
        this.productos = productos;
    }

    public Integer[] getCantidades() {
        return cantidades;
    }

    public void setCantidades(Integer[] cantidades) {
        this.cantidades = cantidades;
    }

    public EstadoPedido getEstado() {
        return estado;
    }

    public void setEstado(EstadoPedido estado) {
        this.estado = estado;
    }
}
