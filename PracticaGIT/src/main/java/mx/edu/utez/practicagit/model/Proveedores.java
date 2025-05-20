package mx.edu.utez.practicagit.model;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "proveedores")

public class Proveedores {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(lenght = 100)
    private String nombre;
}
