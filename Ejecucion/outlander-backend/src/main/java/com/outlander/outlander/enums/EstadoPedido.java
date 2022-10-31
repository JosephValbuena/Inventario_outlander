package com.outlander.outlander.enums;

public enum EstadoPedido {

    abierto("abierto"), cerrado("cerrado");

    private String key;

    private EstadoPedido(String key) {
        this.key = key;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public static EstadoPedido findByKey(String key) {
        for (EstadoPedido v : values()) {
            if (key != null && v.getKey().toLowerCase().equals(key.toLowerCase())) {
                return v;
            }
        }
        return null;
    }
}
