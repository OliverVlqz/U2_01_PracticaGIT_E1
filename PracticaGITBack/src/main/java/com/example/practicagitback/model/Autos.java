package com.example.practicagitback.model;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table (name="autos")

public class Autos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(lenght = 50, nullable = false)
    private String marca;
    @Column(lenght = 50, nullable = false)
    private String modelo;
    @Column(lenght = 50, nullable = false)
    private String placa;
    @Column(lenght = 50, nullable = false)
    private String color;
}
