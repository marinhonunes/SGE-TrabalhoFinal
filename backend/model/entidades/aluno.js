const Database = require("../database");

const banco = new Database

class Aluno {
    cpf;
    rg;
    nome;
    sobrenome;
    dataNascimento;
    sexo;
    endereco;
    bairro;
    cidade;
    cep;
    estado;
    telefone;
    email;
    constructor(cpf, rg, nome, sobrenome, dataNascimento, sexo, endereco, bairro, cidade, cep, estado, telefone, email) {
        this.cpf=cpf;
        this.rg=rg;
        this.nome=nome;
        this.sobrenome=sobrenome;
        this.dataNascimento=dataNascimento;
        this.sexo=sexo;
        this.endereco=endereco;
        this.bairro=bairro;
        this.cidade=cidade;
        this.cep=cep;
        this.estado=estado;
        this.telefone=telefone;
        this.email=email;
    }

    async getAll(){
        const alunos = await banco.ExecutaComando('SELECT * FROM aluno')
        return alunos;
    }

    async filtrar({ nome, sexo }) {
        let sql = "SELECT * FROM aluno WHERE nome LIKE ?";
        const params = [`%${nome}%`];
      
        if (sexo === 'Masculino' || sexo === 'Feminino') {
          sql += " AND sexo = ?";
          params.push(sexo);
        }
      
        const alunos = await banco.ExecutaComando(sql, params);
        return alunos;
      }
      

    async create(dadosAluno){
        await banco.ExecutaComandoNonQuery('insert into aluno set ?',dadosAluno)
    }

    async update(cpf,dadosAluno){
        await banco.ExecutaComandoNonQuery('update aluno set ? where cpf = ?',[dadosAluno,cpf])
    }

    async getByCPF(cpf){
        const result = await banco.ExecutaComando('SELECT * FROM aluno WHERE cpf = ?',[cpf]);
        const aluno = result[0];
        return aluno;
    }

    async deleteAluno(cpf){
        await banco.ExecutaComandoNonQuery('DELETE FROM aluno WHERE cpf = ?',[cpf])
    }

}
module.exports=Aluno