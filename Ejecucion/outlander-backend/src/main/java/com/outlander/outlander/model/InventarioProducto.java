package com.outlander.outlander.model;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
public class InventarioProducto {

    @Transient
    public static final String SEQUENCE_NAME = "inventory_sequence";

    @Id
    private Long idInventario;

    private Producto producto;

    private short cantidadProducto;

    private LocalDateTime fechaIngresoProducto;

    public Long getIdInventario() {
        return idInventario;
    }

    public void setIdInventario(Long idInventario) {
        this.idInventario = idInventario;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    public short getCantidadProducto() {
        return cantidadProducto;
    }

    public void setCantidadProducto(short cantidadProducto) {
        this.cantidadProducto = cantidadProducto;
    }

    public LocalDateTime getFechaIngresoProducto() {
        return fechaIngresoProducto;
    }

    public void setFechaIngresoProducto(LocalDateTime fechaIngresoProducto) {
        this.fechaIngresoProducto = fechaIngresoProducto;
    }

    public static String getSequenceName() {
        return SEQUENCE_NAME;
    }

}
