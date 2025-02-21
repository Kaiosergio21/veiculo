package com.example.veiculo.controller; // Pacote corrigido

import com.example.veiculo.model.Veiculo; // Import corrigido
import com.example.veiculo.service.VeiculoService; // Import corrigido
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/veiculos")
public class VeiculoController {

    @Autowired
    private VeiculoService veiculoService;

    // Criar um novo veículo
    @PostMapping
    public Veiculo criarVeiculo(@RequestBody Veiculo veiculo) {
        return veiculoService.salvar(veiculo);
    }

    // Listar todos os veículos
    @GetMapping
    public List<Veiculo> listarVeiculos() {
        return veiculoService.listarTodos();
    }

    // Buscar um veículo pelo código
    @GetMapping("/{codigo}")
    public ResponseEntity<Veiculo> buscarVeiculo(@PathVariable Long codigo) {
        return veiculoService.buscarPorCodigo(codigo)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Atualizar um veículo
    @PutMapping("/{codigo}")
    public ResponseEntity<Veiculo> atualizarVeiculo(@PathVariable Long codigo, @RequestBody Veiculo veiculo) {
        if (!veiculoService.buscarPorCodigo(codigo).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        veiculo.setCodigo(codigo);
        return ResponseEntity.ok(veiculoService.salvar(veiculo));
    }

    // Excluir um veículo
    @DeleteMapping("/{codigo}")
    public ResponseEntity<Void> excluirVeiculo(@PathVariable Long codigo) {
        if (!veiculoService.buscarPorCodigo(codigo).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        veiculoService.excluir(codigo);
        return ResponseEntity.noContent().build();
    }
}