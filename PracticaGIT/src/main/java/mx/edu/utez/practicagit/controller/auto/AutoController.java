package mx.edu.utez.practicagit.controller.auto;

import lombok.RequiredArgsConstructor;
import mx.edu.utez.practicagit.model.auto.Auto;
import mx.edu.utez.practicagit.service.auto.AutoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/autos")
@CrossOrigin

public class AutoController {

    private final AutoService autoService;
    public AutoController(AutoService autoService) {
        this.autoService = autoService;
    }
    @GetMapping("/")
    public List<Auto> getAll() {
        return autoService.getAll();
    }

    @GetMapping("/{id}")
    public Auto getById(@PathVariable Long id) {
        return autoService.getById(id);
    }

    @PostMapping("/")
    public Auto save(@RequestBody AutoDto dto) {
        return autoService.save(dto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        autoService.delete(id);
    }

    @GetMapping("/proveedor/{proveedorId}")
    public List<Auto> getByProveedor(@PathVariable Long proveedorId) {
        return autoService.getByProveedor(proveedorId);
    }
}
