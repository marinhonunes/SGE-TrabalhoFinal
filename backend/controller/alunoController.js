const Aluno = require("../model/entidades/aluno");

const aluno = new Aluno()

class AlunoController {
    async getAll(req,res) {
        try {
            const result = await aluno.getAll()
            return res.status(200).json(result)
        } catch (error) {
            console.log("Erro ao buscar alunos"+error)
            res.status(500).json({error:"Erro ao buscar alunos"})
        }

    }

    async filtrar(req, res) {
        const filtro = req.body;
        try {
          const result = await aluno.filtrar(filtro);
          return res.status(200).json(result);
        } catch (error) {
          console.error('Error during filtering:', error);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
      }
      
    async getByCPF(req,res) {
        const cpf = req.params.cpf;
        try {
            const result = await aluno.getByCPF(cpf)
            if(result){
                return res.status(200).json(result)
            }else{
                res.status(404).json({error:'Aluno não encontrado'})
            }
        } catch (error) {
            console.log("Erro ao buscar alunos"+error)
            res.status(500).json({error:"Erro ao buscar alunos"})
        }

    }

    async create(req,res){
        const alunoData = req.body;
        try{
            await aluno.create(alunoData)
            res.status(200).json({message:"Aluno cadastrado com sucesso"})
        }catch(error){
            console.log("Erro ao cadastrar aluno"+error)
            res.status(500).json({error: "Erro ao cadastrar aluno"})
        }
    }

    async update(req,res){
        const cpf = req.params.cpf;
        const alunoData = req.body;
        try{
            await aluno.update(cpf,alunoData)
            res.status(200).json({message:"Aluno atualizado com sucesso"})
        }catch(error){
            console.log("Erro ao atualizar aluno"+error)
            res.status(500).json({error:"Erro ao atualizar aluno"})
        }
    }

    async deleteAluno(req,res){
        const cpf = req.params.cpf;
        try{
            await aluno.deleteAluno(cpf);
            res.status(200).json({message:'Aluno Deletado com sucesso!'})
        }catch(error){
            console.log('Erro ao deletar aluno',error)
            res.status(500).json({error:'Erro ao deletar aluno'})
        }
    }

}

module.exports=AlunoController