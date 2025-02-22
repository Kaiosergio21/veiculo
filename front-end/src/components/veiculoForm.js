import React, { useState, useEffect } from 'react';
import { addVeiculo, updateVeiculo } from '../services/api';
import { Form, Button } from 'react-bootstrap';

const VeiculoForm = ({ veiculoParaEditar, onVeiculoAdicionado }) => {
    const [veiculo, setVeiculo] = useState({ marca: '', modelo: '', ano: '' });

    useEffect(() => {
        if (veiculoParaEditar) {
            setVeiculo(veiculoParaEditar);
        }
    }, [veiculoParaEditar]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVeiculo({ ...veiculo, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (veiculo.codigo) {
            await updateVeiculo(veiculo.codigo, veiculo);
        } else {
            await addVeiculo(veiculo);
        }
        onVeiculoAdicionado();
        setVeiculo({ marca: '', modelo: '', ano: '' });
    };

    return (

        
        <Form onSubmit={handleSubmit}>

<Form.Group>
                <Form.Label>Ano</Form.Label>
                <Form.Control
                    type="number"
                    name="ano"
                    value={veiculo.ano}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Marca</Form.Label>
                <Form.Control
                    type="text"
                    name="marca"
                    value={veiculo.marca}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Modelo</Form.Label>
                <Form.Control
                    type="text"
                    name="modelo"
                    value={veiculo.modelo}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
         
            <Button variant="primary" type="submit">
                {veiculo.codigo ? 'Atualizar' : 'Adicionar'}
            </Button>
        </Form>
    );
};

export default VeiculoForm;