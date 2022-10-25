package com.outlander.outlander.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

import com.outlander.outlander.enums.EstadoMesa;

import lombok.Builder;

@Builder
public class Mesa {

    @Transient
    public static final String SEQUENCE_NAME = "table_sequence";

    @Id
    private Long idMesa;

    private String descripcion;

    private Byte numMesa;

    private EstadoMesa estado;

    public Long getIdMesa() {
        return idMesa;
    }

    public void setIdMesa(Long idMesa) {
        this.idMesa = idMesa;
    }

    public Byte getNumMesa() {
        return numMesa;
    }

    public void setNumMesa(Byte numMesa) {
        this.numMesa = numMesa;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public EstadoMesa getEstado() {
        return estado;
    }

    public void setEstado(EstadoMesa estado) {
        this.estado = estado;
    }

    public static String getSequenceName() {
        return SEQUENCE_NAME;
    }

}
