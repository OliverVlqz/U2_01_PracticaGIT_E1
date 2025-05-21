package mx.edu.utez.practicagit.model.auto;

import mx.edu.utez.practicagit.model.proveedor.Proveedor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AutoRepository extends JpaRepository<Auto, Long> {
    List<Auto> findByProveedorId(Long proveedorId);
}
