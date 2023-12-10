const Funcionarios = require("../model/entidades/Funcionarios");
const funcionario = new Funcionarios();

class FuncionarioController {
  async getFuncionarios(req, res) {
    try {
      const result = await funcionario.getFuncionarios();
      return res.status(200).json(result);
    } catch (error) {
      console.log("Erro ao buscar Funcionários: " + error);
      res.status(500).json({ error: "Erro ao buscar Funcionários" });
    }
  }

  async filtrar(req, res) {
    const filtro = req.body;

    try {
      const result = await funcionario.filtrar(filtro);
      return res.status(200).json(result);
    } catch (error) {}
  }

  async getByMatricula(req, res) {
    const matricula = req.params.matricula;
    try {
      const result = await funcionario.getByMatricula(matricula);
      if (result) {
        return res.status(200).json(result);
      } else {
        res.status(404).json({ error: "Matrícula não encontrada" });
      }
    } catch (error) {
      console.log("Erro ao buscar Funcionário: " + error);
      res.status(500).json({ error: "Erro ao buscar Funcionário" });
    }
  }

  async create(req, res) {
    const funcionarioData = req.body;
    try {
      await funcionario.create(funcionarioData);
      res.status(201).json({ message: "Cadastro realizado com sucesso." });
    } catch (error) {
      console.log("Erro ao cadastrar Funcionário: " + error);
      res.status(500).json({ error: "Erro ao cadastrar Funcionário" });
    }
  }

  async update(req, res) {
    const funcionarioData = req.body;
    const matricula = req.params.matricula;
    try {
      await funcionario.update(matricula, funcionarioData);
      res.status(201).json({ message: "Cadastro atualizado com sucesso." });
    } catch (error) {
      console.log("Erro ao atualizar Funcionário: " + error);
      res.status(500).json({ error: "Erro ao atualizar Funcionário" });
    }
  }

  async delete(req, res) {
    const matricula = req.params.matricula;
    try {
      await funcionario.deleteByMatricula(matricula);
      res.status(200).json({ message: "Registro deletado com sucesso" });
    } catch (error) {
      console.log("Erro ao deletar funcionário:", error);
      res.status(500).json({ error: "Erro ao deletar funcionário" });
    }
  }
}

module.exports = FuncionarioController;

// 7:01
