import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

const url = "http://localhost:5000/usuarios";

const Login = () => {

    // Variáveis para o usuário
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    // Variáveis para o alerta
    const [alertaClass, setAlertaClass] = useState('mb-3 d-none');
    const [alertaMensagem, setAlertaMensagem] = useState('');
    const [alertaVariante, setAlertaVariante] = useState('danger');

    // Lista de usuários
    const [usuarios, setUsuarios] = useState([]);

    // Resgatando dados da API
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(url);
                const users = await res.json();
                setUsuarios(users);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData();
    }, []);

    // Função para gravar local
    const gravarLocalStorage = (usuarios) => {
        localStorage.setItem("userName", usuarios.name);
        localStorage.setItem("userEmail", usuarios.email);
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        const userToFind = usuarios.find(
            (userFind) => userFind.email === email
        );

        if (email !== "") {
            if (senha !== "") {
                if (userToFind !== undefined && userToFind.senha === senha) {
                    console.log("Entrou");
                    setAlertaClass('mb-3 alert-success'); // Classe atualizada para sucesso
                    setAlertaMensagem('Login efetuado com sucesso');
                    setAlertaVariante('success');
                    alert("LOGIN FEITO COM SUCESSO SEU IMBECIL");
                    gravarLocalStorage(userToFind);
                } else {
                    setAlertaClass('mb-3 alert-danger'); // Classe de erro
                    setAlertaMensagem("Usuário ou senha inválidos");
                    setAlertaVariante('danger');
                }
            } else {
                setAlertaClass('mb-3 alert-danger'); // Classe de erro
                setAlertaMensagem("O campo senha não pode ser vazio");
                setAlertaVariante('danger');
            }
        } else {
            setAlertaClass('mb-3 alert-danger'); // Classe de erro
            setAlertaMensagem("O campo email não pode ser vazio");
            setAlertaVariante('danger');
        }
    };

    return (
        <div>
            <Container>
                <span className="material-symbols-outlined" style={{ fontSize: '200px' }}>
                    Login
                </span>

                <form onSubmit={handleLogin}>
                    {/* Caixinha do email */}
                    <FloatingLabel
                        controlId="floatingInputEmail"
                        label="Digite seu email"
                        className="mb-3">
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); }}
                        />
                    </FloatingLabel>

                    {/* Caixinha da senha */}
                    <FloatingLabel controlId="floatingPassword" label="Senha">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            className="mb-3"
                            value={senha}
                            onChange={(e) => { setSenha(e.target.value); }}
                        />
                    </FloatingLabel>

                    {/* Exibição do alerta */}
                    <Alert key={alertaVariante} variant={alertaVariante} className={alertaClass}>
                        {alertaMensagem}
                    </Alert>

                    <Button variant="primary" type="submit">
                        Logar
                    </Button>

                    <h3>
                        Não tem cadastro? 
                        <Nav.Link href="/cadastro">Cadastra-se</Nav.Link>
                    </h3>
                </form>
            </Container>
        </div>
    );
};

export default Login;
