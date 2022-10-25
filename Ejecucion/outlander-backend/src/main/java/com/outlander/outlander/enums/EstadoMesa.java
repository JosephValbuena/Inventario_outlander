package com.outlander.outlander.enums;

public enum EstadoMesa {

    ocupado("ocupado"), libre("libre");

    private String key;

    private EstadoMesa(String key) {
        this.key = key;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public static EstadoMesa findByKey(String key) {
        for (EstadoMesa v : values()) {
            if (key != null && v.getKey().toLowerCase().equals(key.toLowerCase())) {
                return v;
            }
        }
        return null;
    }
}
