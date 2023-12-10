
const Database = require("../database");

const banco = new Database()

class Responsavel {

    nome;
    sobrenome;
    cpf;
    rg;
    telefone;
    email;
    constructor(nome,sobrenome,cpf,rg,telefone,email){
        this.nome=nome;
        this.sobrenome=sobrenome;
        this.cpf=cpf;
        this.rg=rg;
        this.telefone=telefone;
        this.email = email
    }

    //Obter todos os itens Cadastrados na tabela 
    async getAll(){

        const responsavel = await banco.ExecutaComando('select * from responsavel');
        return responsavel;
    }

    async filtrar ({nome}){
        let sql=`select * from responsavel where nome like '${nome}%'`
        const responsavel = await banco.ExecutaComando(sql, [`${nome}%`]);
        return responsavel
    }

    async create (dadosResponsavel){
        await banco.ExecutaComandoNonQuery('insert into responsavel set?',dadosResponsavel)
    }

    async getById(cpf){
        const result = await banco.ExecutaComando('SELECT * FROM responsavel WHERE cpf = ?',[cpf])
        const responsavel = result[0];
        return responsavel;
    }

    async delete(cpf){
        await banco.ExecutaComandoNonQuery('delete from responsavel where cpf=?',[cpf])
    }

    async update(cpf,dadosResponsavel){
        await banco.ExecutaComando('update responsavel set ? where cpf = ?',[dadosResponsavel,cpf])

    }



}

module.exports=Responsavel