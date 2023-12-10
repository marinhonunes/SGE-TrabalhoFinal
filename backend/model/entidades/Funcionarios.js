const Database = require("../database");

const banco = new Database();

class Funcionarios {
  nome;
  sobrenome;
  sexo;
  dataNascimento;
  cpf;
  rg;
  funcao;
  matricula;
  email;
  telefone;
  rua;
  numero;
  bairro;
  cidade;
  cep;
  estado;

  constructor(
    nome,
    sobrenome,
    sexo,
    dataNascimento,
    cpf,
    rg,
    funcao,
    matricula,
    email,
    telefone,
    rua,
    numero,
    bairro,
    cidade,
    cep,
    estado
  ) {
    (this.nome = nome),
      (this.sobrenome = sobrenome),
      (this.sexo = sexo),
      (this.dataNascimento = dataNascimento),
      (this.cpf = cpf),
      (this.rg = rg),
      (this.funcao = funcao),
      (this.matricula = matricula),
      (this.email = email),
      (this.telefone = telefone),
      (this.rua = rua),
      (this.numero = numero),
      (this.bairro = bairro),
      (this.cidade = cidade),
      (this.cep = cep),
      (this.estado = estado);
  }

  async getFuncionarios() {
    const funcionarios = await banco.ExecutaComando(
      "select * from funcionarios"
    );
    return funcionarios;
  }

  async filtrar({ termo }) {
    const sql = `
      SELECT * FROM funcionarios
      WHERE nome LIKE '%${termo}%' OR cpf LIKE '%${termo}%'
    `;
    const funcionarios = await banco.ExecutaComando(sql);
    return funcionarios;
  }
  

  async create(dadosFuncionario) {
    await banco.ExecutaComandoNonQuery(
      "INSERT INTO funcionarios set ?",
      dadosFuncionario
    );
  }

  async update(matricula, dadosFuncionario) {
    await banco.ExecutaComando("UPDATE funcionarios set ? where matricula=?", [
      dadosFuncionario,
      matricula,
    ]);
  }

  async getByMatricula(matricula) {
    const result = await banco.ExecutaComando(
      "SELECT * FROM funcionarios WHERE matricula = ?",
      [matricula]
    );
    const funcionario = result[0];
    return funcionario;
  }

  async deleteByMatricula(matricula) {
    await banco.ExecutaComandoNonQuery(
      "DELETE FROM funcionarios WHERE matricula=?",
      [matricula]
    );
  }
}
module.exports = Funcionarios;
