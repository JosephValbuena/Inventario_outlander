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
    @JoinTable(name = "pedidos_usuarios", 
            joinColumns = { @JoinColumn(name = "pedido_id") },
            inverseJoinColumns = {@JoinColumn(name = "usu_id") })
    private List<Usuario> meseros;
    
    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinTable(name = "pedidos_productos", 
            joinColumns = { @JoinColumn(name = "pedido_id") },
            inverseJoinColumns = {@JoinColumn(name = "prod_id") })
    private List<Producto> productos;
    
    @Column(name = "pedido_cants")
    private List<Integer> cantidades;

    @Column(name = "pedido_estado")
    private EstadoPedido estado;
}
