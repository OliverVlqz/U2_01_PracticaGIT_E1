package mx.edu.utez.practicagit.service.proveedor;

import mx.edu.utez.practicagit.model.proveedor.Proveedor;
import mx.edu.utez.practicagit.model.proveedor.ProveedorRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProveedorService {
    private final ProveedorRepository proveedorRepository;

    public ProveedorService(ProveedorRepository proveedorRepository) {
        this.proveedorRepository = proveedorRepository;
    }

    public List<Proveedor> getAll() {
        return proveedorRepository.findAll();
    }

    public Proveedor getById(Long id) {
        return proveedorRepository.findById(id).orElseThrow();
    }

    public Proveedor save(Proveedor proveedor) {
        return proveedorRepository.save(proveedor);
    }

    public void delete(Long id) {
        proveedorRepository.deleteById(id);
    }
}
