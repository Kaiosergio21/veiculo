package com.example.veiculo.repository; // Pacote corrigido

import com.example.veiculo.model.Veiculo; // Import corrigido
import org.springframework.data.jpa.repository.JpaRepository;

public interface VeiculoRepository extends JpaRepository<Veiculo, Long> {
}