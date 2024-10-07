import { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'

const Cadastro = () => {

    // Variaveis pro usuario
    const [nome,setNome] = useState('')
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')
    const [confirmaSenha,setConfirmaSenha ] = useState('')
    
    // Variaveis pro alerta
    const [alertaClass,setAlertaClass] = useState('mb-3 d-none')
    const [alertaMensagem,setAlertaMensagem] = useState('')
    
  return (
    <div>

        <Container>

        <span class="material-symbols-outlined" style={{fontSize:'200px'}}>
            person_add
        </span>

            {/* Caixinha do nome */}   
            <form>
                <FloatingLabel
                    controlId="floatingInputName"
                    label="Nome"
                    className="mb-3">
                    <Form.Control 
                    type="text"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={(e) => {setNome(e.target.value)}} />
                </FloatingLabel>

                {/* Caixinha do email */}
                <FloatingLabel
                    controlId="floatingInputEmail"
                    label="Email address"
                    className="mb-3">
                    <Form.Control 
                    type="email"
                    placeholder="name@example.com" 
                    value={email}
                    onChange={(e) => {setNome(e.target.value)}}
                    />
                </FloatingLabel>

                {/* Caixinha da confirmação de senha */}
                <FloatingLabel controlId="floatingPassword" label="Senha">
                    <Form.Control 
                    type="password"
                    placeholder="Password" 
                    className="mb-3" 
                    value={senha}
                    onChange={(e) => {setSenha(e.target.value)}}
                    />
                </FloatingLabel>

                <FloatingLabel controlId="floatingConfirmPassword" label="Confirme Senha">
                    <Form.Control 
                    type="password"
                    placeholder="Password"
                    className="mb-3" 
                    value={confirmaSenha}
                    onChange={(e) => {setConfirmaSenha(e.target.value)}}
                    />
                </FloatingLabel>

                <Alert key='danger' variant={alertaClass} >
                    {alertaMensagem}
                </Alert>

                <Button variant="primary" >
                    Cadastrar
                </Button>

                <p>
                    Já tem cadastro? 
                    <Nav.Link href= "/login">
                        Login
                    </Nav.Link>
                </p>
            </form>
    </Container>
    </div>
  )
}

export default Cadastro