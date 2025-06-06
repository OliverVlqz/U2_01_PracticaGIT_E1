    package mx.edu.utez.practicagit.service.auto;

    import mx.edu.utez.practicagit.controller.auto.AutoDto;
    import mx.edu.utez.practicagit.model.auto.Auto;
    import mx.edu.utez.practicagit.model.auto.AutoRepository;
    import mx.edu.utez.practicagit.model.proveedor.Proveedor;
    import mx.edu.utez.practicagit.model.proveedor.ProveedorRepository;
    import org.springframework.stereotype.Service;

    import java.util.List;

    @Service
    public class AutoService {
        private final AutoRepository automovilRepository;
        private final ProveedorRepository proveedorRepository;

        public AutoService(AutoRepository automovilRepository, ProveedorRepository proveedorRepository) {
            this.automovilRepository = automovilRepository;
            this.proveedorRepository = proveedorRepository;
        }

        public List<Auto> getAll() {
            return automovilRepository.findAll();
        }

        public Auto getById(Long id) {
            return automovilRepository.findById(id).orElseThrow();
        }

        public Auto save(AutoDto dto) {
            Proveedor proveedor = proveedorRepository.findById(dto.getProveedorId())
                    .orElseThrow(() -> new RuntimeException("Proveedor no encontrado"));

            Auto auto = new Auto(
                    null,
                    dto.getMarca(),
                    dto.getModelo(),
                    dto.getColor(),
                    dto.getPlacas(),
                    proveedor
            );

            return automovilRepository.save(auto);
        }

        public void delete(Long id) {
            automovilRepository.deleteById(id);
        }

        public List<Auto> getByProveedor(Long proveedorId) {
            return automovilRepository.findByProveedorId(proveedorId);
        }
    }
