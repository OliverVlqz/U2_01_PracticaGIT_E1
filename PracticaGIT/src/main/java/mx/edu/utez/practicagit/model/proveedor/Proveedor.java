package mx.edu.utez.practicagit.model.proveedor;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mx.edu.utez.practicagit.model.auto.Auto;
import org.springframework.data.annotation.Id;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "proveedor")

public class Proveedor {
    @jakarta.persistence.Id
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(length = 100, nullable = false)
    private String nombre;
    @Column(length = 100, nullable = false)
    private String correo;

    @OneToMany(mappedBy = "proveedor", cascade = CascadeType.ALL)
    private List<Auto> automoviles = new ArrayList<>();

    public Proveedor getProveedor() {
        return null;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public List<Auto> getAutomoviles() {
        return automoviles;
    }

    public void setAutomoviles(List<Auto> automoviles) {
        this.automoviles = automoviles;
    }
}
