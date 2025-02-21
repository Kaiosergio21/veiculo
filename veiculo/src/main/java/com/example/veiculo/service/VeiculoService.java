package com.example.veiculo.service; // Pacote corrigido

import com.example.veiculo.model.Veiculo; // Import corrigido
import com.example.veiculo.repository.VeiculoRepository; // Import corrigido
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VeiculoService {

    @Autowired
    private VeiculoRepository veiculoRepository;

    // Salvar ou atualizar um veículo
    public Veiculo salvar(Veiculo veiculo) {
        return veiculoRepository.save(veiculo);
    }

    // Listar todos os veículos
    public List<Veiculo> listarTodos() {
        return veiculoRepository.findAll();
    }

    // Buscar um veículo pelo código
    public Optional<Veiculo> buscarPorCodigo(Long codigo) {
        return veiculoRepository.findById(codigo);
    }

    // Excluir um veículo pelo código
    public void excluir(Long codigo) {
        veiculoRepository.deleteById(codigo);
    }
}