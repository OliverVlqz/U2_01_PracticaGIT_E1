package mx.edu.utez.practicagit.controller.proveedor;

import lombok.RequiredArgsConstructor;
import mx.edu.utez.practicagit.model.proveedor.Proveedor;
import mx.edu.utez.practicagit.service.proveedor.ProveedorService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/proveedores")
@CrossOrigin

public class ProveedorController {
    private final ProveedorService proveedorService;

    public ProveedorController(ProveedorService proveedorService) {
        this.proveedorService = proveedorService;
    }

    @GetMapping("/")
    public List<Proveedor> getAll() {
        return proveedorService.getAll();
    }

    @GetMapping("/{id}")
    public Proveedor getById(@PathVariable Long id) {
        return proveedorService.getById(id);
    }

    @PostMapping("/")
    public ResponseEntity<?> save(@RequestBody ProveedorDto dto) {
        if (dto.getCorreo() == null || dto.getNombre() == null) {
            return ResponseEntity.badRequest().body("Faltan datos obligatorios");
        }

        Proveedor proveedor = new Proveedor();
        proveedor.setNombre(dto.getNombre());
        proveedor.setCorreo(dto.getCorreo());

        return ResponseEntity.ok(proveedorService.save(proveedor));
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        proveedorService.delete(id);
    }
}
