package com.outlander.outlander.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "registro_ventas")
public class RegistrarVenta {

    @Id
    @Column(name = "registro_venta_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idVenta;
    
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "Pedido_id")
    private Pedido pedido;
    
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "usuario_id")
    private Usuario cajero;

    @Column(name = "registro_venta_fecha")
    private LocalDateTime fecha_venta;
}
