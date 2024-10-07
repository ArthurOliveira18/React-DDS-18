import { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'

const Login = () => {

    // Variaveis pro usuario
   
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')
  
    
    // Variaveis pro alerta
    const [alertaClass,setAlertaClass] = useState('mb-3 d-none')
    const [alertaMensagem,setAlertaMensagem] = useState('')
    
  return (
    <div>

        <Container>

        <span class="material-symbols-outlined" style={{fontSize:'200px'}}>
            Login
        </span>

            {/* Caixinha do nome */}   
            <form>
               
                {/* Caixinha do email */}
                <FloatingLabel
                    controlId="floatingInputEmail"
                    label="Digite seu email"
                    className="mb-3">
                    <Form.Control 
                    type="email"
                    placeholder="name@example.com" 
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
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

                

                <Alert key='danger' variant={alertaClass} >
                    {alertaMensagem}
                </Alert>

                <Button variant="primary" >
                    Cadastrar
                </Button>

                <h3>
                    Já tem cadastro? 
                    <Nav.Link href= "/login">
                        Login
                    </Nav.Link>
                </h3>
            </form>
    </Container>
    </div>
  )
}

export default Login