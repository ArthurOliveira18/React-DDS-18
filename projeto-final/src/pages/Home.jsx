import { useState, useEffect } from 'react';
import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Table from 'react-bootstrap/Table';

const url = "http://localhost:5000/usuarios";

const Home = () => {

  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    async function fetchData() {
        try {
            const res = await fetch(url);
            const users = await res.json();
            setUsuarios(users); // Aqui você define a lista de usuários corretamente
        } catch (error) {
            console.log(error.message);
        }
    }
    fetchData();
  }, []);
  
  return (
    <div>
        <Container>
          <h1>Lista de algo</h1>
          <div>
            <Button variant="primary" 
            size='lg'
            className='mb-3 
            d-inline-flex 
            justify-content-center'>
              <span className= "material-symbols-outlined" style={{fontSize: '30px'}}>
                    add_circle
              </span>
              Cadastrar
            </Button>
          </div>

          {/* Exibindo a lista de usuários */}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Senha</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((user) => ( // Corrigido para mapear os 'usuarios' e acessar a variável 'user'
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.nome}</td>
                  <td>{user.email}</td>
                  <td>{user.senha}</td>
                  <td>
                    <ButtonGroup size='sm'>
                      <Button variant="info">Editar</Button>
                      <Button variant="danger">Excluir</Button>
                    </ButtonGroup>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
    </div>
  )
}

export default Home;
