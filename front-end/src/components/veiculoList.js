import React, { useEffect, useState } from 'react';
import { getVeiculos, deleteVeiculo } from '../services/api';
import { Table, Button } from 'react-bootstrap';

const VeiculoList = ({ onEdit }) => {
    const [veiculos, setVeiculos] = useState([]);

    useEffect(() => {
        fetchVeiculos();
    }, []);

    const fetchVeiculos = async () => {
        const data = await getVeiculos();
        setVeiculos(data);
    };

    const handleDelete = async (codigo) => {
        await deleteVeiculo(codigo);
        fetchVeiculos();
    };

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Ano</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {veiculos.map((veiculo) => (
                    <tr key={veiculo.codigo}>
                        <td>{veiculo.codigo}</td>
                        <td>{veiculo.marca}</td>
                        <td>{veiculo.modelo}</td>
                        <td>{veiculo.ano}</td>
                        <td>
                            <Button variant="warning" onClick={() => onEdit(veiculo)}>Editar</Button>{' '}
                            <Button variant="danger" onClick={() => handleDelete(veiculo.codigo)}>Excluir</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default VeiculoList;