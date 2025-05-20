package mx.edu.utez.practicagit.model;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "proveedores")

public class Autos {
    @Id
    @GeneratedValue(strategy = GenerationType.Identity)
    private Long id;
    @Column(lenght= 50, nullable = false)
    private String marca;
    @Column(nullable = false)
    private String modelo;
    @Colum(lenght = 10, nullable = false)
    private String placa;
    @Column(lenght = 50, nullable = false)
    private String color;

}
