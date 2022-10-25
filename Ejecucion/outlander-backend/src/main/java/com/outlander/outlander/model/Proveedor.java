package com.outlander.outlander.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

import lombok.Builder;

@Builder
public class Proveedor {

    @Transient
    public static final String SEQUENCE_NAME = "provider_sequence";

    @Id
    private Long idProveedor;

    private String nombre;

    private String descripcion;

    public Long getIdProveedor() {
        return idProveedor;
    }

    public void setIdProveedor(Long idProveedor) {
        this.idProveedor = idProveedor;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public static String getSequenceName() {
        return SEQUENCE_NAME;
    }
}
