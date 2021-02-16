import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionários/Gerente.js"
import {Diretor} from "./Funcionários/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const diretor = new Diretor("Rodrigo", 10000, 1231456780);
diretor.cadastrarSenha("123456789")
const gerente = new Gerente("Rodolfo", 5000, 12378945601);
gerente.cadastrarSenha("123456")

const cliente = new Cliente("Daniel", 789456142375, "456");
const estaLogadoDiretor = SistemaAutenticacao.login(diretor, "123456789");
const estaLogadoGerente = SistemaAutenticacao.login(gerente, "123456");
const estaLogadoCliente = SistemaAutenticacao.login(cliente, "456");

console.log(estaLogadoDiretor);
console.log(estaLogadoGerente);
console.log(estaLogadoCliente);
