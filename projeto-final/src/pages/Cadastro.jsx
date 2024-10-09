import { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'
import {useNavigate} from 'react-router-dom'


const url = "http://localhost:5000/usuarios"

const Cadastro = () => {
    
    // Variaveis pro usuario
    const [nome,setNome] = useState('')
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')
    const [confirmaSenha,setConfirmaSenha ] = useState('')
    
    // Variaveis pro alerta
    const [alertaClass,setAlertaClass] = useState('mb-3 d-none')
    const [alertaMensagem,setAlertaMensagem] = useState('')

    const navigate = useNavigate()

    //Função para cadastrar usuarios
    const handleSubmit = async (e) =>{
        e.preventDefault()

        if(!nome == ""){
            if(!email== ""){
                if(!senha== "" && !confirmaSenha == "" && senha === confirmaSenha ){
                    console.log('Entrei')
                    const user = {nome, email, senha}
                    const res = await fetch(url ,{
                        method: 'POST',
                        headers: {'Content-Type' : 'application/json'},
                        body: JSON.stringify(user)
                    })
                    
                    alert('Úsuario cadastrado com sucesso')
                    setNome('')
                    setEmail('')
                    setSenha('')
                    setConfirmaSenha('')
                    navigate('/login')
                } else{
                    setAlertaClass('mb-3')
                    setAlertaMensagem('As senhas não são iguais')
                }

            } else{
                setAlertaClass('mb-3')
                setAlertaMensagem('O campo email não pode ser vazio')
            }

        } else{
            setAlertaClass("mb-3")
            setAlertaMensagem('O campo nome não pode ser vazio')
        }
    }
    
  return (
    <div>

        <Container>

        <span class="material-symbols-outlined" style={{fontSize:'200px'}}>
            person_add
        </span>

            {/* Caixinha do nome */}   
            <form onSubmit={handleSubmit}>
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
                    
                    onChange={(e) => {setEmail(e.target.value)}}
                    />
                </FloatingLabel>

                {/* Caixinha da  senha */}
                <FloatingLabel controlId="floatingPassword" label="Senha">
                    <Form.Control 
                    type="password"
                    placeholder="Password" 
                    className="mb-3" 
                    value={senha}
                    
                    onChange={(e) => {setSenha(e.target.value)}}
                    />
                </FloatingLabel>

                {/* Caixinha de confirmação de senha */}
                <FloatingLabel controlId="floatingConfirmPassword" label="Confirme Senha">
                    <Form.Control 
                    type="password"
                    placeholder="Password"
                    className="mb-3" 
                    value={confirmaSenha}
                    onChange={(e) => {setConfirmaSenha(e.target.value)}}
                    />
                </FloatingLabel>

                <Alert key='danger' variant='danger' className={alertaClass} >
                    {alertaMensagem}
                </Alert>

                <Button variant="primary" type='submit'>
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