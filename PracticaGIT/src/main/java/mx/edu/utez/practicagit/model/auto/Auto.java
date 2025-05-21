package mx.edu.utez.practicagit.model.auto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mx.edu.utez.practicagit.model.proveedor.Proveedor;
import org.springframework.data.annotation.Id;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "auto")

public class Auto {
    @jakarta.persistence.Id
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(length= 50, nullable = false)
    private String marca;
    @Column(nullable = false)
    private String modelo;
    @Column(length = 10, nullable = false)
    private String placa;
    @Column(length = 50, nullable = false)
    private String color;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "proveedor_id", nullable = false)
    private Proveedor proveedor;

    public Auto() {
    }

    public Auto(Long id, String marca, String modelo, String placa, String color, Proveedor proveedor) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.placa = placa;
        this.color = color;
        this.proveedor = proveedor;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getPlaca() {
        return placa;
    }

    public void setPlaca(String placa) {
        this.placa = placa;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Proveedor getProveedor() {
        return proveedor;
    }

    public void setProveedor(Proveedor proveedor) {
        this.proveedor = proveedor;
    }
}
